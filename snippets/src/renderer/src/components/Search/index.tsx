import { Editor, SettingTwo } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'

export default function Search() {
  const { search, handleSearch } = useSearch()

  const handleOpenConfigWindow = (win: WindowNameType) => {
    window.api.openWindow(win)
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
        <Editor
          theme="outline"
          size="20"
          fill="#666"
          className="mr-2 cursor-pointer"
          onClick={() => handleOpenConfigWindow('config')}
        />
        <SettingTwo
          theme="outline"
          size="20"
          fill="#666"
          className="cursor-pointer "
          onClick={() => handleOpenConfigWindow('setting')}
        />
      </section>
      <section className="mt-2 text-sm text-center text-slate-600">多吃核桃能补脑！</section>
    </main>
  )
}
