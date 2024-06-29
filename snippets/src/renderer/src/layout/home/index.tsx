import ErrorMessage from '@renderer/components/Error'
import Result from '@renderer/components/Result'
import Search from '@renderer/components/Search'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'
import { MutableRefObject, useEffect, useRef } from 'react'

function Home(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  // const { registerRenderWindowShortCut } = useShortCur()
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()

  useEffect(() => {
    // 注册窗口切换快捷键
    // registerRenderWindowShortCut('CommandOrControl+;')
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
    // window.api.openConfigWindow()
  }, [])
  return (
    <>
      <main className="relative " ref={mainRef}>
        <Search />
        <Result />
        <ErrorMessage />
      </main>
    </>
  )
}

export default Home
