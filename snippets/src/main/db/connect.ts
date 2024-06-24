import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'node:path'

// 这里生成Mac端的路径，放在桌面，win需要重新生成
const db_name = 'my.db'
const db_path = resolve(app.getPath('home'), 'Desktop', db_name)
const db: BetterSqlite3.Database = new Database(db_path)
db.pragma('journal_mode = WAL')

export { db }
