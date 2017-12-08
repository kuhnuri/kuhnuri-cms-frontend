export const create = (data) => {
  return {
    type: 'CREATE',
    ...data
  }
}

export const cancel = (id) => {
  return {
    type: 'CANCEL',
    id
  }
}

export const remove = (id) => {
  return {
    type: 'REMOVE',
    id
  }
}
