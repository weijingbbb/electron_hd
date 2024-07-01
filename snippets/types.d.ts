// 查询action类型
type SqlActionType = 'findAll' | 'findOne' | 'insert' | 'update' | 'del'
// 窗口的类型
type WindowNameType = 'search' | 'config' | 'setting'
// 注册的热键类型
type HotKeyType = 'RenderSearch'
// 注册的热键类型 - 通信参数
interface HotKeyProps {
  type: HotKeyType
  shortCur: string
}

type CategoryType = {
  id: number
  name: string
  created_at: string
}

type ContentType = {
  id: number
  title: string
  content: string
  category_id: number
  created_at: string
}

type SqlParams = Record<string, any>
