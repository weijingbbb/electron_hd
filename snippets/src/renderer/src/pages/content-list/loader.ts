export default async ({ params }) => {
  const result = await window.api.sql(
    `select * from contents where category_id = ${params.cid}`,
    'findAll'
  )
  return result
}
