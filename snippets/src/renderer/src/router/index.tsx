import Category from '@renderer/pages/category'
import Config from '@renderer/pages/config'
import Content from '@renderer/pages/content'
import ContentList from '@renderer/pages/content-list'
import Home from '@renderer/pages/home'
import { createHashRouter } from 'react-router-dom'

import CategoryLoader from '@renderer/pages/category/loader'
import ContentListLoader from '@renderer/pages/content-list/loader'
import ContentLoader from '@renderer/pages/content/loader'


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
        path: 'category',
        element: <Category />,
        loader: CategoryLoader,
        children: [
          {
            path: 'content-list/:cid?',
            // index: true, // 这个意思代表如果没有路径匹配，则默认跳转到此页面
            loader: ContentListLoader,
            element: <ContentList />,
            children: [
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
