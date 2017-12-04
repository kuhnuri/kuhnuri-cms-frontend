import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Details extends Component {
  render() {
    return (
      <main className="details">
        <h1>Details</h1>
        <dl>
          <dt><label>ID</label></dt>
          <dd className="id">{this.props.match.params.id}</dd>
          <dt><label>Input</label></dt>
          <dd className="input"></dd>
          <dt><label>Transtype</label></dt>
          <dd className="transtype"></dd>
          <dt><label>Filter</label></dt>
          <dd><a className="filter"></a></dd>
          <dt><label>Parameters</label></dt>
          <dd>
            <table className="table">
              <tbody>
                <tr><th>force-unique</th><td>false</td></tr>
              </tbody>
            </table>
          </dd>
          <dt><label>Output</label></dt>
          <dd><a className="output"></a></dd>
          <dt><label>Status</label></dt>
          <dd className="status"></dd>
          <dt><label>Started</label></dt>
          <dd className="started"></dd>
          <dt><label>Processing</label></dt>
          <dd className="processing"></dd>
          <dt><label>Finished</label></dt>
          <dd className="finished"></dd>
        </dl>
        <p>
          <Link to="/">Cancel</Link>
        </p>
      </main>
    );
  }
}

export default Details;
