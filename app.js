

blessed = require('blessed');
crypto = require('crypto');


var window = blessed.screen({
	smartCSR: true,
	dockBorders: true,
	autoPadding: true,
});

/*Declare global variables. tut_key is a string for the tutorial process, and i is a counter.
Variables for tutorial process. */
	
	counter = 0;
	content = "";

function boxes(parent, left, top, width, height, content) {

	this.parent = parent;
	this.left = left;
	this.top = top;
	this.width = width;
	this.height = height;
	this.content = content;

	this.unit = blessed.box({
		parent: this.parent,
		left: this.left,
		top: this.top,
		width: this.width,
		height: this.height,
		content: this.content,
		tags: true,
		border: {
			type: 'line',
			bold: true
		},
		style: {
			fg: '#6d8ce8',
    		bg: '#182125',

		border: {
      		fg: '#6d8ce8',
    		bg: '#182125'
    	},
		}

	});
};

function buttons(parent, top, left, name, content) {
	this.parent = parent;
	this.top = top;
	this.left = left;
	this.name = name;
	this.content = content;
	
	this.btn = blessed.button({
		parent: this.parent,
		mouse: true,
		keys: true,
		shrink: true,
		top: this.top,
		left: this.left,
		name:  this.name,
		content: this.content,
		style: {
  		fg: '#6d8ce8',
    	bg: '#182125',
    	bold: true,
  	border: {
  		fg: '#6d8ce8',
    	bg: '#182125'
  	},
  	hover: {
  		fg: 'white'
  		}
	} 
});

};

function forms(parent, top, left, width, height, name) {
	this.parent = parent;
	this.top = top;
	this.left = left;
	this.width = width;
	this.height = height;
	this.name = name;

	this.form = blessed.form({
		parent: this.parent,
		top: this.top,
		left: this.left,
		width: this.width,
		height: this.height,
		name: this.name,
		keys: true,
	});
};

function input(parent, top, left, width, height, content) {
	this.parent = parent;
	this.left = left;
	this.top = top;
	this.width = width;
	this.height = height;
	this.content = content;

	this.input = blessed.input({
		parent: this.parent,
		top: this.top,
		left: this.left,
		width: this.width,
		height: this.height,
		content: this.content,
		tags: true,
		border: {
			type: 'line',
			bold: true
		},
		style: {
			fg: '#6d8ce8',
    		bg: '#182125',

		border: {
      		fg: '#6d8ce8',
    		bg: '#182125'
    	},
		}
	});
};

function lists(parent, left, top, width, height, items){

	this.parent = parent;
	this.left = left;
	this.top = top;
	this.width = width;
	this.height = height;
	this.items = items;

	this.list = blessed.list({
		parent: this.parent,
		left: this.left,
		top: this.top,
		width: this.width,
		height: this.height,
		items: this.items,
		intertSelected: true,
		mouse: true,
		tags: true,
		border: {
			type: 'line',
			bold: true
		},
		style: {
			fg: '#6d8ce8',
    		bg: '#182125',

		border: {
      		fg: '#6d8ce8',
    		bg: '#182125'
    	},
		}
	});
};



function textarea(parent, top, left, height, width, inputOnFocus, name){
	this.parent = parent;
	this.top = top;
	this.left = left;
	this.height = height;
	this.width = width;
	this.inputOnFocus = inputOnFocus;
	this.name = name;

	this.input = blessed.textarea({
    parent: this.parent,
    top: this.top,
    left: this.left,
    height: this.height,
    width: this.width,
    inputOnFocus: this.inputOnFocus,
    name: this.name,
    input: true,
    keys: true,
    style: {
        fg: '#6d8ce8',
    	bg: '#182125',
        focus: {
            fg: '#6d8ce8',
    		bg: '#182125'
        }
    }
});

};

/*
function theme(bg, fg) {
	elements

};
*/




function appender(elements){
	this.elements = elements;
	el = this.elements;


	for(x = 0; x < el.length; x++ ) {
		for(y = 0; y < el[x].length; y++ ) {
			window.append(el[x][y]);
		}
	}
	window.render();
};


function remover(elements){
	this.elements = elements;
	el = this.elements;

	for(x = 0; x < el.length; x++ ) {
		for(y = 0; y < el[x].length; y++ ) {
			window.remove(el[x][y]);
		}
	}
};



//Global box specifications

var body = new boxes('', 'center', 'center', '100%', '100%', '');

//Global buttons specifications

var exit = new buttons('', 0, '91%', 'exit', ' Exit[x] ');

//EXIT

window.key(['escape', 'x'], function(ch, key) {
return process.exit(0);
});

exit.btn.on('press', function() {
process.exit(0);
});


title();

function title() {


var titles = new boxes('', 'center', 5, 50, 11, "{center}{bold}LOGGER{/bold}{/center}\n\n{center}Made by Physes.\n\n\
Based on the \"Getting Things Done\"\nmethodology by David Allen.\n\nReleased under MIT Licence.{/center}");	

var customs = new buttons('', 20, 'center', 'customs', 'Customs[c]');

var enter = new buttons('', 22, 'center', 'enter', 'Enter[e]');

var title_elements = [[body.unit, titles.unit], [exit.btn, customs.btn, enter.btn]];

appender(title_elements);

//CUSTOMS


window.onceKey(['c'], function(ch, key) {
	remover(title_elements);
	start_tut();
});


// ENTER
window.onceKey(['e'], function(ch,key) {
	remover(title_elements);
	login();
});

};


