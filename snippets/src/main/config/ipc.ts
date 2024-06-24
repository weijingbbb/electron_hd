import { IpcMainInvokeEvent, ipcMain } from 'electron'
import * as query from './query'

type SqlActionType = 'findAll' | 'findOne' | 'insert' | 'update' | 'del'

// 配置窗口的ipc通信
ipcMain.handle('', (_event: IpcMainInvokeEvent, sql: string, type: SqlActionType) => {
  return query[type](sql)
})
