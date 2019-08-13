import { BrowserWindow } from 'electron'
import * as path from 'path'
import * as isDev from "electron-is-dev" ;
import { lsFileKey } from '../constants'

import { CustomMenu } from './CustomMenu'
import * as Store from 'electron-store'

export class Window {
  id: number
  win: BrowserWindow
  onFocus: any

  constructor() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      show: false,
      webPreferences: {nodeIntegration: true},
    });

    win.loadURL(
        isDev
            ? "http://localhost:3000" :
             `file://${path.join(__dirname, "../../build/index.html")}`
    );

    if (isDev) {
      win.webContents.openDevTools()
    }

    const storage = new Store();
    const currFileName = storage.get(lsFileKey) as string;
    if (currFileName) {
      win.webContents.on("did-finish-load", () => {
        this.setTitleFromPath(currFileName)
      });
    }
    this.win = win
    this.attachListeners()
  }

  attachListeners() {
    this.win.on('closed', () => this.win.destroy())
    this.win.once('ready-to-show', () => this.win.show())
  }

  setTitleFromPath(filePath: string) {
    this.win.setTitle(path.basename(filePath))
  }

  sendMessage(type: string, ...contents) {
    this.win.webContents.send(type, ...contents);
  }

  destroy() {
    this.win.destroy()
  }
}
