import Config from '@renderer/layout/config'
import Home from '@renderer/layout/home'
import Category from '@renderer/pages/category'
import Content from '@renderer/pages/content'
import ContentList from '@renderer/pages/content-list'
import Setting from '@renderer/pages/setting'
import WellCome from '@renderer/pages/wellcome'
import { createHashRouter } from 'react-router-dom'

import CategoryLoader from '@renderer/pages/category/loader'
import ContentListLoader from '@renderer/pages/content-list/loader'
import ContentLoader from '@renderer/pages/content/loader'

import CategoryAction from '@renderer/pages/category/action'
import ContentListAction from '@renderer/pages/content-list/action'
import ContentAction from '@renderer/pages/content/action'

const routers = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/config',
    element: <Config />,
    children: [
      {
        index: true,
        element: <Setting />
      },
      {
        path: 'category',
        element: <Category />,
        loader: CategoryLoader,
        action: CategoryAction,
        children: [
          {
            index: true, // 这个意思代表如果没有路径匹配，则默认跳转到此页面
            element: <WellCome />
          },
          {
            path: 'content-list/:cid?',
            loader: ContentListLoader,
            action: ContentListAction,
            element: <ContentList />,
            children: [
              {
                index: true, // 这个意思代表如果没有路径匹配，则默认跳转到此页面
                element: <WellCome />
              },
              {
                path: 'content/:id',
                loader: ContentLoader,
                action: ContentAction,
                element: <Content />
              }
            ]
          }
        ]
      }
    ]
  }
])

export default routers
