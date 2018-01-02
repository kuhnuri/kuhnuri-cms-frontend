import { connect } from 'react-redux'
import ContentManager from '../components/ContentManager'
import { push } from 'react-router-redux'
import { fetchAction, fetchNodeAction, toggleProjectAction } from '../actions'
import config from '../config'

const mapStateToProps = state => {
  return {
    ...state.tree
  }
}

const request = {
  headers: {
    'Accept': 'application/json'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProjects: (path, callback) =>
      fetch(`${config.api.url}/api/v1/list/`, request)
        .then(response => response.json())
        .then(node => {
          dispatch(fetchAction(node))
          callback && callback()
        }),
    toggle: (node) => {
      dispatch(toggleProjectAction(node.path))
    },
    loadAllAndToggle: (path, callback) => {
      const tokens = path.split('/')
      const project = tokens[0]
      const steps = tokens
        .slice(1, tokens.length - 1)
        .reduce((acc, cur) => acc.concat(acc.length === 0 ? cur : `${acc[acc.length - 1]}/${cur}`), [])
      Promise.all(steps.map(path =>
        fetch(`${config.api.url}/api/v1/list/${project}/${path}`, request)
          .then(response => response.json()))
      )
        .then(values => {
          dispatch(toggleProjectAction(project))
          values.forEach((list) => {
            dispatch(fetchNodeAction(project, list))
          })
        })
        .then(callback)
    },
    open: (path) => {
      dispatch(push(`/details/${path}`))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentManager)
