import ErrorMessage from '@renderer/components/Error'
import Result from '@renderer/components/Result'
import Search from '@renderer/components/Search'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'
import useShortCur from '@renderer/hooks/useShortCur'
import { useStore } from '@renderer/store/useStore'
import { MutableRefObject, useEffect, useRef } from 'react'

function Home(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { registerRenderWindowShortCut } = useShortCur()
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  const shortcutShow = useStore((s) => s.shortcutShow)

  useEffect(() => {
    // 注册窗口切换快捷键
    // registerRenderWindowShortCut('CommandOrControl+;')
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
    // window.api.openConfigWindow()
    // 注册快捷键
    console.log('shortcutShow:', shortcutShow)
    if (shortcutShow.length) {
      window.api.shortCur({
        type: 'RenderSearch',
        shortCur: shortcutShow.join('+')
      })
    }
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
