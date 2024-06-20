const { contextBridge, ipcRenderer } = require("electron");

// contextBridge.exposeInMainWorld('api', {

// })

window.api = {
    toMain: () => { 
        ipcRenderer.send('mainEvent')
    }
}