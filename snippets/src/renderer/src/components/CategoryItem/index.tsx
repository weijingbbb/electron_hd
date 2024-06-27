import { FolderClose } from '@icon-park/react'
import { NavLink } from 'react-router-dom'

interface Props {
  category: CategoryType
}

export const CategoryItem = ({ category }: Props) => {
  const { id, name } = category
  return (
    <NavLink
      to={`/config/category/content-list/${id}`}
      key={id}
      className={({ isActive }) => (isActive ? 'active item' : 'item')}
    >
      <div className="flex items-center gap-1">
        <FolderClose theme="outline" size="12" strokeWidth={3} />
        <div className="truncate">{name}</div>
      </div>
    </NavLink>
  )
}
