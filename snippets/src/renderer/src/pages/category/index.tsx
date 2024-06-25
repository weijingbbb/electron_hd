import { useState } from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import './index.scss'

export default function Category() {
  const [current, setCurrent] = useState<CategoryType>()
  const categories = useLoaderData() as CategoryType[]

  return (
    <>
      <main className="category-page">
        <div className="categories">
          {categories.map((item) => {
            const { id, name } = item
            return (
              <Link
                key={id}
                to={`/config/category/content-list/${id}`}
                className={current?.id === id ? 'active item' : 'item'}
                onClick={() => setCurrent(item)}
              >
                {name}
              </Link>
            )
          })}
        </div>
        <div className="nav">nav</div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  )
}
