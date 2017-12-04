import { combineReducers } from 'redux'
import notes from './notes'
// import visibilityFilter from './visibilityFilter'

const noteApp = combineReducers({
  notes
  // visibilityFilter
})

export default noteApp
