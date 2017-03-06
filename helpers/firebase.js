'use strict';
const firebase = require('firebase');

let config = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	databaseURL: process.env.databaseURL,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId
};

module.exports = firebase.initializeApp(config);