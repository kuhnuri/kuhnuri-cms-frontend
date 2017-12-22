import { combineReducers } from 'redux'
import tree from './tree'
import content from './content'
// import create from './create'
// import visibilityFilter from './visibilityFilter'

export default combineReducers({
  tree,
  content
  // create
  // visibilityFilter
})
