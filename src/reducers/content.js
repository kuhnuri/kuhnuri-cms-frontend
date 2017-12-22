const jobs = (state = { contents: null }, action) => {
  switch (action.type) {
    case 'SHOW':
      console.log('show', action.payload)
      return {
        ...state,
        contents: action.payload
      }
    default:
      return state
  }
}

export default jobs