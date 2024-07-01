import { IpcMainEvent, IpcMainInvokeEvent, dialog, ipcMain } from 'electron'
import config from './config'
import * as query from './query'
import { initTable } from './tables'

// 配置窗口的ipc通信
ipcMain.handle(
  'sql',
  (_event: IpcMainInvokeEvent, sql: string, type: SqlActionType, params: SqlParams = {}) => {
    return query[type](sql, params)
  }
)

ipcMain.handle('selectDirectory', async () => {
  const res = await dialog.showOpenDialog({
    //对话框窗口的标题
    title: '选择目录',
    //选择文件、目录，并支持多选
    properties: ['openDirectory', 'createDirectory']
  })
  return res.canceled ? '' : res.filePaths[0]
})

ipcMain.on('setDatabaseDirectory', (_event: IpcMainEvent, path: string) => {
  config.databaseDirectory = path
})

ipcMain.on('initTable', () => {
  initTable()
})
