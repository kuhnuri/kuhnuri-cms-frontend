import { addStateFields, addNode, toggleNode } from '../utils/tree'

const tree = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        ...addStateFields(action.payload, true)
      }
    case 'FETCH_NODE':
      return {
        ...state,
        children: state.children.map(child => addNode(child, action.payload))
      }
    case 'TOGGLE_NODE':
      return toggleNode(state, action.payload)
    default:
      return state
  }
}

export default tree