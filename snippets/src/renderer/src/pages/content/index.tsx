import { useLoaderData } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const content = useLoaderData() as ContentType
  return (
    <div className="content-page">
      <div>{content?.title}</div>
      <div className=''>{content?.content}</div>
    </div>
  )
}
