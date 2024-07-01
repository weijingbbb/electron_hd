import { useStore } from '@renderer/store/useStore'
import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import './index.scss'

import { message } from 'antd'

export default function Setting() {
  const [keys, setKeys] = useState<string[]>([])
  const shortcutShow = useStore((s) => s.shortcutShow)
  const setShortcutShow = useStore((s) => s.setShortcutShow)
  const inputRef = useRef(null)

  // 页面初次渲染时，读取store里的值
  useEffect(() => {
    if (shortcutShow.length) {
      inputRef.current!.value = shortcutShow.join('+')
      setKeys(shortcutShow)
    }
  }, [])

  const handleChangeShortcutKey = async (e: KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    console.log(e, 'e---key:', e.key, input)
    // 如果是删除键，则清除数组最后两位
    if (e.key == 'Backspace') {
      console.log('?????????')
      setKeys([])
      input.value = ''
      // 注册成功后，保存值
      setShortcutShow([])
    } else {
      keys.push(e.key)
      setKeys(keys)
      input.value = keys.join('+')

      if (
        keys.length === 2 &&
        (await window.api.shortCur({
          type: 'RenderSearch',
          shortCur: keys.join('+')
        }))
      ) {
        message.success({
          content: '注册成功'
        })
        // 注册成功后，保存值
        setShortcutShow(keys)
        input.blur()
      }
    }
  }

  return (
    <main className="setting-page drag">
      <h1>软件配置</h1>
      <section>
        <div className="title">
          <h3>快捷键定义</h3>
          <div className="tips">快速隐藏显示搜索栏,最多输入三个组合键</div>
        </div>
        <input
          className="shortcut-input"
          ref={inputRef}
          readOnly
          type="text"
          name="ShortcutKey"
          onKeyDown={handleChangeShortcutKey}
        />
        {/* <Input
          value={inputValue}
          placeholder="请按下快捷键盘组合"
          allowClear={true}
          onKeyDown={handleChangeShortcutKey}
        /> */}
        <div className="title">
          <h3>数据库存放路径</h3>
          <div className="tips"></div>
        </div>
        <input type="text" name="" id="" />
      </section>
    </main>
  )
}
