import useCode from '@renderer/hooks/useCode'
import { useEffect, useState } from 'react'
import './index.scss'

export default function Result() {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e.code)
    // 如果没有数据，则无效退出事件
    if (!data.length) return
    switch (e.code) {
      case 'ArrowUp':
        setCurrentIndex((pre) => (pre - 1 < 0 ? data.length - 1 : pre - 1))
        break
      case 'ArrowDown':
        setCurrentIndex((pre) => (pre + 1 >= data.length ? 0 : pre + 1))
        break
    }
  }

  useEffect(() => {
    // 每次数据更新后，初始化index
    setCurrentIndex(0)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [data])
  return (
    <main className="result-main">
      {currentIndex}
      {data.map((item, index) => {
        const { id, content } = item
        console.log(index, currentIndex)
        return (
          <div
            key={id}
            className={`result-item ${currentIndex == index ? 'result-item-active' : ''} `}
          >
            {content}
          </div>
        )
      })}
    </main>
  )
}
