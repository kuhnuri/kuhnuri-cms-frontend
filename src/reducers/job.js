// TODO state should be object with `jobs` array in it
const jobs = (state = {
  id: null,
  transtype: null,
  input: null
}, action) => {
  switch (action.type) {
    case 'FETCH_DETAILS':
      return {
        ...state,
        ...action.job
      }
    default:
      return state
  }
}

export default jobs