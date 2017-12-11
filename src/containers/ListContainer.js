import { connect } from 'react-redux'
import List from '../components/List'
import { cancel, fetchAction } from '../actions'
import config from '../config'
import { addDuration } from '../utils'

const mapStateToProps = state => {
  return {
    jobs: state.jobs.map(addDuration)
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
        callback && callback()
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
