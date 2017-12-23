import React, { Component } from 'react';
import Tree from './Tree'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.loadJobs(undefined, () => this.setState({ loading: false }))
    // this.interval = setInterval(this.props.loadJobs, 5000)
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  render() {
    return (
      <main className={`col ${this.state.loading ? 'loading' : ''}`}>
        <h1>Files</h1>
        {this.state.loading && <p>Loading...</p>}
        {!this.state.loading && <Tree node={this.props.tree} toggle={this.props.toggle} open={this.props.open} />}
      </main>
    );
  }
}

export default List
