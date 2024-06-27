import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const { content, categories } = useLoaderData() as {
    content: ContentType
    categories: CategoryType[]
  }
  const subbmit = useSubmit()
  return (
    <Form method="PUT" className="h-full ">
      <main className="content-page" key={content.id}>
        <input hidden name="id" defaultValue={content.id} />
        <input
          name="title"
          defaultValue={content.title}
          onChange={(e) => {
            subbmit(e.target.form)
          }}
        />
        <select
          name="category_id"
          defaultValue={content.category_id}
          onChange={(e) => {
            subbmit(e.target.form)
          }}
        >
          {categories.map((category) => {
            const { id, name } = category
            return (
              <option value={id} key={id}>
                {name}
              </option>
            )
          })}
        </select>
        <div className="my-2 border-b "></div>
        <textarea
          name="content"
          defaultValue={content.content}
          className="text"
          onChange={(e) => {
            subbmit(e.target.form)
          }}
        />
        <div className="my-2 border-b "></div>
      </main>
    </Form>
  )
}
