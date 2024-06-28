import { FolderClose, FolderOpen } from '@icon-park/react'
import { useMemo } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styles from './index.module.scss'

interface Props {
  category: CategoryType
}

export const CategoryItem = ({ category }: Props) => {
  const { id, name } = category
  const { cid = null } = useParams()

  const linkStyls = (isActive: boolean) => {
    return isActive ? styles.active : styles.link
  }

  const icon = useMemo(() => {
    if (cid && Number(cid) === id) {
      return <FolderOpen theme="outline" size="16" strokeWidth={4} />
    }
    return <FolderClose theme="outline" size="16" />
  }, [id, cid])

  return (
    <NavLink
      to={`/config/category/content-list/${id}`}
      key={id}
      className={({ isActive }) => linkStyls(isActive)}
    >
      <div className="flex items-center gap-1">
        {icon}
        <div className="truncate">{name}</div>
      </div>
    </NavLink>
  )
}
