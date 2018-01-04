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
 * @param {function} match function to generate replacement for matching node, takes matching node as argument
 * @param {function} nonMatch function to generate replacement for non-matching node, takes matching node as argument
 */
export const processTree = (tree, path, match, nonMatch) => {
  const non = nonMatch || (t => t)
  if (tree.path === path) {
    return match(tree, true)
  } else {
    if (tree.children) {
      return non({
        ...tree,
        children: tree.children.map(child => processTree(child, path, match, non))
      })
    } else {
      return non(tree)
    }
  }
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

/**
 * 
 * @param {*} tree parent tree root
 * @param {string} path path to matching node
 */
export const activateNode = (tree, path) => processTree(tree, path,
  match => ({ ...match, active: true }),
  nonMatch => ({ ...nonMatch, active: false }))

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