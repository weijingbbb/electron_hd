import { DeleteFive } from '@icon-park/react'
import dayjs from 'dayjs'
import { useContextMenu } from 'mantine-contextmenu'
import { NavLink, useSubmit } from 'react-router-dom'

interface Props {
  content: ContentType
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
      className={({ isActive }) => (isActive ? 'active item' : 'item')}
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
    >
      <span className="truncate">{title}</span>
      <span>{dayjs(created_at).format('YY/MM/DD')}</span>
    </NavLink>
  )
}
