import { BrowserWindow, dialog, SaveDialogOptions } from 'electron'
import * as path from 'path'
import * as isDev from "electron-is-dev" ;
import { addFileExtension } from '../utilities'
import * as fs from 'fs'


import { CustomMenu } from './CustomMenu'

export class Window {
  id: number
  win: BrowserWindow
  filePath: string | undefined
  onFocus: any

  constructor(props: any) {
    const {id, onFocus} = props
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

    // const storage = new Store();
    // const currFileName = storage.get(lsFileKey) as string;
    // if (currFileName) {
    //   win.webContents.on("did-finish-load", () => {
    //     this.setTitleFromPath(currFileName)
    //   });
    // }
    this.win = win
    this.id = id
    this.onFocus = onFocus
    this.attachListeners()
  }

  attachListeners() {
    this.win.on('closed', () => this.win.destroy())
    this.win.on('focus', () => this.onFocus(this.id))
    this.win.once('ready-to-show', () => this.win.show())
  }

  sendSaveFile() {
    console.log('in window saving')
    this.sendMessage('SAVE_FILE')
  }

  receiveSaveFile(contents: any) {
    console.log('in window receiving save file')
    if (this.filePath) {
      this.writeFile(this.filePath, contents)
    } else {
      // dialog.showSaveDialog((this.win, {defaultPath: ''}) as SaveDialogOptions).then(({filePath, canceled}) => {
      //   if (!canceled && filePath) {
      //     const withExtension: string = addFileExtension(filePath)
      //     this.writeFile(withExtension, contents)
      //     this.filePath = filePath
            // this.setTitleFromPath(filePath)
      //   }
      // })
    }
  }

  writeFile(filePath: string,  contents: any) {
    fs.writeFile(filePath, contents, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }

  setTitleFromPath(filePath: string) {
    this.win.setTitle(path.basename(filePath))
  }

  sendMessage(type: string, ...contents:any[]) {
    this.win.webContents.send(type, ...contents);
  }

  destroy() {
    this.win.destroy()
  }
}
