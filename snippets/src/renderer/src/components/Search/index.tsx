import { SettingTwo } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'

export default function Search() {
  const { search, handleSearch } = useSearch()
  return (
    <main className="p-3 rounded-lg bg-slate-50 drag">
      <section className="flex items-center rounded-lg nodrag">
        <input
          className="w-full p-1 mr-2 rounded-md outline-none text-ml text-slate-600 bg-slate-200"
          value={search}
          onChange={handleSearch}
        />
        <SettingTwo
          theme="outline"
          size="20"
          fill="#666"
          className="cursor-pointer "
          onClick={() => alert('dfdfsf')}
        />
      </section>
      <section className="mt-2 text-sm text-center text-slate-600">多吃核桃能补脑！</section>
    </main>
  )
}
