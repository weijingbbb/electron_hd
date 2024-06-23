import { useEffect } from 'react'
import Result from './components/Result'
import Search from './components/Search'
import useShortCur from './hooks/useShortCur'

function App(): JSX.Element {
  const { registerRenderWindowShortCut } = useShortCur()
  useEffect(() => {
    // 注册窗口切换快捷键
    registerRenderWindowShortCut('CommandOrControl+;')
  }, [])
  return (
    <>
      <Search />
      <Result />
    </>
  )
}

export default App
