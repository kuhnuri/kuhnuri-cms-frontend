import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="row">
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
