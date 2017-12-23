import React, { Component } from 'react'
import ImagePreview from './ImagePreview'
import XmlPreview from './XmlPreview'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.load(this.props.match.params.id, () => this.setState({ loading: false }))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.setState({ loading: true })
      this.props.load(nextProps.match.params.id, () => this.setState({ loading: false }))
    }
  }

  render() {
    if (this.state.loading) {
      return <p>Loading</p>
    } else {
      return <main className={`details ${(!!this.state.loading ? 'loading' : 'no-loading')}`}>
        <h2>Metadata</h2>
        <dl>
          <dt>Path</dt>
          <dd>{this.props.metadata.path}</dd>
          <dt>Source</dt>
          <dd>{this.props.metadata.src}</dd>
        </dl>
        <h2>Content</h2>
        {!!this.props.contents
          ? <XmlPreview contents={this.props.contents} />
          : <ImagePreview src={this.props.metadata.src} alt={this.props.metadata.title} />
        }
      </main>
    }
  }
}

export default Details
