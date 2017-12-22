import React, { Component } from 'react';
import Dir from './Dir'

class Tree extends Component {
  render() {
    return (
      <ul id="toc">
        <Dir node={this.props.node} toggle={this.props.toggle} open={this.props.open} />
      </ul>
    )
  }
}

export default Tree