function start_tut() {

	var start = new buttons(body.unit, 7, 'center', 'start',
		'Press [t] to begin tutorial.');
	var proceed = new buttons(body.unit, 10, 'center', 'proceed',
		'Press [c] to proceed directly to customs.');

	var start_elements = [[body.unit], [start.btn, proceed.btn, exit.btn]];

	appender(start_elements);
	
	window.onceKey(['t'], function(ch, key) {
		remover(start_elements);
		walkthrough();
	});
	
	start.btn.on('press', function(){
		remover(start_elements);
		walkthrough();
	});

	window.onceKey(['c'], function(ch,key) {
		remover(start_elements);
		key_gen();
	});

};


function walkthrough() {


var frame = new boxes('', 'center', 5, 130, 30, '');

var back = new buttons('', '90%', 'center', 'back', 'Back[b]');

var next = new buttons('', 5, 'center', 'next', ' Tutorial ');

frame.unit.style.border.fg = '#182125';

var tutorial_elements = [[body.unit, frame.unit], [next.btn, back.btn, exit.btn]];

	appender(tutorial_elements);
	
var tut = ["{center}{bold}\n\nLogger helps you keep encrypted journals, \
logs, lists and calendars stored on your machine\n or on the IPFS (Interplanetary File System), \
so you can access them from anywhere.\n\n",
"You can use Logger to keep track of your thoughts, \
log your personal data and plan ahead.{/bold}\n\n\n\n",
"Get things done in five steps:\n\n",
"CAPTURE: Collect everything that has your attention. Use the journal to empty your mind onto the screen.\n\n",
"CLARIFY: Process what you have collected. Decide what it means, what\'s actionable and what\'s next.\n\n",
"ORGANIZE: Put everything where it belongs. Use the lister and calendar to schedule tasks and events.\n\n",
"REFLECT: Review your data, calendar and priorities frequently. Use the logger to keep track.\n\n",
"ENGAGE: Take action with confidence.\n\n\n\n\n\n",
"{right}Press [enter] to continue.\t{/center}"];


		content += tut[0];
		frame.unit.setContent(content);
		window.render();
		counter = 1;

function tut_append() {
	
	if(counter < tut.length) {
		content += tut[counter];
		frame.unit.setContent(content);
		window.render();
		counter += 1;
	} else if (counter = tut.length) {
		tut_remove();
		remover(tutorial_elements);
		window.unkey(['enter']);
		key_gen();
	} 
};


function tut_remove() {
	content = "";
	counter = 0;
};
	
	window.key(['enter'], function(ch, key) {
		tut_append();	
	});


	window.onceKey(['b'], function(ch, key) {
		tut_remove();
		remover(tutorial_elements);
		window.unkey(['enter']);
		title();
	});
};


function key_gen() {

	var frame = new boxes('', 'center', 5, 130, 30, '');
	/*frame.unit.style.border.fg = '#182125';*/
	var back = new buttons('', '90%', 'center', 'back', 'Back[b]');

	var alias = new buttons(frame.unit, 15, 'center', 'input', 'Pick an alias: ');

	var alias_in = new textarea('', 16, 'center', 1, 30, true, 'alias_gen');

	var key_gen_content = ["{center}{bold}\n\nYour alias will be you username in Logger.{/bold}",
	"\n\n\n*Max 10 characters","{/bold}{/center}"];

	var key_gen_elements = [[body.unit, frame.unit], [exit.btn, back.btn, alias.btn, alias_in.input]];


	frame.unit.content = key_gen_content[0];

	appender(key_gen_elements);


	window.onceKey(['b'], function(ch, key) {
		remover(key_gen_elements);
		walkthrough();
	});
};





function login() {

	var enter = new boxes('', 'center', 5, 50, 11, "\n{bold}\tAlias: \n\n\tCipher Key: {/bold}\n\n\n\
\t______  ______  ______  ______  ______");	
	var customs = new buttons('', 18, 'center', 'customs',
		"To set up a new cipher key press[c] for Customs.");
	var back = new buttons('', '90%', 'center', 'back', 'Back[b]');

	var alias = new textarea(enter.unit, 7, 70, 1, 20, true, alias);

	var cipher  = new textarea(enter.unit, 9, 70, 1, 30, true, cipher);

	var login_elements = [[body.unit, enter.unit], [exit.btn, customs.btn, back.btn], [alias.input, cipher.input]];

	appender(login_elements);

	body.unit.on(['click'], function(ch, key) {

	});

	window.onceKey(['b'], function(ch, key) {
		remover(login_elements);
		title();
	});

	window.onceKey(['c'], function(ch, key) {
		remover(login_elements);
		start_tut();
	});
};

/*


login() {

};

dashboard() {

};

*/