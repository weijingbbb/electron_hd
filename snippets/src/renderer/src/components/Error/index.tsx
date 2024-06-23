import { useStore } from '@renderer/store/useStore'
import { useEffect } from 'react'

export default function ErrorMessage() {
  const error = useStore((state) => state.error)
  const setError = useStore((state) => state.setError)

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!error) return <></>
  return <div className="text-center text-white bg-red-500 ">{error}</div>
}
