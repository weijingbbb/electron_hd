import { AllApplication, BlocksAndArrows } from '@icon-park/react'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'

export default function QuickNav() {
  return (
    <>
      <div className="px-2 mt-2 mb-1 opacity-90">快捷操作</div>
      <NavLink to={`/config/category/content-list`} end className={classnames('item')}>
        <AllApplication theme="outline" size="16" />
        <span className="truncate ">所有</span>
      </NavLink>
      <NavLink to={`/config/category/content-list/0`} end className={classnames('item')}>
        <BlocksAndArrows theme="outline" size="16" />
        <span className="truncate ">未分类</span>
      </NavLink>
    </>
  )
}
