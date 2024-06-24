import { Outlet } from 'react-router-dom'
import './index.scss'

export default function Category() {
  return (
    <>
      <main className="category-page">
        <div className="categories">categories</div>
        <div className="nav">nav</div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  )
}
