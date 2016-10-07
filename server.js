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

app.get('/api', function(req, res) {
	res.send('ok');
});

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
