import { app } from 'electron'
import * as ipc from './ipc'
import * as shortCut from './shorCut'
import { createWindow } from './window'

app.whenReady().then(() => {
  const win = createWindow()

  // 注册通信事件
  ipc.registerIpc()
  // 注册热键
  shortCut.registerShortCut(win)
})

export default {
  createWindow
}
