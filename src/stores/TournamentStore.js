import { observable, computed } from 'mobx';

export default class TournamentStore {
	@observable tournaments = [
    {
      id: 1,
      name: 'Sample tournament',
      type: 'pair',
      image: 'http://lorempixel.com/100/190/nature/6',
      organizer: 'SBK',
      director: 'John Doe',
      date: new Date('2016-11-09T10:00:00'),
      registrationDate: '',
      venue: '',
      fee: '',
      information: '',
      participants:[

      ],
      pageVisits: 0,
    },
    {
      id: 2,
      name: 'Sample tournament2',
      type: 'team',
      image: 'http://lorempixel.com/100/190/nature/6',
      organizer: 'SBK',
      director: 'John Doe',
      date: new Date('2016-11-09T10:00:00'),
      registrationDate: '',
      venue: '',
      fee: '',
      information: '',
      participants:[
				['100002875441041', '100009134306342'],
      ],
      pageVisits: 0,
    }
  ];

	findById(id){
		return this.tournaments.filter(tournament => tournament.id == id);
	}

	getParticipants(tournamentId){
		let participants = [];
		return this.tournaments.filter(tournament => tournament.id == id);
	}

}
