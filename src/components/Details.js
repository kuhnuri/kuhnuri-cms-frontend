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
          <dt>Title</dt>
          <dd>{this.props.metadata.name}</dd>
          <dt>Path</dt>
          <dd>{this.props.metadata.path}</dd>
          <dt>Source</dt>
          <dd>{this.props.metadata.src}</dd>
          <dt>Author</dt>
          <dd>{this.props.metadata.author}</dd>
          {this.props.metadata.editor && <dt>Editor</dt>}
          {this.props.metadata.editor && <dd>{this.props.metadata.editor}</dd>}
          <dt>Created</dt>
          <dd>{this.props.metadata.created.toString()}</dd>
          {this.props.metadata.modified && <dt>Modified</dt>}
          {this.props.metadata.modified && <dd>{this.props.metadata.modified.toString()}</dd>}
        </dl>
        <h2>Preview</h2>
        {!!this.props.contents
          ? <XmlPreview contents={this.props.contents} />
          : <ImagePreview src={this.props.metadata.src} alt={this.props.metadata.title} />
        }
      </main>
    }
  }
}

export default Details
