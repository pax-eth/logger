var numbers = [[1,2,3], [4,5,6], [7,8,9]];

function appender(elements){
	this.elements = elements;
	el = this.elements;


	for(x = 0; x < el.length; x++ ) {
		for(y = 0; y < el[x].length; y++ ) {
			console.log(el[x][y] + "\t");
		}
		console.log("\n");
	}
};

appender(numbers);
