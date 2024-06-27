import { Add } from '@icon-park/react'
import { Form, useSubmit } from 'react-router-dom'

export default function ContentSearch() {
  const submit = useSubmit()
  return (
    <Form>
      <div className="flex items-center justify-between px-2 py-1 mb-2 text-xs bg-white rounded ">
        <input
          autoFocus
          type="text"
          name="keyword"
          placeholder="关键词......"
          className="w-full outline-none"
          onChange={(e) => submit(e.target.form)}
        />
        <Add
          theme="outline"
          size="18"
          fill="#333"
          className="cursor-pointer "
          onClick={() => {
            submit(null, { method: 'POST' })
          }}
        />
      </div>
    </Form>
  )
}
