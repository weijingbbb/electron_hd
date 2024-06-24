import { IpcMainInvokeEvent, ipcMain } from 'electron'
import * as query from './query'

// 配置窗口的ipc通信
ipcMain.handle('sql', (_event: IpcMainInvokeEvent, sql: string, type: SqlActionType) => {
  // console.log(sql, type)
  return query[type](sql)
})
