import React, { Component } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import reactCSS from 'reactcss';

import Participant from './Participant';


const styles = reactCSS({
  'default': {
    collection: {
      border: 0
    },
    tabContainer: {
      marginLeft: 0
    },
    tabBody: {
      padding: '20px'
    },
    tab: {
      position: 'relative'
    }
  },
})

@observer(['tournamentStore', 'iUserStore'])
export default class Tournament extends Component {

  componentWillMount() {
    this.props.tournamentStore.readTournament(this.props.params.tournamentId);
  }

  componentDidMount() {
    $('ul.tabs').tabs();
  }

  render() {
    const user = this.props.iUserStore;
    const tournamentId = this.props.params.tournamentId;
    const tournament = this.props.tournamentStore.getTournament(tournamentId) || '';
    const participants = tournament && tournament.participants.map(
      (participant, index) => (
      <Participant key={participant.id} participant={participant} index={index + 1} />
    ));
    return (
      <div className="tournament">
        <h3 className="header center-align w300">{tournament.name}</h3>
        <div className="row content-center">
          <div className="col s12 m8 l4" style={styles.tabContainer}>

        <ul className="tabs">
          <li className="tab col s3" style={styles.tab}>
            <a href="#participants" className="blue-grey-text text-darken-4">
              Participants
              <span className="badge">
                {tournament.participants ? tournament.participants.length : 0}
              </span>
            </a>
          </li>
          <li className="tab col s3" style={styles.tab}>
            <a href="#map" className="blue-grey-text text-darken-4">
              Show in map
            </a>
          </li>
         </ul>
         </div></div>
        <div style={styles.tabBody} id="participants" className="col s12">
          <div className="collection" style={styles.collection}>
            {participants}
          </div>
        </div>
        <div style={styles.tabBody} id="map" className="col s12">...map...</div>


      </div>
    )
  }
}
