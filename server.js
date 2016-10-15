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

const mockParticipant = {
	id: 1,
	tournament: 2,
	user: '100002875441040'
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
		participant.user = mockUser;
		tournament.participants.push(participant);
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
