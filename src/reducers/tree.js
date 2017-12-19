const addStateFields = (tree, state) => {
  console.log('addStateFields', tree)
  let t = {
    ...tree,
    expanded: state
  }
  return t
}

/**
 * Walk whole tree to update a single node
 */
const addNode = (tree, node) => {
  return tree.path === node.path
    ? addStateFields(node, true)
    : (tree.children
      ? {
        ...tree,
        children: tree.children.map(child => addNode(child, node))
      }
      : tree)
  // return {
  //   tree,
  //   children: tree.children.map(child =>
  //     child.path === node.path ? node : addNode(child)
  //   )
  // }
}

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
    default:
      return state
  }
}

export default tree