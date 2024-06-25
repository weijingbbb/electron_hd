import { Outlet } from 'react-router-dom'
// import styles from './index.module.scss'

export default function Config() {
  return (
    <>
      <main className='h-full '>
        <Outlet />
        {/* <div></div>
        <div></div>
        <div></div>
        <div className={styles.content}>
          <Outlet />
        </div>
        <div></div> */}
      </main>
    </>
  )
}
