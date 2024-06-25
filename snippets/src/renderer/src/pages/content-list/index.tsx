import dayjs from 'dayjs'
import { useState } from 'react'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const contents = useLoaderData() as ContentType[]
  const [content, setContent] = useState<ContentType>()

  // useEffect(() => {
  //   if (contents.length) {
  //     setContent(contents[0])
  //   }
  // }, [contents])

  return (
    <main className="content-list-page">
      <div className="list">
        {contents.map((item) => {
          const { id, title, category_id: cid, created_at } = item
          const to = `/config/category/content-list/${cid}/content/${id}`
          return (
            <NavLink
              key={id}
              to={to}
              className={({ isActive }) => (isActive ? 'active item' : 'item')}
            >
              <span>{title}</span>
              <span>{dayjs(created_at).format('YY/MM/DD')}</span>
            </NavLink>
          )
        })}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
