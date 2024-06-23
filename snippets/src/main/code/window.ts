import { BrowserWindow, shell } from 'electron'

import { is } from '@electron-toolkit/utils'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'

export function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 250,
    x: 1600,
    y: 0,
    show: false,
    autoHideMenuBar: true,
    frame: false,
    transparent: true,
    // 保持置顶
    // alwaysOnTop: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })


  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  // 如果是开发环境，打开开发者工具
  if (is.dev) mainWindow.webContents.openDevTools()

  return mainWindow
}
