// 注册快捷键的钩子
export default () => {
  const registerRenderWindowShortCut = async (shortCur: string) => {
    const result = await window.api.shortCur({
      type: 'renderWindow',
      shortCur
    })
    // 渲染不同的提示
    alert(result)
  }
  return {
    registerRenderWindowShortCut
  }
}
