import React from 'react'
import { FocusStyleManager } from '@blueprintjs/core';
import { VisGraph, GraphConfig } from '@alephdata/vislib';
import { defaultModel, Model} from '@alephdata/followthemoney'

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/select/lib/css/blueprint-select.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import './App.css';

FocusStyleManager.onlyShowFocusOnTabs();

const model = new Model(defaultModel)
const config = new GraphConfig()
const demoKey = 'LS_v1'

export default class Vis2 extends React.Component {
  saveTimeout: any
  storedGraphData: any

  constructor(props: any) {
    super(props)
    const localStorageContents = localStorage.getItem(demoKey);
    if (localStorageContents) {
      this.storedGraphData = JSON.parse(localStorageContents)
    }

    this.updateStoredGraphData = this.updateStoredGraphData.bind(this);
  }

  updateStoredGraphData(storedGraphData: any) {
    this.storedGraphData = storedGraphData;

    clearTimeout(this.saveTimeout)
    this.saveTimeout = setTimeout(() => {
      localStorage.setItem(demoKey, storedGraphData)
    }, 1000)
  }

  render() {
    return (
      <VisGraph
        config={config}
        model={model}
        storedGraphData={this.storedGraphData}
        updateStoredGraphData={this.updateStoredGraphData}
      />
    )
  }
}
