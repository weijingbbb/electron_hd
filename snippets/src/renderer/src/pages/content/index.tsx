import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const content = useLoaderData() as ContentType
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
        <div className="my-2 border-b "></div>
        <textarea name="content" defaultValue={content.content} className="text" />
        <div className="my-2 border-b "></div>
        {/* <Button type="primary">保存</Button> */}
        {/* <button>保存</button> */}
      </main>
    </Form>
  )
}
