import { useCallback, useEffect, useState } from 'react'
import useCode from './useCode'

export default () => {
  const { data } = useCode()
  // 选中的项
  const [currentIndex, setCurrentIndex] = useState(0)
  // 回车敲的项
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // 如果没有数据，则无效退出事件
      if (!data.length) return
      switch (e.code) {
        case 'ArrowUp':
          setCurrentIndex((pre) => (pre - 1 < 0 ? data.length - 1 : pre - 1))
          break
        case 'ArrowDown':
          setCurrentIndex((pre) => (pre + 1 >= data.length ? 0 : pre + 1))
          break
        case 'Enter':
          setHighlightedIndex(currentIndex)
          // 写入剪贴板
          navigator.clipboard.writeText(data[currentIndex].content)
          break
      }
    },
    [data, currentIndex]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  useEffect(() => {
    // 每次数据更新后，初始化index
    setCurrentIndex(0)
  }, [data])

  return {
    data,
    currentIndex,
    highlightedIndex,
    setCurrentIndex,
    setHighlightedIndex
  }
}
