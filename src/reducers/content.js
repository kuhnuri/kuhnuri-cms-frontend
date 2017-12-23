const jobs = (state = { contents: null }, action) => {
  switch (action.type) {
    case 'SHOW':
      return {
        ...state,
        metadata: action.payload.metadata,
        contents: action.payload.contents
      }
    case 'SHOW_BINARY':
    console.log('action', action)
      return {
        ...state,
        metadata: action.payload.metadata,
        contents: undefined
      }
    default:
      return state
  }
}

export default jobs