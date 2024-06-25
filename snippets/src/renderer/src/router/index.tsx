import Category from '@renderer/pages/category'
import Config from '@renderer/pages/config'
import ContentList from '@renderer/pages/content-list'
import Home from '@renderer/pages/home'
import { createHashRouter } from 'react-router-dom'

import CategoryLoader from '@renderer/pages/category/loader'

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
            element: <ContentList />
          }
        ]
      }
    ]
  }
])

export default routers
