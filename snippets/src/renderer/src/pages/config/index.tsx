import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

export default function Config() {
  return (
    <>
      <main className={styles.container}>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles.content}>
          <Outlet />
        </div>
        <div></div>
      </main>
    </>
  )
}
