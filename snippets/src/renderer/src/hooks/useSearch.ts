import { initData } from '@renderer/data'
import { useStore } from '@renderer/store/useStore'
import { ChangeEvent } from 'react'

export default () => {
  const { setData, search, setSearch } = useStore()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setData(initData.filter((item) => item.content.includes(e.target.value)))
  }

  return {
    search,
    handleSearch
  }
}
