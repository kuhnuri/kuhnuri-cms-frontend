const jobs = (state = [], action) => {
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
      return state.map(job =>
        (job.id === action.id) 
          ? {...job, completed: !job.completed}
          : job
      )
    default:
      return state
  }
}

export default jobs