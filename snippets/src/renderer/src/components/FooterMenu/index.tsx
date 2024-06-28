import { Add } from '@icon-park/react'
import { useSubmit } from 'react-router-dom'

export default function FooterMenu() {
  const submit = useSubmit()
  const add = () => {
    submit(null, { method: 'POST' })
  }
  return (
    <div className="nav">
      <Add theme="outline" size="24" fill="#333" onClick={add}/>
    </div>
  )
}
