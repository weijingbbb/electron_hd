import { CategoryItem } from '@renderer/components/CategoryItem'
import FooterMenu from '@renderer/components/FooterMenu'
import QuickNav from '@renderer/components/QuickNav'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import './index.scss'

export default function Category() {
  const categories = useLoaderData() as CategoryType[]

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (categories.length) {
  //     navigate(`/config/category/content-list/${categories[0].id}`)
  //     setCurrent(categories[0])
  //   }
  // }, [categories])
  return (
    <>
      <main className="category-page">
        <div className="categories">
          <section className="list-box">
            <QuickNav />
            {categories.map((category) => (
              <CategoryItem category={category} key={category.id} />
            ))}
          </section>
        </div>
        <FooterMenu />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  )
}
