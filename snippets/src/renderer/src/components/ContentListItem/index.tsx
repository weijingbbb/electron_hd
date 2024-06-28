import { DeleteFive } from '@icon-park/react'
import dayjs from 'dayjs'
import { useContextMenu } from 'mantine-contextmenu'
import { NavLink, useSubmit } from 'react-router-dom'
import styles from './index.module.scss'

interface Props {
  content: ContentType
  index?: number
}

export default function ContentListItem({ content }: Props) {
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
  const { id, title, category_id: cid, created_at } = content
  const to = `/config/category/content-list/${cid}/content/${id}`
  return (
    <NavLink
      key={id}
      to={to}
      className={({ isActive }) => {
        return [styles['link-box'], isActive ? styles.active : '', styles.link].join(' ')
      }}
      onContextMenu={showContextMenu(
        [
          {
            key: 'del',
            title: (
              <div className="contextMenu-item">
                <DeleteFive theme="outline" size="16" />
                <span className="txt">删除此项</span>
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
      onDragStart={(e) => {
        e.dataTransfer.setData('id', String(content.id))
      }}
    >
      {/* {index !== undefined ? <div className="truncate">{index + 1}</div> : null} */}
      <div className="truncate">{title}</div>
      <div className=" opacity-80">{dayjs(created_at).format('YY/MM/DD')}</div>
    </NavLink>
  )
}
