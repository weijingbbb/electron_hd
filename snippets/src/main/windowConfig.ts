import { BrowserWindow } from 'electron'
import { OptionsType, createWindow } from './createWindow'

export type WindowNameType = 'search' | 'config' | 'setting'

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
      openDevTools: false
    }
  },
  config: {
    id: 1,
    options: {
      openDevTools: false
    }
  },
  setting: {
    id: 2,
    options: {
      openDevTools: false
    }
  }
}

export function getWindow(name: WindowNameType): BrowserWindow {
  let win = BrowserWindow.fromId(WindowConfig[name].id)
  if (!win) {
    win = createWindow(WindowConfig[name].options)
    WindowConfig[name].id = win.id
  }
  return win
}
