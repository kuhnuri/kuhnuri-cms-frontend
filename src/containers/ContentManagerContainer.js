import { connect } from 'react-redux'
import ContentManager from '../components/ContentManager'
import { push } from 'react-router-redux'
import { fetchAction, fetchProjectAction, toggleProjectAction } from '../actions'
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
    loadAndToggle: (node) => {
      return fetch(`${config.api.url}/api/v1/list/${node.path}`, request)
        .then(response => response.json())
        .then(list => {
          dispatch(fetchProjectAction(node.path, list))
        })
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
