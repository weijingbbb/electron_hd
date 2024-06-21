class Drag {
  private pageX = 0
  private pageY = 0
  private body?: HTMLBodyElement
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')!
      this.body?.addEventListener('mousedown', this.mousedown.bind(this))
    })
  }

  private mousedown(e: MouseEvent) {
    const { pageX, pageY } = e
    this.pageX = pageX
    this.pageY = pageY
    const mouseCallback = this.moveEvent.bind(this)
    this.body?.addEventListener('mousemove', mouseCallback)
    // 移除事件

    this.body?.addEventListener('mouseup', () =>
      this.body?.removeEventListener('mousemove', mouseCallback)
    )
    this.body?.addEventListener('mouseout', () =>
      this.body?.removeEventListener('mousemove', mouseCallback)
    )
  }
  private moveEvent(e: MouseEvent) {
    const { pageX, pageY } = e
    const x = pageX - this.pageX
    const y = pageY - this.pageY
    window.api.drag({ x, y })
  }
}

export default () => {
  const drag = new Drag()
  drag.run()
  return {
    drag
  }
}
