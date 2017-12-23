import { connect } from 'react-redux'
import Details from '../components/Details'
import { showAction } from '../actions'
import config from '../config'

const mapStateToProps = state => {
  return {
    contents: state.content.contents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: (id, callback) =>
      fetch(`${config.api.url}/api/v1/file/${id}`)
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
