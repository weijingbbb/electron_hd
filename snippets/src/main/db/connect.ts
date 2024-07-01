import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import config from './config'

// // 这里生成Mac端的路径，放在桌面，win需要重新生成
// const db_name = 'my.db'
// const db_path = resolve(app.getPath('home'), 'Desktop', db_name)
// const db: BetterSqlite3.Database = new Database(db_path)
// db.pragma('journal_mode = WAL')
const db = (): BetterSqlite3.Database => {
  // 默认路径为桌面
  let dir = resolve(app.getPath('home'), 'Desktop')
  if (config.databaseDirectory && existsSync(config.databaseDirectory)) {
    dir = config.databaseDirectory
  }
  const db: BetterSqlite3.Database = new Database(dir + '/wj.db', {})
  db.pragma('journal_mode = WAL')
  return db
}

export { db }
