import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWindow: () => void
      shortCur: (params: HotKeyProps) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => void
      openConfigWindow: () => void
      sql: <T>(sql: string, type: SqlActionType, params?: SqlParams) => Promise<T>
      openWindow: (name: WindowNameType) => void
      closeWindow: (name: WindowNameType) => void
      selectDirectory: () => Promise<string>
      setDatabaseDirectory: (path: string) => void
      initTable: () => void
    }
  }
}
