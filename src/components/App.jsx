import React, { cloneElement, Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { browserHistory, Route, Router, Link } from 'react-router';
import ProfileButton from './ProfileButton/ProfileButton.jsx';
// Materialize
var $ = window.jQuery = require('jquery');
require("materialize-loader");
require("materialize-css");
// Daemonite materialize
import '../../lib/daemonite/base.js';
import '../../lib/daemonite/project.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = 'app';
    return (
      <div>
        <nav className="main-navigation blue-grey darken-4">
          <div className="nav-wrapper">
            <a id="logo-container" href="#" className="brand-logo"><img src="../images/logo_web_big.jpg"/></a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/tournaments">Tournaments</Link>
              </li>
              <li>
                <ProfileButton userStore={this.props.userStore}/>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main-content-wrapper">
          <div className="main-content">
            {this.props.children && cloneElement(this.props.children, {
              userStore: this.props.userStore,
              key: location.pathname
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default App;
