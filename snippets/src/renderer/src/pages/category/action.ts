import { redirect } from 'react-router-dom'

export default async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const { method } = request
  switch (method) {
    case 'POST': {
      const id = await window.api.sql(
        `insert into categories (name, created_at) values('未命名栏目',  datetime())`,
        'insert'
      )
      return redirect(`/config/category/content-list/${id}`)
    }
    case 'DELETE': {
      await window.api.sql('delete from categories where id = @id', 'del', {
        id: data.id
      })
      // 删除栏目后，把栏目下的内容都设置为未分类
      await window.api.sql(
        'update contents set category_id = 0 where category_id = @category_id',
        'update',
        {
          category_id: data.id
        }
      )
      return redirect(`/config/category/content-list`)
    }
  }
  return true
}
