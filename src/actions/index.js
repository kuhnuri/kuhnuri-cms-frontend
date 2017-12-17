export const create = (job) => {
  return {
    type: 'CREATE',
    payload: {
      job
    }
  }
}

export const cancel = (id) => {
  return {
    type: 'CANCEL',
    payload: {
      id
    }
  }
}

export const remove = (id) => {
  return {
    type: 'REMOVE',
    payload: {
      id
    }
  }
}

export const fetchAction = (node) => {
  return {
    type: 'FETCH',
    payload: node
  }
}

export const fetchNodeAction = (path, file) => {
  return {
    type: 'FETCH_NODE',
    payload: file
  }
}

export const fetchDetailsAction = (job) => {
  return {
    type: 'FETCH_DETAILS',
    payload: {
      job
    }
  }
}
