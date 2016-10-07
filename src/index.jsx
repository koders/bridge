import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import UserStore from './stores/UserStore';
import App from './components/App';
import Tournaments from './components/Tournaments/Tournaments.jsx';
import Error from './components/Error/Error.jsx';

const userStore = new UserStore();

render(
    <Router history={browserHistory}>
      <Route path="/" component={() => <App userStore={userStore}/>}>
        <IndexRedirect to="/tournaments" />
        <Route path="tournaments" component={Tournaments}/>
        <Route path="*" component={Error}/>
      </Route>
    </Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;

    render(
        <Router history={browserHistory}>
          <Route path="/" component={() => <App userStore={userStore}/>}>
            <IndexRedirect to="/tournaments" />
            <Route path="tournaments" component={Tournaments}/>
            <Route path="*" component={Error}/>
          </Route>
        </Router>,
      document.getElementById('root')
    );
  });
}
