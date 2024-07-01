import { BrowserWindow, IpcMainEvent, IpcMainInvokeEvent, app } from 'electron'
import { OptionsType, createWindow } from './createWindow'

export type ConfigType = Record<
  WindowNameType,
  {
    id: number
    options: OptionsType
  }
>

export const WindowConfig: ConfigType = {
  search: {
    id: 0,
    options: {
      initShow: true,
      openDevTools: false,
      hash: ''
    }
  },
  config: {
    id: 0,
    options: {
      width: 1060,
      height: 600,
      frame: true,
      transparent: false,
      openDevTools: false,
      hash: '/#config/category/content-list'
    }
  },
  setting: {
    id: 0,
    options: {
      initShow: true,
      width: 700,
      height: 400,
      frame: true,
      transparent: false,
      openDevTools: true,
      hash: '/#config'
    }
  }
}

// 通过id查找窗口，懒汉模式，如果没有则创建，有则返回
export function getWindowByName(name: WindowNameType): BrowserWindow {
  let win = BrowserWindow.fromId(WindowConfig[name].id)
  if (!win) {
    win = createWindow(WindowConfig[name].options)
    WindowConfig[name].id = win.id
  }
  console.log(name, win.id, WindowConfig[name].id)
  return win
}

export const getWindowByEvent = (event: IpcMainEvent | IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

app.whenReady().then(() => {
  getWindowByName('search')
  getWindowByName('config')
  getWindowByName('setting')
})
