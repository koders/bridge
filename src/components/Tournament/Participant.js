import React, { PropTypes } from 'react'
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    participant: {
      display: 'flex',
      border: '1px solid rgba(0, 0, 0, .5)',
      borderRadius: '2px',
      padding: '5px',
      marginRight: '20px'
    },
    imgPicture: {
      height: '100px',
      width: '100px',
      objectFit: 'cover'
    },
    info: {
      paddingLeft: '10px'
    },
    imgClubPicture: {
      height: '79px',
      width: '79px',
      objectFit: 'scale-down'
    }
  },
})

const Participant = React.createClass({
  render () {
    const participant = this.props.participant;
    return (
      <div className="row">
        <div style={styles.participant} className="col s4 center-align participant">
          <img style={styles.imgPicture} className="picture" src={`http://graph.facebook.com/${participant.user.id}/picture?height=100`} alt=""/>
          <div style={styles.info} className="info">
            <div className="bold"></div>
            <img style={styles.imgClubPicture} className="club-picture" src="http://www.bridgegeek.com/LBF/RSBK%20logo.png"/>
          </div>
        </div>
      </div>
    )
  }
})

export default Participant;
