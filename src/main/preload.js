const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld("electron", {
    ipcRenderer: {
        sendSaveFileSuccess: (payload) => ipcRenderer.send('SAVE_FILE_SUCCESS', payload),
        sendReceiveExportSvg: (payload) => ipcRenderer.send('RECEIVE_EXPORT_SVG', payload),
        sendGraphChanged: () => ipcRenderer.send('GRAPH_CHANGED'),
        onSaveFile: (callback) => ipcRenderer.on('SAVE_FILE', callback),
        onOpenFile: (callback) => ipcRenderer.on('OPEN_FILE', callback),
        onExportSvg: (callback) => ipcRenderer.on('EXPORT_SVG', callback),
        onSetLocale: (callback) => ipcRenderer.on('SET_LOCALE', callback),
    },
});