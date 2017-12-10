// TODO state should be object with `jobs` array in it
const jobs = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        id: action.payload.id,
        status: 'WAITING',
        queueDuration: 0,
        processDuration: null
      }
    default:
      return state
  }
}

export default jobs