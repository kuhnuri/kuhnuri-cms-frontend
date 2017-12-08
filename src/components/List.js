import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Status from './Status'

class List extends Component {
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
            {this.props.jobs.map(jobs => (
              <Status id={jobs.id} key={jobs.id}
                      status={jobs.status}
                      transtype={jobs.transtype}
                      queueDuration={jobs.queueDuration}
                      processDuration={jobs.processDuration}/>
            ))}
          </tbody>
        </table>
        <p>
          <Link to="/create">New</Link>
        </p>
      </main>
    );
  }
}

export default List
