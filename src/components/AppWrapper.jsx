import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import UserStore from '../stores/UserStore';
import TournamentStore from '../stores/TournamentStore';
import App from './App';

export default class AppWrapper extends Component {
  render() {
    return (
      <Provider tournamentStore={TournamentStore} iUserStore={UserStore}>
        <App children={this.props.children} />
      </Provider>
    )
  }
}
