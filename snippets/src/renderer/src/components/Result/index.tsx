// import css from './index.module.scss'
import useCodeSelect from '@renderer/hooks/useSelect'
import classNames from 'classnames'
import './index.scss'

export default function Result() {
  const { data, id, highlightedIndex, handleSelectItem, handleMouseEnter } = useCodeSelect()

  return (
    <main className={classNames('result-main')}>
      {data.map((item, index) => {
        const { id: itemId, content } = item
        return (
          <div
            key={itemId}
            className={classNames('result-item', [
              { active: itemId === id },
              { highlighted: highlightedIndex === index }
            ])}
            onDoubleClick={handleSelectItem}
            onMouseEnter={() => handleMouseEnter(item)}
          >
            {content}
          </div>
        )
      })}
    </main>
  )
}
