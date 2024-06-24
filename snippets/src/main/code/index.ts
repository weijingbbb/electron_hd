import { app } from 'electron'
import ignoreMouseEvents from './ignoreMouseEvents'
import * as ipc from './ipc'
import * as shortCut from './shorCut'
import { createWindow } from './window'

app.whenReady().then(() => {
  const win = createWindow()

  // 注册通信事件
  ipc.registerIpc()
  // 注册热键
  shortCut.registerShortCut()
  // 设置鼠标穿透
  ignoreMouseEvents(win)
})

export default {
  createWindow
}
