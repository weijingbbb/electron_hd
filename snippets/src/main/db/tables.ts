import { db } from './connect'

// 创建栏目表，如果表已存在，再不用创建
db.exec(`
  create table if not exists categories (
    id integer primary key autoincrement not null,
    name text not null,
    created_at text not null
  )
`)

// 创建内容表
db.exec(`
  create table if not exists contents (
    id integer primary key autoincrement not null,
    title text not null,
    content text not null,
    category_id integer,
    created_at text not null
  )
`)
