const { contextBridge, ipcRenderer } = require("electron");
const fs = require('fs')

fs.writeFileSync('a.txt', 'bbbb')

// contextBridge.exposeInMainWorld('api', {

// })

window.api = {
    toMain: () => { 
        ipcRenderer.send('mainEvent')
    }
}