

// 查询数据
export default async () => {
  const result = await window.api.sql(`select * from categories`, 'findAll')
  return result
}
