import React, { Component } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

import './Tournament.css';

@observer(['tournamentStore', 'iUserStore'])
export default class Tournament extends Component {

  componentWillMount() {
    this.props.tournamentStore.readTournament(this.props.params.tournamentId);
  }

  render() {
    const user = this.props.iUserStore;
    const tournamentId = this.props.params.tournamentId;
    const tournament = this.props.tournamentStore.getTournament(tournamentId);
    console.log(tournament);
    const participants = tournament && tournament.participants.map(participant => (
      <div className="row" key={participant.id}>
        <div className="col s4 center-align participant">
          <img className="picture" src={`http://graph.facebook.com/${participant.user.id}/picture?height=100`} alt=""/>
          <div className="info">
            <div className="bold"></div>
            <img className="club-picture" src="http://www.bridgegeek.com/LBF/RSBK%20logo.png"/>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="tournament">
        <nav>
          <div className="nav-wrapper">
            <div className="col s12">
              <a href="/tournaments" className="breadcrumb">Tournaments</a>
              <a className="breadcrumb">{this.props.params.tournamentId}</a>
            </div>
          </div>
        </nav>
        <h3 className="center-align">Participants</h3>
        { participants }
      </div>
    )
  }
}
