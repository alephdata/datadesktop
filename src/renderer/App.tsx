import React from 'react'
import { FocusStyleManager } from '@blueprintjs/core';
import { VisGraph, GraphConfig, GraphLayout, Viewport } from '@alephdata/vislib';
import { defaultModel, Model} from '@alephdata/followthemoney'

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/select/lib/css/blueprint-select.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import '@blueprintjs/table/lib/css/table.css';
import './App.css';

FocusStyleManager.onlyShowFocusOnTabs();

const model = new Model(defaultModel)
const config = new GraphConfig()

interface IAppProps {
  ipcRenderer: any
}

interface IAppState {
  layout: GraphLayout,
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
        layout: GraphLayout.fromJSON(config, model, parsed.layout),
        viewport: Viewport.fromJSON(config, parsed.viewport),
      }
    } else {
      this.state = {
        // @ts-ignore
        layout: new GraphLayout(config, model),
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
      layout: GraphLayout.fromJSON(config, model, layout),
      viewport: Viewport.fromJSON(config, viewport),
    })
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
        this.saveToLocalStorage();
      }
    }
  }

  updateViewport(viewport: Viewport) {
    const { ipcRenderer } = this.props;
    this.setState({'viewport': viewport})
    if (!ipcRenderer) {
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    const graphData = JSON.stringify({
      layout: this.state.layout.toJSON(),
      viewport: this.state.viewport.toJSON()
    })
    localStorage.setItem('storedGraphData', graphData)
  }

  render() {
    const { layout, viewport } = this.state
    return (
      <VisGraph
        config={config}
        // @ts-ignore
        model={model}
        layout={layout}
        viewport={viewport}
        updateLayout={this.updateLayout}
        updateViewport={this.updateViewport}
        exportSvg={this.exportSvg}
      />
    )
  }
}
