import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';

import AppWrapper from './components/AppWrapper';
import Tournaments from './components/Tournaments/Tournaments.jsx';
import Tournament from './components/Tournament/Tournament.jsx';
import Error from './components/Error/Error.jsx';

const rerender = () => {
  render(
      <Router history={browserHistory}>
        <Route path="/" component={AppWrapper}>
          <IndexRedirect to="tournaments" />
          <Route path="tournaments">
            <IndexRoute component={Tournaments}/>
            <Route path=":tournamentId" component={Tournament}/>
          </Route>
          <Route path="*" component={Error}/>
        </Route>
      </Router>,
    document.getElementById('root')
  );
}

rerender();

if (module.hot) {
  module.hot.accept('./components/AppWrapper', () => {
    const NextApp = require('./components/AppWrapper').default;
    rerender();
  });
  module.hot.accept('./components/Tournaments/Tournaments', () => {
    const NextApp = require('./components/Tournaments/Tournaments').default;
    rerender();
  });
  module.hot.accept('./components/Tournament/Tournament', () => {
    const NextApp = require('./components/Tournament/Tournament').default;
    rerender();
  });
}
