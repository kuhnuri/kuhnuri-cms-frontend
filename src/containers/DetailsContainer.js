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
      const metadataUrl = `${config.api.url}/api/v1/info/${id}`
      const contentsUrl = `${config.api.url}/api/v1/file/${id}`
      if (id.match(/\.(dita|ditamap|xml)$/)) {
        return Promise.all([
          fetch(metadataUrl).then(response => response.json()),
          fetch(contentsUrl).then(response => response.text())
        ])
          .then(values => {
            const metadata = toMetadata(values[0], contentsUrl)
            const contents = values[1]
            dispatch(showAction(metadata, contents))
            callback()
          })
      } else {
        return fetch(metadataUrl)
          .then(response => response.json())
          .then(value => {
            const metadata = toMetadata(value, contentsUrl)
            dispatch(showBinaryAction(metadata))
            callback()
          })
      }
    }
  }
}

const toMetadata = (metadata, src) => ({
  ...metadata,
  created: new Date(metadata.created),
  modified: (!!metadata.modified ? new Date(metadata.modified) : undefined),
  src
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)
