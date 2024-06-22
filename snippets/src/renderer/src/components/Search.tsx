import { initData } from '@renderer/data'
import useCode from '@renderer/hooks/useCode'
import { ChangeEvent, useState } from 'react'

export default function Search() {
  const { setData } = useCode()
  const [search, setSearch] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSearch(e.target.value)
    setData(initData.filter((item) => item.content.includes(e.target.value)))
  }

  return (
    <main className="p-3 rounded-lg bg-slate-50 drag">
      <section className="p-2 rounded-lg bg-slate-200">
        <input
          className="w-full outline-none text-ml text-slate-600 bg-slate-200"
          value={search}
          onChange={handleSearch}
        ></input>
      </section>
      <section className="mt-2 text-sm text-center text-slate-600">多吃核桃能补脑！</section>
    </main>
  )
}
