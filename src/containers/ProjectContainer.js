import { connect } from 'react-redux'
import Project from '../components/Project'
import { push } from 'react-router-redux'
import { fetchAction, fetchNodeAction, toggleNodeAction } from '../actions'
import config from '../config'

const mapStateToProps = state => {
  return {
    tree: state.tree
  }
}

const request = {
  headers: {
    'Accept': 'application/json'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadJobs: (path, callback) =>
      fetch(`${config.api.url}/api/v1/list/`, request)
        .then(response => response.json())
        .then(node => {
          dispatch(fetchAction(node))
          callback && callback()
        }),
    toggle: (project, node) => {
      dispatch(toggleNodeAction(project.path, node.path))
    },
    loadAndToggle: (project, node) => {
      return fetch(`${config.api.url}/api/v1/list/${project.path}/${node.path}`, request)
        .then(response => response.json())
        .then(list => {
          dispatch(fetchNodeAction(project.path, list))
        })
    },
    open: (project, path) => {
      // fetch(`${config.api.url}/api/v1/list/${node.path}`, request)
      // .then(response => response.json())
      // .then(contents => {
      //   dispatch(showAction(contents))
      // })
      dispatch(push(`/details/${project}/${path}`))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
