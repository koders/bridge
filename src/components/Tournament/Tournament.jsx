import React, { Component } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import reactCSS from 'reactcss';

import Participant from './Participant';


const styles = reactCSS({
  'default': {
    collection: {
      border: 0
    }
  },
})

@observer(['tournamentStore', 'iUserStore'])
export default class Tournament extends Component {

  componentWillMount() {
    this.props.tournamentStore.readTournament(this.props.params.tournamentId);
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
        <h4 className="header center-align w300">Participants</h4>
        <div className="collection" style={styles.collection}>
          { participants }
        </div>
      </div>
    )
  }
}
