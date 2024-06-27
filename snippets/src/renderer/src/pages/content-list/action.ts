import { redirect } from 'react-router-dom'

export default async ({ request, params }) => {
  const formData = await request.formData()
  const { cid = 0 } = params
  console.log(request)
  switch (request.method) {
    case 'POST': {
      const id = await window.api.sql(
        `insert into contents (title, content, category_id, created_at) values('未命名标题', '请输入正文', ${cid}, datetime())`,
        'insert'
      )
      return redirect(`/config/category/content-list/${cid}/content/${id}`)
    }
    case 'DELETE': {
      await window.api.sql('delete from contents where id = @id', 'del', { id: formData.get('id') })
    }
  }

  return true
}
