import React, { Component } from 'react'

class ImagePreview extends Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} className="img-fluid" />
    )
  }
}

export default ImagePreview
