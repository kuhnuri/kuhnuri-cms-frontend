import React, { Component } from 'react'

class XmlPreview extends Component {
  render() {
    return (
      <pre>{this.props.contents}</pre>
    )
  }
}

export default XmlPreview
