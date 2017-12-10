// TODO state should be object with `jobs` array in it
const jobs = (state = [], action) => {
  switch (action.type) {
    case 'FETCH':
      return action.payload.jobs
    default:
      return state
  }
}

export default jobs