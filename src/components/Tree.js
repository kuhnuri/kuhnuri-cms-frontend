import React, { Component } from 'react';
import Dir from './Dir'

class Tree extends Component {
  render() {
    return (this.props.project.expanded &&
      <ul className="tree">{this.props.project.children.map(file => <Dir key={file.path} node={file} {...this.props} />)}</ul>
    )
  }
}

export default Tree
