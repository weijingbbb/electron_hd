import '@icon-park/react/styles/index.css'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'
// import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './router'

window.addEventListener('DOMContentLoaded', () => {
  window.api.toRenderOpenWindow((name: WindowNameType) => {
    // console.log('toRenderOpenWindow事件：得到主进程菜单传递过来的参数-' + name)
    // window.api.openWindow(name)
  })
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routers}></RouterProvider>
  </React.StrictMode>
)
