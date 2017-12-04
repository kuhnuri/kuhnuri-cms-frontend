export const create = (data) => {
  console.log(data)
  return {
    type: 'CREATE',
    ...data
  }
}