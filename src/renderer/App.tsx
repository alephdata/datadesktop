import React from 'react'
import { EntityManager, exportSvg, GraphConfig, GraphLayout, GraphLogo, Viewport, NetworkDiagram } from '@alephdata/react-ftm';
import logoBase64 from './static/logoBase64';

const logo = new GraphLogo({
  text: "Data Desktop",
  image: logoBase64,
});

const config = new GraphConfig({ editorTheme: "dark", toolbarPosition: 'top', logo });

interface IAppProps {
  ipcRenderer: any
}

interface IAppState {
  layout: GraphLayout,
  locale?: string,
  viewport: Viewport
}

export default class App extends React.Component <IAppProps, IAppState> {
  entityManager: EntityManager
  saveTimeout: any
  svgRef: React.RefObject<SVGSVGElement>

  constructor(props: any) {
    super(props)
    this.attachListeners()

    const storedGraphData = localStorage.getItem('storedGraphData')

    if (storedGraphData && !props.ipcRenderer) {
      const parsed = JSON.parse(storedGraphData)
      this.state = {
        // @ts-ignore
        layout: GraphLayout.fromJSON(config, parsed.layout),
        viewport: Viewport.fromJSON(config, parsed.viewport),
      }
      this.entityManager = EntityManager.fromJSON({}, parsed.entities);
    } else {
      this.state = {
        // @ts-ignore
        layout: new GraphLayout(config),
        viewport: new Viewport(config)
      }
      this.entityManager = new EntityManager();
    }

    this.updateLayout = this.updateLayout.bind(this);
    this.updateViewport = this.updateViewport.bind(this);
    this.saveFile = this.saveFile.bind(this);
    this.openFile = this.openFile.bind(this);
    this.exportSvg = this.exportSvg.bind(this);

    this.svgRef = React.createRef();
  }

  attachListeners() {
    const { ipcRenderer } = this.props;

    if (ipcRenderer) {
      ipcRenderer.onSaveFile((event: any, saveAs: boolean) => this.saveFile(saveAs));
      ipcRenderer.onOpenFile((event: any, data: any) => this.openFile(data));
      ipcRenderer.onExportSvg((event: any) => this.exportSvg());
      ipcRenderer.onSetLocale((event: any, locale: any) => this.setLocale(locale));
    }
  }

  saveFile(saveAs: boolean) {
    const { ipcRenderer } = this.props;
    const { layout, viewport } = this.state;
    const graphData = JSON.stringify({
      entities: this.entityManager.toJSON(),
      layout: layout.toJSON(),
      viewport: viewport.toJSON()
    })

    ipcRenderer.sendSaveFileSuccess({ graphData, saveAs });
  }

  openFile(data: any) {
    const parsed = JSON.parse(data);
    // supports legacy .vis files with layout.entities
    const { entities, ...layout } = parsed.layout;
    this.entityManager = EntityManager.fromJSON({}, entities || parsed.entities);
    this.setState({
      // @ts-ignore
      layout: GraphLayout.fromJSON(config, layout),
      viewport: Viewport.fromJSON(config, parsed.viewport),
    })
  }

  setLocale(locale: string) {
    this.setState({ locale });
  }

  exportSvg() {
    const { ipcRenderer } = this.props;
    const { layout, viewport } = this.state;

    const data = exportSvg(layout, viewport, this.svgRef.current);
    ipcRenderer.sendReceiveExportSvg(data);
  }

  updateLayout(layout: GraphLayout, historyModified: boolean = false) {
    const { ipcRenderer } = this.props;

    this.setState({'layout': layout})

    if (historyModified) {
      if (ipcRenderer) {
        ipcRenderer.sendGraphChanged();
      } else {
        this.saveToLocalStorage({ layout });
      }
    }
  }

  updateViewport(viewport: Viewport) {
    const { ipcRenderer } = this.props;
    this.setState({'viewport': viewport})
    if (!ipcRenderer) {
      this.saveToLocalStorage({ viewport });
    }
  }

  saveToLocalStorage({ layout, viewport }: { layout?: GraphLayout, viewport?: Viewport }) {
    const graphData = JSON.stringify({
      entities: this.entityManager.toJSON(),
      layout: layout ? layout.toJSON() : this.state.layout.toJSON(),
      viewport: viewport ? viewport.toJSON() : this.state.viewport.toJSON()
    })
    localStorage.setItem('storedGraphData', graphData)
  }

  render() {
    const { layout, locale, viewport } = this.state;

    return (
      <NetworkDiagram
        config={config}
        entityManager={this.entityManager}
        layout={layout}
        viewport={viewport}
        updateLayout={this.updateLayout}
        updateViewport={this.updateViewport}
        locale={locale}
        writeable
        svgRef={this.svgRef}
      />
    )
  }
}
