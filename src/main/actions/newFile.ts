import { BrowserWindow, OpenDialogOptions, app, dialog }  from 'electron'
import * as fs from 'fs'
const Store = require('electron-store');
import { lsFileKey, lsDataKey } from '../constants'

export const newFile = () => {
  const storage = new Store();
  const lsCurrFile = storage.set(lsFileKey, null);
  const lsCurrData = storage.set(lsDataKey, null);
}
