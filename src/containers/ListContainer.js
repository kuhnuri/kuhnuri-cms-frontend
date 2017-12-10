import { connect } from 'react-redux'
import List from '../components/List'
import { cancel, fetchAction } from '../actions'
import config from '../config'

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    cancel: (id) => cancel(id),
    loadJobs: (callback) =>
      fetch(`${config.api.url}/api/v1/jobs`, {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(list => {
        dispatch(fetchAction(list))
        callback()
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
