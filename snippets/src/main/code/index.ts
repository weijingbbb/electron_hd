import { app } from 'electron'
import { createWindow } from './window'
import * as ipc from './ipc'

app.whenReady().then(() => {
  createWindow()

  ipc.registerIpc()
})

export default {
  createWindow
}
