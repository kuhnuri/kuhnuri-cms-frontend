import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.loadJob(this.props.match.params.id, () => this.setState({loading: false}))
    this.interval = setInterval(() => this.props.loadJob(this.props.match.params.id), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <main className="details" className={this.state.loading ? 'loading': ''}>
        <h1>Details</h1>
        <dl>
          <dt>
            <label>ID</label>
          </dt>
          <dd className="id">
            {this.props.match.params.id}
          </dd>
          <dt>
            <label>Input</label>
          </dt>
          <dd className="input">
            {this.props.job.input}
          </dd>
          <dt>
            <label>Transtype</label>
          </dt>
          <dd className="transtype">
            {this.props.job.transtype}
          </dd>
          <dt>
            <label>Filter</label>
          </dt>
          <dd>
            {this.props.job.filter}
          </dd>
          <dt>
            <label>Parameters</label>
          </dt>
          <dd>
            <table className="table">
              <thead>
                <tr>
                  <th>force-unique</th>
                  <td>false</td>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </dd>
          <dt>
            <label>Output</label>
          </dt>
          <dd className="output">
            {this.props.job.output}
          </dd>
          <dt>
            <label>Status</label>
          </dt>
          <dd className="status">
            {this.props.job.status}
          </dd>
          <dt>
            <label>Started</label>
          </dt>
          <dd className="started">
          </dd>
          <dt>
            <label>Processing</label>
          </dt>
          <dd className="processing">
          </dd>
          <dt>
            <label>Finished</label>
          </dt>
          <dd className="finished">
          </dd>
        </dl>
      </main>
    );
  }
}

export default Details;
