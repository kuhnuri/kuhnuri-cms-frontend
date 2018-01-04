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

export const fetchProjectAction = (path, file) => {
  return {
    type: 'FETCH_PROJECT',
    payload: file
  }
}

export const toggleProjectAction = (path) => {
  return {
    type: 'TOGGLE_PROJECT',
    payload: path
  }
}

export const fetchNodeAction = (project, file) => {
  return {
    type: 'FETCH_NODE',
    payload: {
      project,
      file
    }
  }
}

export const toggleNodeAction = (project, file) => {
  return {
    type: 'TOGGLE_NODE',
    payload: {
      project,
      file
    }
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

export const showAction = (metadata, contents) => ({
  type: 'SHOW',
  payload: {
    metadata,
    contents
  }
})

export const showBinaryAction = (metadata) => ({
  type: 'SHOW_BINARY',
  payload: {
    metadata
  }
})

export const activateNodeAction = (project, file) => ({
  type: 'ACTIVATE_NODE',
  payload: {
    project,
    file
  }
})
