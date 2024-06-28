import { DeleteFive, FolderClose, FolderOpen } from '@icon-park/react'
import { useContextMenu } from 'mantine-contextmenu'
import { useMemo } from 'react'
import { NavLink, useParams, useSubmit } from 'react-router-dom'
import styles from './index.module.scss'

interface Props {
  category: CategoryType
}

export const CategoryItem = ({ category }: Props) => {
  const { id, name } = category
  const { cid = null } = useParams()
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()

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
      onContextMenu={showContextMenu(
        [
          {
            key: 'del',
            title: (
              <div className="contextMenu-item">
                <DeleteFive theme="outline" size="16" />
                <span className="txt">删除栏目</span>
              </div>
            ),
            onClick: () => {
              submit({ id }, { method: 'DELETE' })
            }
          }
        ],
        {
          className: 'contextMenu'
        }
      )}
    >
      <div className="flex items-center gap-1">
        {icon}
        <div className="truncate">{name}</div>
      </div>
    </NavLink>
  )
}
