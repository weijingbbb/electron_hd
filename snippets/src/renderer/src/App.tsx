import Result from './components/Result'
import Search from './components/Search'
import { CodeProvide } from './context/CodeContext'

function App(): JSX.Element {
  return (
    <>
      <CodeProvide>
        <Search />
        <Result />
      </CodeProvide>
    </>
  )
}

export default App
