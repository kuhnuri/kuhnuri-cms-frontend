export const addStateFields = (tree, state) => {
  let t = {
    ...tree,
    expanded: state
  }
  return t
}

/**
 * Walk whole tree to update a single node
 * 
 * @param {*} tree parent tree root
 * @param {string} path path to matching node
 * @param {function} func function to generate replacement for matching node, takes matching node as argument
 */
export const processTree = (tree, path, func) => {
  return tree.path === path
    ? func(tree, true)
    : (tree.children
      ? {
        ...tree,
        children: tree.children.map(child => processTree(child, path, func))
      }
      : tree)
}

/**
 * Walk whole tree to update a single node
 */
export const addNode = (tree, node) => processTree(tree, node.path, () => addStateFields(node, true))

/**
 * 
 * @param {*} tree parent tree root
 * @param {string} path path to matching node
 */
export const toggleNode = (tree, path) => processTree(tree, path, (match) => ({ ...match, expanded: !match.expanded }))

const findNode = (node, path) => {
  if (node.path === path) {
    return node
  }
  if (!!node.children) {
    for (let i = 0; i < node.children.length; i++) {
      let ret = findNode(node.children[i])
      if (!!ret) {
        return ret
      }
    }
  }
}