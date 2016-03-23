

//OBJECTS IN SCREEN FUNCTIONS WHICH TAKE A LIST OF KEY ARGUMENTS
var window_keys = {
	'c' : 'functions(ch, key) {
		remover(title_elements);
		start_tut();
	}',
	'e' : function(ch,key) {

	}
};

function key(press, args) {
	this.press = press;
	this.args = args;

	window.key([this.press], function() {
		for(i = 0; i < args.length; i ++) {
			this.args[i];
		}
	});

};


