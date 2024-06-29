import { Outlet } from 'react-router-dom'
// import styles from './index.module.scss'

// 右键菜单
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.layer.css'
import '@renderer/assets/context-menu-layout.css'
import { ContextMenuProvider } from 'mantine-contextmenu'
import 'mantine-contextmenu/styles.layer.css'

export default function Config() {
  return (
    <>
      <MantineProvider defaultColorScheme="auto">
        <ContextMenuProvider>
          <main >
            <Outlet />
          </main>
        </ContextMenuProvider>
      </MantineProvider>
    </>
  )
}
