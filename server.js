import express from 'express';
import path from 'path';

import { renderToString } from 'react-dom/server'

const app = express();
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))
app.use('/bower_components', express.static(path.join(__dirname, './bower_components')))
app.use('/lib', express.static(path.join(__dirname, './lib')))
app.use('/src/styles.css', express.static(path.join(__dirname, './src/styles.css')))
app.use('/images', express.static(path.join(__dirname, './src/images')))

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

const mockTournaments = [
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
		participants:[],
		pageVisits: 0,
	}
];

const mockUser = {
	id: '100002875441040',
	name: 'Rihards',
	surname: 'Fridrihsons'
};

const mockUser2 = {
	id: '100009134306342',
	name: 'Leo',
	surname: 'Vegners'
};

const mockUser3 = {
	id: '100003637018761',
	name: 'Gatis',
	surname: 'Priedītis'
};

const mockUser4 = {
	id: '100000167787159',
	name: 'Diāna',
	surname: 'Kampara'
};

const mockParticipant = {
	id: 1,
	tournament: 2,
	type: 'pair',
	user1: '100002875441040',
	user2: '100009134306342'
}

const mockParticipant2 = {
	id: 2,
	tournament: 2,
	type: 'pair',
	user1: '100003637018761',
	user2: '100000167787159'
}

app.get('/api', function(req, res) {
	res.send('ok');
});

app.get('/api/tournaments', function(req, res) {
	res.send(mockTournaments);
});

app.get('/api/tournaments/:id', (req, res) => {
	if(req.params.id == 2){
		const tournament = {...mockTournaments[1]};
		tournament.participants = [];

		const participant = {...mockParticipant};
		const participant2 = {...mockParticipant2};
		participant.user1 = mockUser;
		participant.user2 = mockUser2;
		participant2.user1 = mockUser3;
		participant2.user2 = mockUser4;
		tournament.participants.push(participant);
		tournament.participants.push(participant2);
		res.send(tournament);
	} else {
		res.status(204).send();
	}
})

app.get('/api/users/:id', (req, res) => {
	if(req.params.id == 100002875441040){
		res.send(mockUser);
	} else {
		res.status(204).send();
	}
})

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
