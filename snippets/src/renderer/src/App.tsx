import { useState } from 'react'
import Result from './components/Result'
import Search from './components/Search'
import { CodeContext } from './context/CodeContext'
import { initData } from './data'

function App(): JSX.Element {
  const [data, setData] = useState(initData)
  return (
    <>
      <CodeContext.Provider value={{ data, setData }}>
        <Search />
        <Result />
      </CodeContext.Provider>
    </>
  )
}

export default App
