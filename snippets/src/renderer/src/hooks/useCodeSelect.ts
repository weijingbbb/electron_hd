import { useCallback, useEffect, useState } from 'react'
import useCode from './useCode'

export default () => {
  const { data } = useCode()
  // 选中的项
  // const [currentIndex, setCurrentIndex] = useState(0)
  const [id, setId] = useState(0)
  // 回车敲的项
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // 如果没有数据，则无效退出事件
      if (!data.length) return
      switch (e.code) {
        case 'ArrowUp':
          setId((id) => {
            const index = data.findIndex((item) => item.id == id)
            return data[index - 1]?.id || data[data.length - 1]?.id
          })
          // setCurrentIndex((pre) => (pre - 1 < 0 ? data.length - 1 : pre - 1))
          break
        case 'ArrowDown':
          // setCurrentIndex((pre) => (pre + 1 >= data.length ? 0 : pre + 1))
          setId((id) => {
            const index = data.findIndex((item) => item.id == id)
            return data[index + 1]?.id || data[0]?.id
          })
          break
        case 'Enter':
          {
            setHighlightedIndex(data.findIndex((item) => item.id == id))
            const content = data.find((item) => item.id == id)?.content
            // 写入剪贴板
            if (content) navigator.clipboard.writeText(content)
          }
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
    setHighlightedIndex
  }
}
