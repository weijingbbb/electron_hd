import { Outlet, useLoaderData } from 'react-router-dom'
import './index.scss'

export default function Category() {
  const categories = useLoaderData() as CategoryType[]

  return (
    <>
      <main className="category-page">
        <div className="categories">
          {categories.map((item) => {
            return <div key={item.id}>{item.name}</div>
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
