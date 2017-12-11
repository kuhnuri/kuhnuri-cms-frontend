import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { durationApproximation} from '../utils'

class Status extends Component {
  render() {
    return (
      <tr>
        <td><Link to={'/details/' + this.props.id}>{this.props.id}</Link></td>
        <td>{this.props.status}</td>
        <td>{this.props.transtype}</td>
        <td>{durationApproximation(this.props.queueDuration)}</td>
        <td>{this.props.created}</td>
        <td>{this.props.processDuration}</td>
      </tr>
    )
  }
}

export default Status
