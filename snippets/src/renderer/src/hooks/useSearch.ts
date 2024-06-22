import { initData } from '@renderer/data'
import { ChangeEvent, useState } from 'react'
import useCode from './useCode'

export default () => {
  const { setData } = useCode()
  const [search, setSearch] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setData(initData.filter((item) => item.content.includes(e.target.value)))
  }

  return {
    search,
    handleSearch
  }
}
