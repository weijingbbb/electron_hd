import { useStore } from '@renderer/store/useStore'

// 注册快捷键的钩子
export default () => {
  const setError = useStore((state) => state.setError)
  const registerRenderWindowShortCut = async (shortCur: string) => {
    const result = await window.api.shortCur({
      type: 'renderWindow',
      shortCur
    })
    // 渲染不同的提示
    console.log(result)
    // if (result || result === undefined) return
    setError('注册快捷键失败')
  }
  return {
    registerRenderWindowShortCut
  }
}
