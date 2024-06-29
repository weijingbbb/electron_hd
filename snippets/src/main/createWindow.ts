import { BrowserWindow, BrowserWindowConstructorOptions, shell } from 'electron'

import { is } from '@electron-toolkit/utils'
import url from 'node:url'
import { join } from 'path'
import icon from '../../resources/icon.png?asset'

export interface OptionsType extends Partial<BrowserWindowConstructorOptions> {
  hash?: string
  openDevTools?: boolean
  initShow?: boolean
}

export function createWindow(options: OptionsType = {}) {
  // Create the browser window.
  const win = new BrowserWindow(
    Object.assign(
      {
        width: 400,
        // height: 250,
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
      },
      options
    )
  )

  win.on('ready-to-show', () => {
    options.initShow && win.show()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + options.hash)
    // win.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config')
  } else {
    // win.loadFile(join(__dirname, '../renderer/index.html' + '/#config'))
    win.loadURL(
      url.format({
        //编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        //协议
        protocol: 'file',
        //protocol 后面需要两个/
        slashes: true,
        //hash 的值
        hash: options.hash?.substring(1)
      })
    )
  }

  // 如果是开发环境，并设定打开开发者工具
  if (is.dev && options?.openDevTools) win.webContents.openDevTools()

  return win
}
