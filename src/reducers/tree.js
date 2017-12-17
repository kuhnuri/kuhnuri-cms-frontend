const addStateFields = (tree) => {
  let t = {
    ...tree,
    expanded: false
  }
  return t
}

const addNode = (tree, node) => {
  return {
    tree,
    children: tree.children.map(child =>
      child.path === node.path ? node : addNode(child)
    )
  }
}

const tree = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        ...addStateFields(action.payload)
      }
    case 'FETCH_NODE':
      return {
        ...state,
        ...addNode(state, action.payload)
      }
    default:
      return state
  }
}

export default tree