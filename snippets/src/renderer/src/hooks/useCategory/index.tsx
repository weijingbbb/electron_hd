import { DeleteFive } from '@icon-park/react'
import { useContextMenu } from 'mantine-contextmenu'
import { useSubmit } from 'react-router-dom'

export default (category: CategoryType) => {
  const { id } = category
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()

  const contextMenu = () => {
    return showContextMenu(
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
    )
  }

  return {
    contextMenu
  }
}
