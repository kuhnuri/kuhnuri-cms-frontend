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
            {this.props.notes.map(note => (
              <Status id={note.id} key={note.id}
                      status={note.status}
                      transtype={note.transtype}
                      queueDuration={note.queueDuration}
                      processDuration={note.processDuration}/>
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
