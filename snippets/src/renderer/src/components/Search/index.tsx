import { SettingTwo } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'

export default function Search() {
  const { search, handleSearch } = useSearch()

  const handleOpenConfigWindow = () => {
    window.api.openWindow('config')
  }

  return (
    <main className="p-3 rounded-lg bg-slate-50 drag">
      <section className="flex items-center p-1 rounded-lg bg-slate-200 nodrag">
        <Input
          className="w-full p-1 mr-2 rounded-md outline-none text-ml text-slate-600 "
          value={search}
          onChange={handleSearch}
          autoFocus
        />
        <SettingTwo
          theme="outline"
          size="20"
          fill="#666"
          className="cursor-pointer "
          onClick={handleOpenConfigWindow}
        />
      </section>
      <section className="mt-2 text-sm text-center text-slate-600">多吃核桃能补脑！</section>
    </main>
  )
}
