const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('api', {
    toPreload: (callback) => { 
        ipcRenderer.on('toPreload', (_, value) => { 
            callback(value)
        })
    },
    showMainPopMenu: () => { 
        ipcRenderer.send('mainPopMenu');
    },
    selectFilePreload:  () => { 
        return  ipcRenderer.invoke('selectFileMain')
    }
})