import { useStore } from '@renderer/store/useStore'
import { Alert } from 'antd'
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

  // 有错误信息则显示错误信息
  return error ? (
    // <div className="text-center text-white bg-red-500 ">{error}</div>
    <Alert message={error} type="error" showIcon></Alert>
  ) : (
    <></>
  )
}
