export const create = (data) => {
  return {
    type: 'CREATE',
    ...data
  }
}