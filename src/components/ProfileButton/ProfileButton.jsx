import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './ProfileButton.css';

@observer
class ProfileButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.userStore || {};
    return(
      <div className="dropdown dropdown-inline profile-dropdown">
        <a className="dropdown-toggle-btn profile-button waves-effect" data-toggle="dropdown">
          <img src={"http://graph.facebook.com/" + user.uid + "/picture"} alt="" className="circle" />
          <div className="text">
            <div className="title">{user.name}</div>
            <div className="subtitle">{user.role}</div>
          </div>
          <i className="fa fa-caret-down"/>
        </a>
        <ul className="dropdown-menu nav">
          <li>
            <a>
              <i className="fa fa-user"/>
              profile
            </a>
          </li>
          <li>
            <a href="/auth/logout">
              <i className="fa fa-power-off red-text"/>
              logout
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default ProfileButton;
