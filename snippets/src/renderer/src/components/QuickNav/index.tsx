import { AllApplication, BlocksAndArrows } from '@icon-park/react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

export default function QuickNav() {
  return (
    <>
      {/* <div className="px-2 mt-2 mb-1 opacity-90">快捷操作</div>
      <NavLink to={`/config/category/content-list`} end className={classnames('item')}>
        <AllApplication theme="outline" size="16" />
        <span className="truncate ">所有</span>
      </NavLink>
      <NavLink to={`/config/category/content-list/0`} end className={classnames('item')}>
        <BlocksAndArrows theme="outline" size="16" />
        <span className="truncate ">未分类</span>
      </NavLink> */}
      <main className="mb-3 border-b">
        <div className="px-2 mt-2 mb-2 text-xs opacity-90">快捷操作</div>
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
