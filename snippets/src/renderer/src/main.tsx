import '@icon-park/react/styles/index.css'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'
// import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './router'

// 右键菜单
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.layer.css'
import '@renderer/assets/context-menu-layout.css'
import { ContextMenuProvider } from 'mantine-contextmenu'
import 'mantine-contextmenu/styles.layer.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <ContextMenuProvider>
        <RouterProvider router={routers}></RouterProvider>
      </ContextMenuProvider>
    </MantineProvider>
  </React.StrictMode>
)
