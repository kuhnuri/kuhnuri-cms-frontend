import React, { Component } from 'react';
import Status from './Status'

class List extends Component {
  componentDidMount() {
    this.props.fetch()
    this.interval = setInterval(() => this.props.fetch(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <main className="List">
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
            {this.props.jobs.map(job => (
              <Status id={job.id} key={job.id}
                status={job.status}
                transtype={job.transtype}
                queueDuration={job.queueDuration}
                processDuration={job.processDuration} />
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default List
