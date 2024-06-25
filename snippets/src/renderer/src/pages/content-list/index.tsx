import { useLoaderData } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const contents = useLoaderData() as ContentType[]
  return (
    <main className="content-page">
      <div className="list">
        {contents.map((item) => {
          const { id, title, content } = item
          return <div key={id}>{title}</div>
        })}
      </div>
      <div className="content">content</div>
    </main>
  )
}
