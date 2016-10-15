import React, { PropTypes } from 'react'
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    participant: {
      display: 'flex',
      borderRadius: '2px',
      padding: '5px',
    },
    participant1: {
      justifyContent: 'flex-end'
    },
    imgPicture: {
      height: '100px',
      width: '100px',
      objectFit: 'cover'
    },
    info: {
      paddingLeft: '10px',
      paddingRight: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    },
    info2: {
      alignItems: 'flex-start'
    },
    imgClubPicture: {
      height: '79px',
      width: '79px',
      objectFit: 'scale-down'
    },
    hr: {
      width: '100%',
      border: '0',
      height: '1px',
      background: '#333',
      backgroundImage: 'linear-gradient(to right, #fff, #ccc, #fff)'
    },
    row: {
      marginBottom: '8px'
    }
  },
})

const Participant = React.createClass({
  render () {
    const { participant } = this.props;
    const { user1, user2 } = participant;
    return (
      <div>
        <div className="text-center bold">{this.props.index}</div>
        <div className="row" style={styles.row}>
          <div style={Object.assign({}, styles.participant, styles.participant1)} className="col s6 center-align participant">
            <div style={styles.info} className="info">
              <div>{`${user1.name} ${user1.surname}`}</div>
              <img style={styles.imgClubPicture} className="club-picture"
              src="https://s-media-cache-ak0.pinimg.com/originals/53/4f/68/534f68d2eaedeb77858d52d6c3acb622.jpg"/>
            </div>
            <img style={styles.imgPicture} className="picture"
            src={`http://graph.facebook.com/${participant.user1.id}/picture?height=100`} alt=""/>
          </div>
          <div style={styles.participant} className="col s6 center-align participant">
            <img style={styles.imgPicture} className="picture" src={`http://graph.facebook.com/${participant.user2.id}/picture?height=100`} alt=""/>
            <div style={Object.assign({}, styles.info, styles.info2)} className="info">
              <div>{`${user2.name} ${user2.surname}`}</div>
              <img style={styles.imgClubPicture} className="club-picture" src="http://www.bridgegeek.com/LBF/RSBK%20logo.png"/>
            </div>
          </div>
        </div>
        <hr style={styles.hr} />
      </div>
    )
  }
})

export default Participant;
