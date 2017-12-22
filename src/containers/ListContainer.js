import { connect } from 'react-redux'
import List from '../components/List'
import {push} from 'react-router-redux'
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
    toggle: (node) => {
      if (!!node.expanded) {
        dispatch(toggleNodeAction(node.path))
      } else {
        return fetch(`${config.api.url}/api/v1/list/${node.path}`, request)
          .then(response => response.json())
          .then(list => {
            dispatch(fetchNodeAction(node.path, list))
          })
      }
    },
    open: (path) => {
      console.log('open', path)
      // fetch(`${config.api.url}/api/v1/list/${node.path}`, request)
      // .then(response => response.json())
      // .then(contents => {
      //   dispatch(showAction(contents))
      // })
      dispatch(push(`/details/${path}`))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
