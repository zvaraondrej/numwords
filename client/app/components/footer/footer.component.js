import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer indigo darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text text-logo">Numwords App</h5>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
                <li><Link className="grey-text text-lighten-3" to="/about">About</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
              © 2017 Ondrej Zvara
            </div>
        </div>
      </footer>
    );
  }
}
