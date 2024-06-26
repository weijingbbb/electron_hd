export default async ({ params }) => {
  const { id } = params
  const result = await window.api.sql(`select * from contents where id = ${id}`, 'findOne')

  return result
}
