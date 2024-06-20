const { contextBridge, ipcRenderer, shell } = require("electron");
// const fs = require('fs')

// fs.writeFileSync('a.txt', 'bbb')

// contextBridge.exposeInMainWorld('api', {

// })

shell.openExternal('http://www.baidu.com')

window.api = {
    toMain: () => { 
        ipcRenderer.send('mainEvent')
    }
}