import { DataType } from '@renderer/data'
import { create } from 'zustand'

interface StateProps {
  data: DataType[]
  setData: (data: DataType[]) => void
  search: string
  setSearch: (val: string) => void
  error: string
  setError: (val: string) => void
  id: number
  setId: (id: number) => void
}

export const useStore = create<StateProps>((set) => {
  return {
    data: [],
    setData: (data) => set({ data }),
    search: '',
    setSearch: (search) => set({ search }),
    error: '',
    setError: (error) => set({ error }),
    id: 0,
    setId: (id) => set({ id })
  }
})
