import React, { Component } from 'react';
import Status from './Status'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.loadJobs(() => this.setState({ loading: false }))
    this.interval = setInterval(this.props.loadJobs, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <main className={this.state.loading ? 'loading' : ''}>
        <h1>Jobs</h1>
        <table id="jobs" border="1" className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Transtype</th>
              <th>Queue time</th>
              <th>Processing time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.loading && <tr><td colspan="5">Loading...</td></tr>}
            {this.props.jobs.map(job => (
              <Status id={job.id} key={job.id}
                status={job.status}
                transtype={job.transtype}
                queueDuration={job.queueDuration}
                created={job.created}
                processDuration={job.processDuration} />
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default List
