import React, { Component } from 'react';

import UserStore from '../stores/UserStore';
import App from './App';

const userStore = new UserStore();

export default class AppWrapper extends Component {
  render() {
    return (
      <App userStore={userStore} children={this.props.children} />
    )
  }
}
