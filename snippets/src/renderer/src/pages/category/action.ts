import { redirect } from 'react-router-dom'

export default async ({ request }) => {
  const { method } = request
  switch (method) {
    case 'POST': {
      const id = await window.api.sql(
        `insert into categories (name, created_at) values('未命名类目',  datetime())`,
        'insert'
      )
      return redirect(`/config/category/content-list/${id}`)
    }
  }
  return true
}
