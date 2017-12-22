import { connect } from 'react-redux'
import Details from '../components/Details'
import { showAction } from '../actions'
import config from '../config'
import { addDuration } from '../utils'

const mapStateToProps = state => {
  return {
    contents: state.content.contents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: (id, callback) =>
      fetch(`${config.api.url}/api/v1/file/${id}`, {
        headers: {
          // 'Accept': 'application/json'
        }
      })
      .then(response => response.text())
      .then(contents => {
        dispatch(showAction(contents))
        callback && callback()
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)
