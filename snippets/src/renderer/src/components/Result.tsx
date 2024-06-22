import { DataType, initData } from '@renderer/data'
import { useState } from 'react'

export default function Result() {
  const [data, setData] = useState<DataType[]>(initData)
  return (
    <main className="  py-3 bg-slate-50 px-3 rounded-bl-lg rounded-br-lg -mt-[10px]">
      {data.map((item) => {
        const { id, content } = item
        return (
          <div
            key={id}
            className="p-1 mb-2 text-sm truncate rounded-sm text-slate-700 bg-slate-200"
          >
            {content}
          </div>
        )
      })}
    </main>
  )
}
