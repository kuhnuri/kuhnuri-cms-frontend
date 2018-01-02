import React, { Component } from 'react';
import Tree from './Tree'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  render() {
    return <Tree project={this.props.project} toggle={this.props.toggle}
      loadAndToggle={this.props.loadAndToggle} open={this.props.open} />
  }
}

export default Project
