import React from 'react'
import { EntityManager, GraphConfig, GraphLayout, GraphLogo, Viewport, VisGraph } from '@alephdata/react-ftm';
import logoBase64 from './static/logoBase64';

const logo = new GraphLogo({
  text: "Data Desktop",
  image: logoBase64,
});

const config = new GraphConfig({ editorTheme: "dark", toolbarPosition: 'top', logo });
const entityManager = new EntityManager();

interface IAppProps {
  ipcRenderer: any
}

interface IAppState {
  layout: GraphLayout,
  locale?: string,
  viewport: Viewport
}

export default class Vis2 extends React.Component <IAppProps, IAppState> {
  saveTimeout: any

  constructor(props: any) {
    super(props)
    this.attachListeners()

    const storedGraphData = localStorage.getItem('storedGraphData')

    if (storedGraphData && !props.ipcRenderer) {
      const parsed = JSON.parse(storedGraphData)
      this.state = {
        // @ts-ignore
        layout: GraphLayout.fromJSON(config, entityManager, parsed.layout),
        viewport: Viewport.fromJSON(config, parsed.viewport),
      }
    } else {
      this.state = {
        // @ts-ignore
        layout: new GraphLayout(config, entityManager),
        viewport: new Viewport(config)
      }
    }

    this.updateLayout = this.updateLayout.bind(this);
    this.updateViewport = this.updateViewport.bind(this);
    this.saveFile = this.saveFile.bind(this);
    this.openFile = this.openFile.bind(this);
    this.exportSvg = this.exportSvg.bind(this);
  }

  attachListeners() {
    const { ipcRenderer } = this.props;

    if (ipcRenderer) {
      ipcRenderer.on('SAVE_FILE', (event: any, saveAs: boolean) => this.saveFile(saveAs))
      ipcRenderer.on('OPEN_FILE', (event: any, data: any) => this.openFile(data))
      ipcRenderer.on('SET_LOCALE', (event: any, locale: any) => this.setLocale(locale))
    }
  }

  saveFile(saveAs: boolean) {
    const { ipcRenderer } = this.props;
    const { layout, viewport } = this.state
    const graphData = JSON.stringify({
      layout: layout.toJSON(),
      viewport: viewport.toJSON()
    })

    ipcRenderer.send('SAVE_FILE_SUCCESS', {graphData, saveAs})
  }

  openFile(data: any) {
    const { layout, viewport } = JSON.parse(data)

    this.setState({
      // @ts-ignore
      layout: GraphLayout.fromJSON(config, entityManager, layout),
      viewport: Viewport.fromJSON(config, viewport),
    })
  }

  setLocale(locale: string) {
    this.setState({ locale });
  }

  exportSvg(data: any) {
    const { ipcRenderer } = this.props;

    ipcRenderer.send('EXPORT_SVG', data)
  }

  updateLayout(layout: GraphLayout, historyModified: boolean = false) {
    const { ipcRenderer } = this.props;

    this.setState({'layout': layout})

    if (historyModified) {
      if (ipcRenderer) {
        ipcRenderer.send('GRAPH_CHANGED')
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
      layout: layout ? layout.toJSON() : this.state.layout.toJSON(),
      viewport: viewport ? viewport.toJSON() : this.state.viewport.toJSON()
    })
    localStorage.setItem('storedGraphData', graphData)
  }

  render() {
    const { layout, locale, viewport } = this.state;

    return (
      <VisGraph
        config={config}
        entityManager={entityManager}
        layout={layout}
        viewport={viewport}
        updateLayout={this.updateLayout}
        updateViewport={this.updateViewport}
        exportSvg={this.exportSvg}
        locale={locale}
        writeable
      />
    )
  }
}
