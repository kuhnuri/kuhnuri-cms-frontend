import React, { Component } from 'react'

class ImagePreview extends Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} />
    )
  }
}

export default ImagePreview
