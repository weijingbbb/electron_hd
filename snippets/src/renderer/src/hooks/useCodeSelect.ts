import { DataType } from '@renderer/data'
import { useStore } from '@renderer/store/useStore'
import { useCallback, useEffect, useMemo, useState } from 'react'

export default () => {
  // const { data, setData } = useCode()
  const data = useStore((state) => state.data)
  const setData = useStore((state) => state.setData)
  // 选中的项
  // const [currentIndex, setCurrentIndex] = useState(0)
  const [id, setId] = useState(0)
  // 回车敲的项
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)
  const index = useMemo(() => {
    if (!data.length) return -1
    return data.findIndex((item) => item.id == id)
  }, [data, id])

  // 优化后的选项列表项，适配键盘Enter、鼠标双击事件
  const handleSelectItem = useCallback(async () => {
    setHighlightedIndex(index)
    const content = data.find((item) => item.id == id)?.content
    await navigator.clipboard.writeText(content!)
    window.api.hideWindow()
    clear()
  }, [index, id])
  const handleMouseEnter = useCallback((selectItem: DataType) => {
    setId(selectItem.id)
  }, [])

  // 关闭窗口后，清空旧数据
  const clear = () => {
    setData([])
    setId(0)
    setHighlightedIndex(null)
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // 如果没有数据，则无效退出事件
      if (!data.length) return
      switch (e.code) {
        case 'ArrowUp':
          setId(data[index - 1]?.id || data[data.length - 1]?.id)
          // setCurrentIndex((pre) => (pre - 1 < 0 ? data.length - 1 : pre - 1))
          break
        case 'ArrowDown':
          // setCurrentIndex((pre) => (pre + 1 >= data.length ? 0 : pre + 1))
          setId(data[index + 1]?.id || data[0]?.id)
          break
        case 'Enter':
          handleSelectItem()
          break
      }
    },
    [data, id]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  useEffect(() => {
    if (!data.length) return
    // 每次数据更新后，初始化index
    setId(data[0].id)
  }, [data])

  return {
    data,
    id,
    highlightedIndex,
    setId,
    handleSelectItem,
    handleMouseEnter
  }
}
