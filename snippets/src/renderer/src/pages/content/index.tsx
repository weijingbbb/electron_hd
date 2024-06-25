import { useLoaderData } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const content = useLoaderData() as ContentType
  return (
    <main className="content-page">
      <div className='h1'>{content?.title}</div>
      <div className='content'>{content?.content}</div>
    </main>
  )
}
