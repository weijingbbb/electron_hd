import Config from '@renderer/pages/config'
import Home from '@renderer/pages/home'
import { createHashRouter } from 'react-router-dom'

const routers = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/config',
    element: <Config />,
    children: [
      // {
      //   path: '/',
      //   element: <div></div>
      // }
    ]
  }
])

export default routers
