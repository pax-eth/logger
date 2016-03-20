var App = function() {
	
	var blessed = require('blessed'),
	crypto = require('crypto'),
	program = blessed.program(),
	cli = require('commander'),
	upgrade = require('./upgrade.js'),
	VERSION = require('./package.json').version,
	themes = "";


var dashboard

var headers = {
	'Journal': 'Keep a record of your thoughts and ideas',
	'Lister': 'Create to-do lists and set priorities',
	'Calendar': 'Make appointments and keep track of deadlines',
	'Logger': 'Record your progress',
	'Settings': 'Change settings.'
};


};

App.init();