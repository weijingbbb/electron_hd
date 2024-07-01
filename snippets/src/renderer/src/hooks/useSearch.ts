import { useStore } from '@renderer/store/useStore'
import { ChangeEvent } from 'react'

export default () => {
  const { setData, search, setSearch } = useStore()

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setSearch('')
      setData([])
      return
    }
    setSearch(e.target.value)
    const data = await window.api.sql(
      `select * from contents where title like @content`,
      'findAll',
      { content: `%${e.target.value}%` }
    )
    setData(data as ContentType[])
  }

  return {
    search,
    handleSearch
  }
}
