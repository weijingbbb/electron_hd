// import css from './index.module.scss'
import useCodeSelect from '@renderer/hooks/useCodeSelect'
import classNames from 'classnames'
import './index.scss'

export default function Result() {
  const { data, currentIndex, highlightedIndex } = useCodeSelect()

  return (
    <main className={classNames('result-main')}>
      {data.map((item, index) => {
        const { id, content } = item
        return (
          <div
            key={id}
            className={classNames('result-item', [
              { active: currentIndex === index },
              { highlighted: highlightedIndex === index }
            ])}
          >
            {content}
          </div>
        )
      })}
    </main>
  )
}
