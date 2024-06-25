import { BrowserWindow, shell } from 'electron'
import url from 'node:url'

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
    frame: true,
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
    configWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config/category')
  } else {
    configWindow.loadURL(
      url.format({
        // 编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        // 协议
        protocol: 'file',
        slashes: true,
        // hash的值
        hash: 'config/category'
      })
    )
  }

  // 如果是开发环境，打开开发者工具
  if (is.dev) configWindow.webContents.openDevTools()

  return configWindow
}


