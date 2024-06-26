import { Random } from 'mockjs'
import { db } from './connect'
import { findAll } from './query'

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

// 插入数据
// db.exec(`
//   INSERT INTO categories (name, created_at) VALUES('JavaScript', datetime());
// `)

// db.exec(`
//   INSERT INTO contents (title, content, category_id, created_at) VALUES('react', 'react16', 1, datetime());
// `)

function initData() {
  // 查询数据，如果有的情况下，则不用生成虚拟数据
  const content = findAll('select * from contents')
  if (content.length) {
    return
  }

  // 生成类目数据
  for (let i = 0; i < 20; i++) {
    const name = Random.province()
    db.exec(`
        INSERT INTO categories (name, created_at) VALUES('${name}', datetime());
      `)
    // 生成列表数据
    for (let index = 0; index < 20; index++) {
      const title = Random.city()
      const content = Random.paragraph(20, 50)
      db.exec(`
          INSERT INTO contents (title, content, category_id, created_at) VALUES('${title}', '${content}', ${i}, datetime());
        `)
      // 生成列表数据

    }
  }

}

initData()
