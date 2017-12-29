import React, { Component } from 'react';
import Tree from './Tree'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    // this.props.loadJobs(undefined, () => this.setState({ loading: false }))
    // this.interval = setInterval(this.props.loadJobs, 5000)
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  render() {
    // if (this.state.loading) {
    //   return <p>Loading...</p>
    // } else {
      return <Tree project={this.props.project} toggle={this.props.toggle}
        loadAndToggle={this.props.loadAndToggle} open={this.props.open} />
    // }
  }
}

export default Project
