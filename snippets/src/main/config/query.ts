import { db } from '../db/connect'

// 查询所有数据
export const findAll = (sql: string) => {
  return db.prepare(sql).all()
}
// 查询单条
export const findOne = (sql: string) => {
  return db.prepare(sql).get()
}
// 插入数据
export const insert = (sql: string) => {
  return db.prepare(sql).run().lastInsertRowid
}
// 更新数据
export const update = (sql: string) => {
  return db.prepare(sql).run().changes
}
// 删除数据
export const del = (sql: string) => {
  return db.prepare(sql).run().changes
}
