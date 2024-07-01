import { useStore } from '@renderer/store/useStore'
import { Modal } from 'antd'
import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import './index.scss'

// const { confirm } = Modal

import { FolderSettingsOne } from '@icon-park/react'
import { Input, message } from 'antd'

export default function Setting() {
  const [keys, setKeys] = useState<string[]>([])
  const shortcutShow = useStore((s) => s.shortcutShow)
  const setShortcutShow = useStore((s) => s.setShortcutShow)
  const inputRef = useRef(null)
  const databasePath = useStore((s) => s.databasePath)
  const setDatabasePath = useStore((s) => s.setDatabasePath)
  const [modal, contextHolder] = Modal.useModal();

  // 页面初次渲染时，读取store里的值
  // 如果有快捷键的值，则显示在input框中
  // 如果有数据库路径，则显示在input框中
  useEffect(() => {
    if (shortcutShow.length) {
      inputRef.current!.value = shortcutShow.join('+')
      setKeys(shortcutShow)
    }
  }, [])

  const handleChangeShortcutKey = async (e: KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    // 如果是删除键，则清除数组最后两位
    if (e.key == 'Backspace') {
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

  /**
   * 选择数据库存放路径
   * 1. 调用api.selectDirectory()方法，选择目录
   * 2. 如果得到目录，则设置目录路径，存储路径，没有则提示错误
   * 3. 调用数据库初始化方法，初始化数据库
   *
   */
  const handleSelectDirectory = async () => {
    try {
      const path = await window.api.selectDirectory()
      if (!path) return
      const confirm_result = await modal.confirm({
        title: '提醒',
        content: '选择目录后，将进行数据初始化。',
        okText: '确认',
        cancelText: '取消',
      })
      console.log(confirm_result)
      if (!confirm_result) return
      setDatabasePath(path)
      window.api.setDatabaseDirectory(path)
      window.api.initTable()
      message.success({
        content: '数据初始化成功'
      })
    } catch (error) {}
  }

  return (
    <main className="setting-page drag">
      <h1>软件配置</h1>
      {contextHolder}
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
        <Input
          addonAfter={
            <div className="path-btn" onClick={handleSelectDirectory}>
              <FolderSettingsOne theme="outline" size="16" />
              <span>选择目录</span>
            </div>
          }
          value={databasePath}
        />
        {/* <input type="text" name="" id="" /> */}
      </section>
    </main>
  )
}
