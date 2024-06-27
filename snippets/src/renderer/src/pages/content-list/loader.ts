export default async ({ params, request }) => {
  const url = new URL(request.url)

  const keyword = url.searchParams.get('keyword')

  const cid = params.cid
  let sql = `select * from contents`
  if (keyword) {
    sql += ` where title like @keyword order by id desc`
    return await window.api.sql(sql, 'findAll', {
      keyword: `%${keyword}%`
    })
  }
  let result
  if (cid !== undefined) {
    result = await window.api.sql(
      `select * from contents where category_id = ${cid} order by id desc`,
      'findAll'
    )
  } else {
    result = await window.api.sql(`select * from contents order by id desc`, 'findAll')
  }
  return result
}
