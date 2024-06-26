export default async ({ request }) => {
  const formData = await request.formData()
  console.log(formData.get('action'))
  switch (formData.get('action')) {
    case 'add':
      await window.api.sql(
        `insert into contents (title, content, created_at) values('未命名标题', '请输入正文', datetime())`,
        'insert'
      )
      break
  }

  return true
}
