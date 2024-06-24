import { BrowserWindow } from 'electron'
import { createConfigWindow as createWindow } from './window'

let configWindow = null as null | BrowserWindow

// 配置窗口，由主进程窗口的按钮进行调用创建
export const createConfigWindow = () => {
  // 如果窗口已经存在，则不再创建
  if (configWindow) {
    return
  }
  configWindow = createWindow()

  // 监听窗口关闭事件，将窗口对象置空
  configWindow.on('closed', () => {
    configWindow = null
  })
}
