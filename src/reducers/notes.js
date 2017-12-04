const notes = (state = [], action) => {
  console.log('reducer', action)
  switch (action.type) {
    case 'CREATE':
      return [
        ...state,
        {
          id: action.id,
          status: 'WAITING',
          queueDuration: 0,
          processDuration: undefined
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default notes