import { Add, DeleteFive } from '@icon-park/react'
import '@renderer/assets/global.scss'
import dayjs from 'dayjs'
import { useContextMenu } from 'mantine-contextmenu'
import { Form, NavLink, Outlet, useLoaderData, useNavigate, useSubmit } from 'react-router-dom'
import './index.scss'

export default function Content() {
  const contents = useLoaderData() as ContentType[]
  // const [content, setContent] = useState<ContentType>()
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (contents.length) {
  //     // setContent(contents[0])
  //     navigate(`/config/category/content-list/${contents[0].category_id}/content/${contents[0].id}`)
  //   }
  // }, [contents])

  return (
    <main className="content-list-page">
      <div className="list">
        <Form>
          <div className="flex items-center justify-between px-2 py-1 mb-2 text-xs bg-white rounded ">
            <input
              autoFocus
              type="text"
              name="keyword"
              placeholder="关键词......"
              className="w-full outline-none"
              onChange={(e) => submit(e.target.form)}
            />
            <Add
              theme="outline"
              size="18"
              fill="#333"
              className="cursor-pointer "
              onClick={() => {
                submit(null, { method: 'POST' })
              }}
            />
            {/* <Button htmlType="submit" type="default" size="small" className="text-xs ">
              搜索
            </Button> */}
          </div>
        </Form>
        {contents.map((item) => {
          const { id, title, category_id: cid, created_at } = item
          const to = `/config/category/content-list/${cid}/content/${id}`
          return (
            <NavLink
              key={id}
              to={to}
              className={({ isActive }) => (isActive ? 'active item' : 'item')}
              onContextMenu={showContextMenu(
                [
                  {
                    key: 'del',
                    title: (
                      <div className="contextMenu-item">
                        <DeleteFive theme="outline" size="16" />
                        <span className="txt">删除此项</span>
                      </div>
                    ),
                    onClick: () => {
                      submit({ id }, { method: 'DELETE' })
                    }
                  }
                ],
                {
                  className: 'contextMenu'
                }
              )}
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
