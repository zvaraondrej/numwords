import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="indigo darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <Link className="brand-logo text-logo" to="/">Numwords App</Link>
            <ul id="nav-mobile" className="right">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
