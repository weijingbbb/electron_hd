import Result from './components/Result'
import Search from './components/Search'

function App(): JSX.Element {
  window.api.shortCur({
    type: 'renderWindow',
    shortCur: 'CommandOrControl+;'
  })
  return (
    <>
      <Search />
      <Result />
    </>
  )
}

export default App
