import React, { Component } from 'react';
import { Link } from 'react-router';
import Time from 'react-time';
import { observer } from 'mobx-react';

@observer
export default class Tournaments extends Component {

  render() {
    const tournaments = this.props.tournamentStore.tournaments;
    return (
      <div>
        <h1 className="center-align">Tournaments</h1>
        <div className="row">
          {tournaments.map((tournament) => {
            return <div className="col s12 m6 l4" key={tournament.id}>
              <div className="card">
                <div className="card-content">
                  <div className="card-title">{tournament.name}</div>
                  <div><span className="bold">Organizer</span> : {tournament.organizer}</div>
                  <div><span className="bold">Director</span> : {tournament.director}</div>
                  <div><span className="bold">Start date</span> : <Time value={tournament.date} format="DD.MM.YYYY"/></div>
                  <div><span className="bold">Start time</span> : <Time value={tournament.date} format="HH:mm"/></div>
                </div>
                <div className="card-action">
                  <Link to={`/tournaments/${tournament.id}`}>Open</Link>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}
