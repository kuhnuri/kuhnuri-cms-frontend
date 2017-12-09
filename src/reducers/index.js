import { combineReducers } from 'redux'
import jobs from './jobs'
import job from './job'
import create from './create'
// import visibilityFilter from './visibilityFilter'

export default combineReducers({
  jobs,
  job,
  create
  // visibilityFilter
})
