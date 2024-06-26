import dayjs from 'dayjs'
import { useEffect } from 'react'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const contents = useLoaderData() as ContentType[]
  // const [content, setContent] = useState<ContentType>()

  const navigate = useNavigate()

  useEffect(() => {
    if (contents.length) {
      // setContent(contents[0])
      navigate(`/config/category/content-list/${contents[0].category_id}/content/${contents[0].id}`)
    }
  }, [contents])

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
              <span className="truncate">{title}</span>
              <span>{dayjs(created_at).format('YY/MM/DD')}</span>
            </NavLink>
          )
        })}
      </div>
      <div className="content-box">
        <Outlet />
      </div>
    </main>
  )
}
