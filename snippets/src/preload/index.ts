import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
const api = {
  // 隐藏窗口
  hideWindow: () => {
    ipcRenderer.send('hideWindow')
  },
  // 注册快捷键
  shortCur: (str: string) => {
    return ipcRenderer.invoke('shortCur', str)
  },
  // 设置鼠标穿透
  setIgnoreMouseEvents: (ignore, options) => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  // 创建打开配置窗口
  openConfigWindow: () => {
    ipcRenderer.send('openConfigWindow')
  },
  sql: (sql: string, type: SqlActionType, params: SqlParams = {}) => {
    return ipcRenderer.invoke('sql', sql, type, params)
  },
  openWindow: (name: WindowNameType) => {
    ipcRenderer.send('openWindow', name)
  },
  closeWindow: (name: WindowNameType) => {
    ipcRenderer.send('closeWindow', name)
  },
  // 选择数据库存放目录
  selectDirectory: () => {
    return ipcRenderer.invoke('selectDirectory')
  },
  setDatabaseDirectory: (path: string) => {
    ipcRenderer.send('setDatabaseDirectory', path)
  },
  initTable: () => {
    ipcRenderer.send('initTable')
  },

  toRenderOpenWindow: (callback) => {
    console.log('preoload:----toRenderOpenWindow')
    ipcRenderer.on('toRenderOpenWindow', (_, name) => {
      // callback(name)
      ipcRenderer.send('openWindow', name)
    })
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
