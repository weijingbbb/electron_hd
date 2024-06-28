import { DeleteFive, FolderClose, FolderOpen } from '@icon-park/react'
import { useStore } from '@renderer/store/useStore'
import { useContextMenu } from 'mantine-contextmenu'
import { useMemo } from 'react'
import { NavLink, useParams, useSubmit, useFetcher } from 'react-router-dom'
import styles from './index.module.scss'

interface Props {
  category: CategoryType
}

export const CategoryItem = ({ category }: Props) => {
  const { id, name } = category
  const { cid = null } = useParams()
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
  const editCategoryId = useStore((state) => state.editCategoryId)
  const setEditCategoryId = useStore((state) => state.setEditCategoryId)
  const fetcher = useFetcher()

  const linkStyls = (isActive: boolean) => {
    return isActive ? styles.active : styles.link
  }

  const icon = useMemo(() => {
    if (cid && Number(cid) === id) {
      return <FolderOpen theme="outline" size="16" strokeWidth={4} />
    }
    return <FolderClose theme="outline" size="16" />
  }, [id, cid])

  return editCategoryId === id ? (
    <div className={styles.input}>
      <input
        defaultValue={name}
        name="name"
        autoFocus
        onKeyDown={(e) => {
          if (e.key !== 'Enter') return
          fetcher.submit(
            {
              id,
              name: e.currentTarget.value
            },
            {
              method: 'PUT'
            }
          )
          setEditCategoryId(0)
        }}
      />
    </div>
  ) : (
    <NavLink
      to={`/config/category/content-list/${id}`}
      key={id}
      className={({ isActive }) => linkStyls(isActive)}
      onDoubleClick={() => setEditCategoryId(id)}
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
