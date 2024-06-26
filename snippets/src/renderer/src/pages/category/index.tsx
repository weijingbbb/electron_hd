import { FolderClose, FolderOpen } from '@icon-park/react'
import classnames from 'classnames'
import { useEffect, useState } from 'react'
import { Link, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import './index.scss'

export default function Category() {
  const [current, setCurrent] = useState<CategoryType>()
  const categories = useLoaderData() as CategoryType[]

  const navigate = useNavigate()

  useEffect(() => {
    if (categories.length) {
      navigate(`/config/category/content-list/${categories[0].id}`)
      setCurrent(categories[0])
    }
  }, [categories])
  return (
    <>
      <main className="category-page">
        <div className="categories">
          <section className="list-box">
            {categories.map((item) => {
              const { id, name } = item
              return (
                // <NavLink
                //   key={id}
                //   to={`/config/category/content-list/${id}`}
                //   className={({ isActive }) => (isActive ? 'active item' : 'item')}
                //   // onClick={() => setCurrent(item)}
                // >
                //   {name}
                // </NavLink>
                <Link
                  key={id}
                  to={`/config/category/content-list/${id}`}
                  className={classnames('item', { active: current?.id === id })}
                  onClick={() => setCurrent(item)}
                >
                  {current?.id === id ? (
                    <FolderOpen theme="outline" size="16" strokeWidth={4} />
                  ) : (
                    <FolderClose theme="outline" size="16" />
                  )}
                  <span className="truncate ">{name}</span>
                </Link>
              )
            })}
          </section>
        </div>
        <div className="nav">nav</div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  )
}
