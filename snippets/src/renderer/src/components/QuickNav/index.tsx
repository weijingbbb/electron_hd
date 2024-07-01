import { Add, AllApplication, BlocksAndArrows } from '@icon-park/react'
import { NavLink, useSubmit } from 'react-router-dom'
import styles from './index.module.scss'

export default function QuickNav() {
  const submit = useSubmit()
  const add = () => {
    submit(null, { method: 'POST' })
  }
  return (
    <>
      <main className="mb-3 border-b">
        <div className="flex items-center justify-between px-2 mt-2 mb-2 text-xs opacity-90">
          <span>快捷操作</span>
          <Add theme="outline" size="18" fill="#333" onClick={add} />
        </div>
        <NavLink
          to={`/config/category/content-list`}
          end
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          <div className="flex items-center gap-1">
            <AllApplication theme="outline" size="16" strokeWidth={3} />
            <div className="truncate ">所有片段</div>
          </div>
        </NavLink>
        <NavLink
          to={`/config/category/content-list/0`}
          end
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          <div className="flex items-center gap-1">
            <BlocksAndArrows theme="outline" size="16" strokeWidth={3} />
            <div className="truncate">未分类</div>
          </div>
        </NavLink>
      </main>
    </>
  )
}
