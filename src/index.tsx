import React from 'react';
import ReactDOM from 'react-dom';
import App from './renderer/App';

import * as serviceWorker from './renderer/serviceWorker';
declare global {
    interface Window {
      require: any;
    }
}

let ipcRenderer;

if (process.env.REACT_APP_ENV !== 'browser_only') {
  ipcRenderer = window.require('electron').ipcRenderer;
}

ReactDOM.render(<App ipcRenderer={ipcRenderer} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
