import '@renderer/assets/global.scss'
import ContentListItem from '@renderer/components/ContentListItem'
import ContentSearch from '@renderer/components/ContentSearch'
import { Outlet, useLoaderData } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const contents = useLoaderData() as ContentType[]

  return (
    <main className="content-list-page">
      <div className="left-box">
        <ContentSearch />
        <section className="list-box">
          {contents.map((content, index) => (
            <ContentListItem content={content} key={content.id} index={index} />
          ))}
        </section>
      </div>
      <div className="content-box">
        <Outlet />
      </div>
    </main>
  )
}
