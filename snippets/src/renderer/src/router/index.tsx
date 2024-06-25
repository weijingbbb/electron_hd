import Category from '@renderer/pages/category'
import Config from '@renderer/pages/config'
import Content from '@renderer/pages/content'
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
        path: '',
        element: <Category />,
        loader: CategoryLoader,
        children: [
          {
            index: true,
            element: <Content />
          }
        ]
      }
    ]
  }
])

export default routers
