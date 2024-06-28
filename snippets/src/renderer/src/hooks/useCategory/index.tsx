import { DeleteFive } from '@icon-park/react'
import { useContextMenu } from 'mantine-contextmenu'
import { DragEvent } from 'react'
import { useSubmit } from 'react-router-dom'
import useContent from '../useContent'
import styles from './index.module.scss'

export default (category: CategoryType) => {
  const { id } = category
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
  const { updateContentCategory } = useContent()

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

  const dragEvent = {
    // 拖拽元素到目标上
    // e!.dataTransfer!.dropEffect = 'move'用于设置拖放的效果。
    // dataTransfer对象是在拖放操作期间用于传递数据的对象。
    // 通过设置dropEffect属性，你可以指定拖放操作的效果。
    // 在这个例子中，将dropEffect设置为'move'表示拖放操作将以移动的方式进行。
    onDragOver: (e: DragEvent) => {
      e.preventDefault()
      e!.dataTransfer!.dropEffect = 'move'
      const el = e.currentTarget as HTMLDivElement
      el.classList.add(styles.darging)
    },
    // 拖拽元素离开目标
    onDragLeave: (e: DragEvent) => {
      const el = e.currentTarget as HTMLDivElement
      el.classList.remove(styles.darging)
    },
    // const itemId = e!.dataTransfer!.getData('id')用于获取拖放数据中的特定数据。
    onDrop: (e: DragEvent) => {
      const el = e.currentTarget as HTMLDivElement
      el.classList.remove(styles.darging)
      const dragId = e!.dataTransfer!.getData('id')
      updateContentCategory(Number(dragId), id)
    }
  }

  return {
    contextMenu,
    dragEvent
  }
}
