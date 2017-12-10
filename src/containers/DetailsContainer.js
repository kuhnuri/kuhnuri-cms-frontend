import { connect } from 'react-redux'
import Details from '../components/Details'
import { fetchDetailsAction } from '../actions'
import config from '../config'

const mapStateToProps = state => {
  return {
    job: state.job
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadJob: (id, callback) =>
      fetch(`${config.api.url}/api/v1/job/${id}`, {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(job => {
        dispatch(fetchDetailsAction(job))
        callback()
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)
