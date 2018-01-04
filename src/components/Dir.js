import React, { Component } from 'react';

class Dir extends Component {
  toggle() {
    if (!!this.props.children || this.props.node.expanded) {
      this.props.toggle(this.props.project, this.props.node)
    } else {
      this.props.loadAndToggle(this.props.project, this.props.node)
    }
  }

  render() {
    if (this.props.node.type === 'DIRECTORY') {
      return (
        <li>
          <span onClick={() => this.toggle()} className={[
            'controller',
            this.props.node.expanded ? 'expanded' : 'collapsed'
          ].join(' ')}>
            [{this.props.node.expanded ? '-' : '+'}]</span>
          <span>{this.props.node.name}</span>
          {(this.props.node.expanded && this.props.node.children) &&
            <ul>{this.props.node.children.map(file => <Dir key={file.path} {...this.props} node={file} />)}</ul>
          }
        </li>
      )
    } else {
      return (
        <li className={[
          this.props.node.active ? 'active' : null
        ].join(' ')}>
          <span className={'controller'}>&nbsp;&nbsp;&nbsp;</span>
          <span onClick={() => this.props.open(this.props.project.path, this.props.node.path)}>{this.props.node.name}</span>
        </li>
      )
    }
  }
}

export default Dir
