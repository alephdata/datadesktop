import { BrowserWindow, SaveDialogOptions, app, dialog } from 'electron'
import { lsFileKey, lsDataKey } from '../constants'
import { addFileExtension } from '../utilities'
// import { setWindowTitleFromPath } from '../createMainWindow'
import * as fs from 'fs'
const Store = require('electron-store');

export const writeFile = (filePath: string, data: any) => {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

export const saveFile = (window: BrowserWindow, saveAs?: boolean, onSuccess?: any) => {
  const storage = new Store();
  const lsCurrFile = storage.get(lsFileKey);
  const lsCurrData = storage.get(lsDataKey);

  if (lsCurrFile && !saveAs) {
    writeFile(lsCurrFile, lsCurrData)
  } else {
    dialog.showSaveDialog(window, {defaultPath: lsCurrFile || ''} as SaveDialogOptions).then(({filePath, canceled}) => {
      if (!canceled && filePath) {
        const withExtension: string = addFileExtension(filePath)
        writeFile(withExtension, lsCurrData)
        storage.set(lsFileKey, withExtension)
        if (onSuccess) {
          onSuccess(withExtension)
        }
      }
    })
  }

}
