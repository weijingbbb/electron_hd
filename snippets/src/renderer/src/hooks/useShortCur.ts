// 注册快捷键的钩子
export default () => {
  const registerRenderWindowShortCut = (shortCur: string) => {
    console.log('registerRenderWindowShortCut')

    window.api.shortCur({
      type: 'renderWindow',
      shortCur
    })
  }
  return {
    registerRenderWindowShortCut
  }
}
