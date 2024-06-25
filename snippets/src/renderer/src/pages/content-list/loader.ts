export default async ({ params }) => {
  console.log(params.cid)
  const result = await window.api.sql(
    `select * from contents where category_id = ${params.cid}`,
    'findAll'
  )
  console.log(result)
  return result
}
