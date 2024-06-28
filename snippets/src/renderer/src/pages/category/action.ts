import { redirect } from 'react-router-dom'

export default async ({ request }) => {
  const formData = await request.formData()
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
        id: formData.get('id')
      })
    }
  }
  return true
}
