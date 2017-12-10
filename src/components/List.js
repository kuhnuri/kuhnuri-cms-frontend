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

  duration(dateTime) {
    const duration = Math.round((Date.now() - new Date(dateTime).getTime()) / 1000)
    const seconds = duration % 60
    const minutes = Math.floor(duration / 60) % 60
    const hours = Math.floor(duration / (60 * 60)) % 24
    const days = Math.floor(duration / (60 * 60 * 24)) % 365
    if (minutes === 0) {
      return `${seconds} sec`
    } else if (hours === 0) {
      return `${minutes} min ${seconds} sec`
    } else if (days === 0) {
      return `${hours} hours ${minutes} min ${seconds} sec`      
    } else {
      return `${days} days ${hours} hours ${minutes} min ${seconds} sec`      
    }
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
                queueDuration={this.duration(job.created)}
                processDuration={job.processDuration} />
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default List
