import { observable, computed, asMap } from 'mobx';
import axios from 'axios';

class TournamentStore {
	@observable tournaments = new Map();

	constructor(){
		this.readTournaments();
	}

	/**
 	* get a list of tournaments
 */
	readTournaments(){
		const self = this;
		axios.get('/api/tournaments')
			.then(function (response) {
				self.tournaments = new observable(asMap(response.data.map(i => [i.id, i])));
				console.log(self.tournaments);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	readTournament(id){
		const self = this;
		axios.get(`/api/tournaments/${id}`)
			.then(function (response) {
				self.tournaments.set(id, response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	getTournament(id){
		return this.tournaments.get(id);
	}

	readUser(id){
		const self = this;
		axios.get(`/api/users/${id}`)
			.then(function (response) {
				self.users.set(id, response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	getUser(id){
		if(this.users.has(id)){
			return this.users.get(id);
		} else {
			this.readUser(id);
		}
	}

	getUser(participantId){
		return
	}

}

export default new TournamentStore();
