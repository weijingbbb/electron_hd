import { redirect } from 'react-router-dom'

// 发起请求，修改数据
export default async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  await window.api.sql(
    `update contents set title = @title, content = @content, category_id = @category_id where id = @id`,
    'update',
    data
  )
  console.log(`/config/category/content-list/${data.category_id}/content/${data.id}`)
  return redirect(`/config/category/content-list/${data.category_id}/content/${data.id}`)
}
