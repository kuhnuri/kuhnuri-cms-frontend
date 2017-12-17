import React, { Component } from 'react';
import Dir from './Dir'

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
      <main className={this.state.loading ? 'loading' : ''}>
        <h1>Files</h1>
        {this.state.loading && <p>Loading...</p>}
        <ul id="toc">
          <Dir list={this.props.tree} toggle={this.props.toggle} />
        </ul>
      </main>
    );
  }
}

export default List
