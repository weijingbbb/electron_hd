export default async ({ params }) => {
  console.log(params)

  const { id } = params
  const result = await window.api.sql(`select * from contents where id = ${id}`, 'findOne')
  console.log(result)
  return result
}
