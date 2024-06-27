import '@renderer/assets/global.scss'
import ContentListItem from '@renderer/components/ContentListItem'
import ContentSearch from '@renderer/components/ContentSearch'
import { Outlet, useLoaderData } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const contents = useLoaderData() as ContentType[]

  return (
    <main className="content-list-page">
      <div className="list">
        <ContentSearch />
        {contents.map((content) => (
          <ContentListItem content={content} key={content.id} />
        ))}
      </div>
      <div className="content-box">
        <Outlet />
      </div>
    </main>
  )
}
