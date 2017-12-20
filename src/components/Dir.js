import React, { Component } from 'react';

class Dir extends Component {
  render() {
    if (this.props.node.type === 'DIRECTORY') {
      return (
        <li>
          <span onClick={() => this.props.toggle(this.props.node)}
            className={'controller ' + (this.props.node.expanded ? 'expanded' : 'collapsed')}>[{this.props.node.expanded ? '-' : '+'}]</span>
          <span onClick={() => this.props.open(this.props.node.path)}>{this.props.node.name}</span>
          {this.props.node.expanded && this.props.node.children &&
            <ul>{this.props.node.children.map(file => <Dir key={file.path} node={file} toggle={this.props.toggle} />)}</ul>
          }
        </li>
      )
    } else {
      return (
        <li>
          <span className={'controller'}>&nbsp;&nbsp;&nbsp;</span>
          <span onClick={() => this.open(this.props.node.path)}>{this.props.node.name}</span>
        </li>
      )
    }
  }
}

export default Dir
