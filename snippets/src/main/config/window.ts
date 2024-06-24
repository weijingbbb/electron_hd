import { BrowserWindow, shell } from 'electron'

import { is } from '@electron-toolkit/utils'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'

// 创建配置窗口
export function createConfigWindow() {
  // Create the browser window.
  const configWindow = new BrowserWindow({
    width: 1200,
    height: 400,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })


  configWindow.on('ready-to-show', () => {
    configWindow.show()
  })

  configWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    configWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    configWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  // 如果是开发环境，打开开发者工具
  if (is.dev) configWindow.webContents.openDevTools()

  return configWindow
}


