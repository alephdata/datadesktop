import { BrowserWindow, ipcMain }  from 'electron'
import { SAVE_FILE, OPEN_FILE }  from './actionTypes'
import { saveFile, openFile } from './actions'

export default (win: BrowserWindow) => {
  ipcMain.on(SAVE_FILE, (e: any, data: any) => {
    // saveFile(win, data)
  })
  ipcMain.on(OPEN_FILE, (e: any, file: any) => {
    // openFile(win, file)
  })
}
