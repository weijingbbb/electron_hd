import { DataType } from '@renderer/data'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface StateProps {
  data: DataType[]
  setData: (data: DataType[]) => void
  search: string
  setSearch: (val: string) => void
  error: string
  setError: (val: string) => void
  id: number
  setId: (id: number) => void
  editCategoryId: number
  setEditCategoryId: (id: number) => void
}

export const useStore = create(
  persist<StateProps>(
    (set) => {
      return {
        data: [],
        setData: (data) => set({ data }),
        search: '',
        setSearch: (search) => set({ search }),
        error: '',
        setError: (error) => set({ error }),
        id: 0,
        setId: (id) => set({ id }),
        editCategoryId: 0,
        setEditCategoryId: (editCategoryId) => set({ editCategoryId })
      }
    },
    {
      name: 'wj-hotepad',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
