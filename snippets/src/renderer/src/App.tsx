import { MutableRefObject, useEffect, useRef } from 'react'
import ErrorMessage from './components/Error'
import Result from './components/Result'
import Search from './components/Search'
import useIgnoreMouseEvents from './hooks/useIgnoreMouseEvents'
import useShortCur from './hooks/useShortCur'

function App(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { registerRenderWindowShortCut } = useShortCur()
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  useEffect(() => {
    // 注册窗口切换快捷键
    registerRenderWindowShortCut('CommandOrControl+;')
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
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

export default App
