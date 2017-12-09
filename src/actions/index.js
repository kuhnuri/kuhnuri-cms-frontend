// import config from '../config'

export const create = (job) => {
  return {
    type: 'CREATE',
    job
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

export const fetchAction = (jobs) => {
  return {
    type: 'FETCH',
    jobs
  }
}

export const fetchDetailsAction = (job) => {
  return {
    type: 'FETCH_DETAILS',
    job
  }
}

// export const fetch = () => {
//   return (dispatch) => {
//     debugger
//     return fetch(`${config.api.url}/api/v1/jobs`, {
//       headers: {
//         'Accept': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(list => {
//       dispatch(fetchAction(list))
//       // dispatch(push(`/details/${body.id}`))
//     })
//   }
// }