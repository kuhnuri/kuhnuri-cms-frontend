// import config from '../config'

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

export const fetchAction = (jobs) => {
  return {
    type: 'FETCH',
    payload: {
      jobs
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
