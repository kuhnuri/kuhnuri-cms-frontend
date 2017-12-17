import React, { Component } from 'react';

class Dir extends Component {
  render() {
    if (this.props.list.type === 'DIRECTORY') {
      return (
        <li>
          <span onClick={() => this.props.toggle(this.props.list.path)} className={'controller closed'}>[+]</span>
          <span onClick={() => this.open(this.props.list.path)}>{this.props.list.path}</span>
          {this.props.list.children && <ul>{this.props.list.children.map(file => <Dir key={file.path} list={file} toggle={this.props.toggle} />)}</ul>}
        </li>
      )
    } else {
      return (
        <li>
          <span className={'controller'}>[_]</span>
          <span onClick={() => this.open(this.props.list.path)}>{this.props.list.path}</span>
        </li>
      )
    }
  }
}

export default Dir
