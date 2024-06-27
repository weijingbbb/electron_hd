export default async ({ params }) => {
  const { id } = params
  const content = await window.api.sql(`select * from contents where id = ${id}`, 'findOne')
  const categories = await window.api.sql('select * from categories', 'findAll')

  return {
    content,
    categories
  }
}
