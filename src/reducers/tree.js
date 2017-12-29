import { addStateFields, addNode, toggleNode } from '../utils/tree'

const tree = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        projects: action.payload.map(project => addStateFields(project, false))
      }
    case 'FETCH_PROJECT':
      return {
        ...state,
        projects: state.projects.map(child => addNode(child, action.payload))
      }
    case 'TOGGLE_PROJECT':
      return {
        ...state,
        projects: state.projects.map(project => ({
          ...project,
          expanded: (project.path === action.payload ? !project.expanded : project.expanded)
        }))
      }
    case 'FETCH_NODE':
      return {
        ...state,
        projects: state.projects.map(child => child.path === action.payload.project
          ? addNode(child, action.payload.file)
          : child)
      }
    case 'TOGGLE_NODE':
      return toggleNode(state, action.payload)
    default:
      return state
  }
}

export default tree