class Drag {
  private pageX = 0;
  private pageY = 0;
  private body?: HTMLBodyElement
  constructor() {}

  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')
      this.body?.addEventListener('mousedown', this.mousedown.bind(this))
    })
  }

  private mousedown(e: MouseEvent) {
    const { pageX, pageY } = e
    this.pageX = pageX
    this.pageY = pageY
    this.body?.addEventListener('mousemove', this.moveEvent.bind(this))
  }
  private moveEvent(e: MouseEvent) {
    const { pageX, pageY } = e
    const x = this.pageX - pageX
    const y = this.pageY - pageY
  }
}

export default () => {
  const drag = new Drag();
  drag.run()
  return {
    drag
  }
}
