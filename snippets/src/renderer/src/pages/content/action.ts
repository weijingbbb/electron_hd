// 发起请求，修改数据
export default async ({ request }) => {
  const params = await request.formData()
  console.log('-------------------', params.get('title'))

  return true
}
