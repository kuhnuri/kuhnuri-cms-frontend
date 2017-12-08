const notes = (state = [], action) => {
  console.log(action)
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
      return state.map(note =>
        (note.id === action.id) 
          ? {...note, completed: !note.completed}
          : note
      )
    default:
      return state
  }
}

export default notes