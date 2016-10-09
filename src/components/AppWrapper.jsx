import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import UserStore from '../stores/UserStore';
import TournamentStore from '../stores/TournamentStore';
import App from './App';

const userStore = new UserStore();
const tournamentStore = new TournamentStore();

export default class AppWrapper extends Component {
  render() {
    return (
      <Provider userStore={userStore} tournamentStore={tournamentStore}>
        <App userStore={userStore} tournamentStore={tournamentStore} children={this.props.children} />
      </Provider>
    )
  }
}
