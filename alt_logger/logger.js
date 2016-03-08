

/*-----WINDOWS------*/

var blessed = require('blessed');

var window = blessed.screen({
	smartCSR: true,
	dockBorders: true,
	autoPadding: true
});

window.title = 'Logger';




/*-----BOXES------*/

var body = blessed.box({
	
	left: 'center',
	top: 'center',
	width: '100%',
	height: '110%',
	style: {
		bg: '#171717'
	}
});

var options = blessed.box({
	left: 'center',
	top: 18,
	width: '20%',
	height: 7,
	border: {type: 'line'
	},
	style: {
		fg: '#4169e1',
		bg: '#171717',
	
	border: {
      fg: '#4169e1',
      bg: '#171717'
    	},
	}
});







var titles = blessed.box({

	left: 'center',
	top: 5,
	width: 50,
	height: 11,
	content: '{center}{bold}LOGGER{/bold}{/center}\n\n{center}Made by Physes.\n\n\
Based on the \"Getting Things Done\"\nmethodology by David Allen.\n\nReleased under MIT Licence.{/center}',
	tags: true,
	border: {
		type: 'line',
		bold: true
	},
	style: {
		fg: '#4169e1',
		bg: '#171717',

		border: {
      fg: '#4169e1',
      bg: '#171717'
    },
	}

});










/*------BUTTONS------*/

var exit = blessed.button({
  parent: body,
  mouse: true,
  keys: true,
  shrink: true,
  left: '92%',
  top: 3,
  shrink: true,
  name: 'exit',
  content: 'Exit[x]',
  style: {
  	fg: '#4169e1',
    bg: '#171717',
    bold: true,
  border: {
  	fg: '#4169e1',
    bg: '#171717'
  },
  hover: {
  	fg: 'white'
  		}
   }
  
  });


var customs = blessed.button({
	parent: options,
	mouse: true,
	keys: true,
	shrink: true,
	left: 'center',
	top: 1,
	name: 'customs',
	content: 'Customs[c]',
	style: {
  	fg: '#4169e1',
    bg: '#171717',
    bold: true,
  border: {
  	fg: '#4169e1',
    bg: '#171717'
  },
  hover: {
  	fg: 'white'
  		}
  	}
});

var enter = blessed.button({
	parent: options,
	mouse: true,
	keys: true,
	shrink: true,
	left: 'center',
	top: 3,
	name: 'enter',
	content: 'Enter[e]',
	style: {
  	fg: '#4169e1',
    bg: '#171717',
    bold: true,
  border: {
  	fg: '#4169e1',
    bg: '#171717'
  },
  hover: {
  	fg: 'white'
  		}
  	}
});


/*------EVENTS------*/


/*------FUNCTIONS------*/





exit.on('press', function() {
	process.exit(0);
});

//customs
customs.on('press', function() {
	key_gen();
});

window.key(['c'], function(ch, key) {
	key_gen();
});

//exit
window.key(['escape', 'x'], function(ch, key) {
  return process.exit(0);
});

//enter
window.key(['e'], function(ch,key) {
	login();
});

enter.on('press', function(){
	login();
});



/*------KEY-GEN FUNCTION------*/



function key_gen() {
	window.remove(titles);
	window.remove(options);
	window.title = "Customs";

	var key_gen_content = blessed.box({
	left: 'center',
	top: 5,
	width: 130,
	height: 30,
	tags: true,
	border: {type: 'line'
	},
	style: {
		fg: '#4169e1',
		bg: '#171717',
	
	border: {
      fg: '#4169e1',
      bg: '#171717'
    },
	}
		
});



var next = blessed.button({
  parent: key_gen_content,
  mouse: true,
  keys: true,
  shrink: true,
  left: 'center',
  top: 32,
  shrink: true,
  name: 'next',
  content: 'Next[n]',
  style: {
  	fg: '#4169e1',
    bg: '#171717',
    bold: true,
  border: {
  	fg: '#4169e1',
    bg: '#171717'
  },
  hover: {
  	fg: 'white'
  		}
   }
  
  });


var back = blessed.button({
  mouse: true,
  keys: true,
  shrink: true,
  left: 'center',
  top: '90%',
  shrink: true,
  name: 'back',
  content: 'Back[b]',
  style: {
  	fg: '#4169e1',
    bg: '#171717',
    bold: true,
  border: {
  	fg: '#4169e1',
    bg: '#171717'
  },
  hover: {
  	fg: 'white'
  		}
   }
  
  });

var tut = ["{center}{bold}\n\nLogger helps you keep encrypted journals, \
logs, lists and calendars stored on your machine\n or on the IPFS (Interplanetary File System), \
so you can access them from anywhere.\n\n",
"You can use Logger to keep track of your thoughts, \
log your personal data and plan ahead.{/bold}{/center}\n\n\n\n\n",
"\t\t\tFollow 5 steps to getting things done:\n\n",
"\t\t\tCAPTURE: Collect everything that has your attention, big or small.\n\n",
"\t\t\tCLARIFY: Process what you have collected. Decide what\'s actionable and what\'s next.\n\n",
"\t\t\tORGANIZE: Put everything where it belongs. Use the lister and calendar to schedule tasks and events.\n\n",
"\t\t\tREFLECT: Review your data, calendar and priorities frequently. Use the logger to keep track.\n\n",
"\t\t\tENGAGE: Take action with confidence.\n\n"];


	
var tut_key = "";

i = 0;

function tut_display(i){
	
		if(i < tut.length) {
		tut_key += tut[i];
		key_gen_content.setContent(tut_key);
		window.render();
	}
};

		


	window.key(['n'], function(ch, key) {
		tut_display(i);
		i += 1;
	});



	window.key(['b'], function(ch, key) {
		window.remove(key_gen_content);
		window.remove(back);
		//Reset tutorials and tutorial counter
		tut_key = "";
		i = 0;
		//Re-append the original window
		window.append(body);
		window.append(titles);
		window.append(options);
		window.title = "Logger";
		window.render();
	});

	back.on('press', function(){
		key_gen_content.setContent('');
		window.remove(key_gen_content);
		window.remove(back);
		//Reset tutorials and tutorial counter
		tut_key.length = 0;
		i = 0;
		//Re-append the original window
		window.append(body);
		window.append(titles);
		window.append(options);
		window.title = "Logger";
		window.render();
	});


	window.append(key_gen_content);
	window.append(next);
	window.append(back);
	window.render();

};


function login() {
	window.remove(titles);
	window.remove(options);
	window.title = "Enter";

};


/*------EXECUTABLES------*/


window.append(body);
window.append(titles);
window.append(options);
window.render();
