import React, { Component } from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';

import './Tournament.css';

@inject('tournamentStore')
@observer
export default class Tournament extends Component {
  render() {
    const user = this.props.userStore;
    const tournament = this.props.tournamentStore.findById(this.props.params.tournamentId);
    const participants = [];
    // const participants = this.props.tournamentsStore.getParticipants(tournament.id);
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
        {participants.map(participant => (
          <div className="row">
            <div className="col s4 center-align participant">
              <img className="picture" src={`http://graph.facebook.com/${user.uid}/picture?height=100`} alt=""/>
              <div className="info">
                <div className="bold">Rihards Fridrihsons</div>
                <img className="club-picture" src="http://www.bridgegeek.com/LBF/RSBK%20logo.png"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
