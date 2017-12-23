import { connect } from 'react-redux'
import Details from '../components/Details'
import { showAction, showBinaryAction } from '../actions'
import config from '../config'

const mapStateToProps = state => {
  return {
    metadata: state.content.metadata,
    contents: state.content.contents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: (id, callback) => {
      const metadata = {
        path: id,
        src: `${config.api.url}/api/v1/file/${id}`,
        title: id
      }
      if (id.match(/\.(dita|ditamap|xml)$/)) {
        return fetch(metadata.src)
          .then(response => response.text())
          .then(contents => {
            dispatch(showAction(metadata, contents))
            callback()
          })
      } else {
        dispatch(showBinaryAction(metadata))
        callback()
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)
