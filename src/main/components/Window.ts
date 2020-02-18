import { app, BrowserWindow, dialog, SaveDialogOptions } from 'electron'
import * as path from 'path'
import * as isDev from "electron-is-dev" ;
import { addFileExtension } from '../utilities'
import * as fs from 'fs'


import { CustomMenu } from './CustomMenu'

export class Window {
  id: number
  win: BrowserWindow
  filePath: string | undefined
  hasUnsavedChanges: boolean
  onFocus: any

  constructor(props: any) {
    const {id, onFocus} = props
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
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

    this.win = win
    this.id = id
    this.hasUnsavedChanges = false
    this.onFocus = onFocus
    this.attachListeners()
  }

  attachListeners() {
    this.win.on('closed', () => this.win.destroy())
    this.win.on('focus', () => this.onFocus(this.id))
    this.win.once('ready-to-show', () => this.onReady())
  }

  sendSaveFile(saveAs?:boolean) {
    this.sendMessage('SAVE_FILE', saveAs)
  }

  receiveSaveFile(props: any) {
    const {graphData, saveAs} = props
    if (!saveAs && this.filePath) {
      this.writeFile(this.filePath, graphData)
    } else {
      dialog.showSaveDialog((this.win, {defaultPath: ''}) as SaveDialogOptions).then(({filePath, canceled}) => {
        if (!canceled && filePath) {
          const withExtension: string = addFileExtension(filePath, '.vis')
          this.writeFile(withExtension, graphData)
        }
      })
    }
  }

  writeFile(filePath: string, contents: any) {
    fs.writeFile(filePath, contents, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      this.filePath = filePath
      this.hasUnsavedChanges = false
      this.setTitle()
    });
  }

  sendOpenFile(filePath: string, data: any) {
    this.win.webContents.on('did-finish-load', () => {
      this.filePath = filePath
      this.hasUnsavedChanges = false
      this.setTitle()
      this.sendMessage('OPEN_FILE', data)
    })
  }

  exportSvg(data: any) {
    dialog.showSaveDialog((this.win, {defaultPath: ''}) as SaveDialogOptions).then(({filePath, canceled}) => {
      if (!canceled && filePath) {
        const withExtension: string = addFileExtension(filePath, '.svg')
        fs.writeFile(withExtension, data, (err) => {
          if (err) {
            console.log(err);
            return;
          }
        });
      }
    })
  }

  setTitle() {
    const base = this.filePath ? path.basename(this.filePath) : 'Untitled'
    const title = this.hasUnsavedChanges ? `${base}*` : base
    this.win.setTitle(title)
  }

  sendMessage(type: string, ...contents:any[]) {
    this.win.webContents.send(type, ...contents);
  }

  onGraphChanged() {
    this.hasUnsavedChanges = true
    this.setTitle()
  }

  onReady() {
    this.setTitle()
    let locale = app.getLocale();
    locale = (locale === "en_GB" || locale === "en_US") ? "en" : locale;
    this.sendMessage('SET_LOCALE', locale);
    this.win.show()
  }

  destroy() {
    this.win.destroy()
  }
}
