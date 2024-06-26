import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWindow: () => void
      shortCur: (params: any) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => void
      openConfigWindow: () => void
      sql: <T>(sql: string, type: SqlActionType, params?: SqlParams) => Promise<T>
    }
  }
}
