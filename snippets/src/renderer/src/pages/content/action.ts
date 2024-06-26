// 发起请求，修改数据
export default async ({ request }) => {
  const params = await request.formData()
  const id = params.get('id')
  const title = params.get('title')
  const content = params.get('content')
  const res = await window.api.sql(
    `update contents set title = @title, content = @content where id = @id`,
    'update',
    {
      id,
      title,
      content
    }
  )

  console.log('-------------------', res)

  return res
}
