import { BrowserWindow, OpenDialogOptions, app, dialog }  from 'electron'
import * as fs from 'fs'

export const openFile = (win: BrowserWindow, onSuccess?: any) => {
  // dialog.showOpenDialog(win as OpenDialogOptions).then(({filePaths}) => {
  //   // if (filePaths && filePaths.length > 0) {
  //   //   fs.readFile(filePaths[0], 'utf-8', (err, data) => {
  //   //       if(err){
  //   //           console.log("An error ocurred reading the file :" + err.message);
  //   //           return;
  //   //       }
  //   //
  //   //       const storage = new Store();
  //   //       const lsCurrFile = storage.set(lsFileKey, filePaths[0]);
  //   //       const lsCurrData = storage.set(lsDataKey, data);
  //   //
  //   //       if (onSuccess) {
  //   //         onSuccess(filePaths[0], data)
  //   //       }
  //   //   });
  //   }
  // });
}
