import React from 'react'
import { FocusStyleManager } from '@blueprintjs/core';
import { VisGraph, GraphConfig, GraphLayout, Viewport } from '@alephdata/vislib';
import { defaultModel, Model} from '@alephdata/followthemoney'

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/select/lib/css/blueprint-select.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import './App.css';

const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

FocusStyleManager.onlyShowFocusOnTabs();

const model = new Model(defaultModel)
const config = new GraphConfig()
// const demoKey = 'LS_v1'

interface IAppState {
  layout: GraphLayout,
  viewport: Viewport
}

export default class Vis2 extends React.Component <{}, IAppState> {
  saveTimeout: any

  constructor(props: any) {
    super(props)
    this.attachListeners()

    this.updateLayout = this.updateLayout.bind(this);
    this.updateViewport = this.updateViewport.bind(this);
    this.saveFile = this.saveFile.bind(this);
    this.openFile = this.openFile.bind(this);
    this.state = {
      // @ts-ignore
      layout: new GraphLayout(config, model),
      viewport: new Viewport(config)
    }
  }

  attachListeners() {
    ipcRenderer.on('SAVE_FILE', (event: any, saveAs: boolean) => this.saveFile(saveAs))
    ipcRenderer.on('OPEN_FILE', (event: any, data: any) => this.openFile(data))
  }

  saveFile(saveAs: boolean) {
    console.log('in save file', this.state.layout)
    const { layout, viewport } = this.state
    const graphData = JSON.stringify({
      layout: layout.toJSON(),
      viewport: viewport.toJSON()
    })
    ipcRenderer.send('SAVE_FILE_SUCCESS', {graphData, saveAs})
  }

  openFile(data: any) {
    const { layout, viewport } = JSON.parse(data)
    console.log('in OPENING file', data)
    this.setState({
      // @ts-ignore
      layout: GraphLayout.fromJSON(config, model, layout),
      viewport: Viewport.fromJSON(config, viewport),
    })
  }

  updateLayout(layout: GraphLayout, historyModified: boolean = false) {
    this.setState({'layout': layout})

    if (historyModified) {
      ipcRenderer.send('GRAPH_CHANGED')
    }
  }

  updateViewport(viewport: Viewport) {
    this.setState({'viewport': viewport})
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
      />
    )
  }
}
