/*

Chapter 2 - Program Structure
http://eloquentjavascript.net/02_program_structure.html

*/



// Control Flow
// http://eloquentjavascript.net/02_program_structure.html#h_rDxYNPd65Z


/*
var theNumber = Number(prompt("Pick a number", ""));
alert("Your number is the square root of " + theNumber * theNumber + ".");
*/

// Conditional Execution
// http://eloquentjavascript.net/02_program_structure.html#h_wpz5oi2dy7

/*
var theNumber = Number(prompt("Pick a number", ""));
*/

/*
if (!isNaN(theNumber))
	alert("Your number is the square root of " + theNumber * theNumber + ".");
else
	alert("Hey.  Why didn't you give me a number?");
*/

/*
var num = Number(prompt("pick a number", "0"));

if(num <10)
	alert("Small");
else if(num < 100)
	alert("Medium");
else
	alert("Large");
*/

// While and Do Loops
// http://eloquentjavascript.net/02_program_structure.html#h_FaGGgUI+MM

/*
var number = 0;
while (number <= 12) {
	console.log(number);
	number = number + 2;
}

console.log("=|=|=|=|=|=")

var result = 1;
var counter = 0;
while (counter < 10) {
	result = result * 2;
	counter = counter +1;
}
console.log(result);
*/

/*
do {
	var name = prompt("Who are you?");
} while (!name);
console.log(name);
*/

/*
for(var number = 0; number <= 12; number = number +2) {
	console.log(number);
}
*/

/*
for(var current = 100; ; current++) {
	if(current % 7 == 0) { // If the remainder of 'current' divided by 7 is 0
		break;
	}
}
console.log(current);
*/

// EXERCISES

// Looping a Triangle
// http://eloquentjavascript.net/02_program_structure.html#h_umoXp9u0e7

/*
var count = 0;
var block = '';
while(count <= 6) {

	if(count <= block.length) {
		block = block + "#";
		console.log(block);
	}
	count++;
}
*/

// FizzBuzz
// http://eloquentjavascript.net/02_program_structure.html#h_rebKE3gdjV

/*
var count = 0;
while(count <= 99) {
	count++;
	if(count % 3 == 0 && count % 5 !== 0) {
		console.log('Fizz');
	}
	else if(count % 5 == 0 && count % 3 !== 0) {
		console.log('Buzz');
	}
	else if(count % 3 == 0 && count % 5 == 0) {
		console.log('FizzBuzz');
	}
	else {
		console.log(count);
	}
}
*/

/*
// Chessboard
// http://eloquentjavascript.net/02_program_structure.html#h_5Hz2kiaaXp

var gridSize = Number(prompt("Specify the width and height as a whole number.")) - 1;

for(var number = 0; number <= gridSize; number++) {
	if(number % 2 == 0) {
		var row = '';
		while(row.length <= gridSize) {
			row = row + ' #';
		}
		console.log(row);
	}
	else {
		var row = '';
		while(row.length <= gridSize) {
			row = row + '# ';
		}
		console.log(row);
	}
}
*/


























/*

Chapter 3 - Functions
http://eloquentjavascript.net/03_functions.html

*/



// Defining a Function
// http://eloquentjavascript.net/03_functions.html#h_tqLFw/oazr

/*
var square = function(x) {
	return x * x;
};

var makeNoise = function() {
	console.log("Pling!");
}

var power = function(base, exponent) {
	var result = 1;
	for (var count=0; count < exponent; count++) {
		result *= base;
	}
	return result;
}

*/



// Parameters and Scopes

/*
var x = "outside";

var f1 = function() {
	var x = "inside f1";
};

f1();
console.log(x);

var f2 = function() {
	x = "inside f2";
};

f2();
console.log(x);
*/



// Nested Scopes

/*
var landscape = function() {
	var result = "";
	var flat = function(size) {
		for(var count = 0; count < size; count++) {
			result += "_";
		};
	};
	var mountain = function (size) {
		result += "/";
		for(var count = 0; count < size; count++) {
			result += "'";
		};
		result += "\\";
	};

	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(1);
	return result;
};
*/


// The Call Stack

/*
function greet(who) {
	console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
*/
/*
function chicken() {
	return egg();
}
function egg() {
	return chicken();
}
*/



// Optional Arguments

/*
function power(base, exponent) {
	if(exponent == undefined) {
		exponent = 2;
	}
	var result = 1;
	for(var count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
}
*/

// Closure

/*
function wrapValue(n) {
	var localVariable = n;
	return function() {
		return localVariable;
	}
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log("wrap1(): " + wrap1());
console.log("wrap2(): " + wrap2());
*/

/*
function multiplier(factor) {
	return function(number) {
		return number * factor;
	}
}

var twice = multiplier(2);
console.log(twice(5));
*/

// Recursion

/*
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	}
	else {
		return base * power(base, exponent - 1);
	}
}

console.log(power(2, 3));
*/

/*
function findSolution(target) {
	function find(start, history) {
		if (start == target) {
			return history;
		}
		else if (start > target) {
			return null;
		}
		else {
			return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
		}
	}
	return find(1, "1");
}

console.log(findSolution(24));
*/

// Exercises

//// Minimum

/*
function min(a, b) {
	if (a == b)
		return "The two numbers are equal to one another."
	if (a < b)
		return a;
	if (a > b)
		return b;
	else
		return "Something's not right."
}
*/

//// Recursion

/*
function isEven(n) {
	if (n == 0) {
		return true;
	}
	if (n < 0) {
		n = n * -1;
		n = n - 2;
		if (n == 0) {
			return true;
		}
		if (n < 0) {
			return false;
		}
		return isEven(n);
	}
	n = n - 2;
	return isEven(n);
}
*/

//// Bean Counting

/*
function countBs(s) {

	var letterCount = 0;

	for(var n = 0; n < s.length; n++) {
		if (s.charAt(n) == 'B' || s.charAt(n) == 'b') {
			letterCount++;
		}
	}
	console.log(letterCount);
}

function countChar(string, letter) {

	var letterCount = 0;

	for(var n = 0; n < string.length; n++) {
		if (string.charAt(n) == letter) {
			letterCount++;
		}
	}
	console.log(letterCount);
}
*/

















/*

Chapter 4 - Data Structures: Objects and Arrays
http://eloquentjavascript.net/04_data.html

*/


// Computing Correlation

/*
function phi(table) {
	return console.log(
		(table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt(
			(table[2] + table[3]) *
			(table[0] + table[1]) *
			(table[1] + table[3]) *
			(table[0] + table[2])
		)
	);
}
*/

// The Arguments Object

/*
function addEntry(squirrel) {
	var entry = {events: [], squirrel: squirrel};
	for(var i = 1; i < arguments.length; i++) {
		entry.events.push(arguments[i])
	}
	journal.push(entry);
}
*/



// Exercises



//// The Sum of a Range
//// http://eloquentjavascript.net/04_data.html#h_8ZspxiCEC/


/*
function range(start, end, step) {
	var array = [];

	if(start < end) {
		if(!(arguments[2])) {
			step = 1;
		}

		for(var i = start; i < end + 1; i = i + step) {
			array.push(i);
		}
	}
	else {
		if(!(arguments[2])) {
			step = -1;
		}

		for(var i = start; i > end - 1; i = i + step) {
			array.push(i);
		}
	}

	return array;
}

function sum(array) {
	var sum = 0;
	for(var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum;
}
*/



//// Reversing an Array
//// http://eloquentjavascript.net/04_data.html#h_6xTmjj4Rf5

/*

function reverseArray(array) {
	var newArray = [];
	for(var i = array.length; i > 0; i--) {
		newArray.push(i);
	}
	return newArray;
}

function reverseArrayInPlace(array) {
	var newArray = [];
	for(var i = array.length; i > 0; i--) {
		newArray.push(i);
	}
	array = newArray;
	return array;
}
*/


//// A List
//// http://eloquentjavascript.net/04_data.html#h_nSTX34CM1M

/*
function prependArray(element, list) {

	list.push(list[list.length -1]);

	for(i = list.length - 2; i > 0; i--) {
		list[i] = list[i - 1];
	};

	list[0] = element;

	return list;

};



function arrayToList(array) {


	var list = {};
	var holdList = {};

	list.value = array[array.length - 1];
	list.rest = null;

	for(var i = array.length - 2; i >= 0; i--) {

		holdList = {
			value: list.value,
			rest: list.rest
		};

		list.rest = holdList;
		list.value = array[i];
	};

	return list;
};

function listToArray(list) {

	var array = [];


	for(var node = list; node; node = node.rest) {
		array.push(node.value);
	};


	return array;
};

function prependList(element, list) {

	var newList = {
		value: element,
		rest: list
	};

	return newList;
};

function nth(position, list) {

	var i = 0;

	for(var node = list; node; node = node.rest) {
		if(i == position) {
			return node.value;
		} else {
			i++;
		}
	};

}
*/


//// Deep Comparison
//// http://eloquentjavascript.net/04_data.html#h_IJBU+aXOIC

/*
function deepEqual(value1, value2) {
	if(typeof value1 == typeof value2 && typeof value1 == 'object' && value1 != null && value2 != null) {

		// Check to see if value1 and value2 are equal to one another
		if(value1 == value2) {
			return true;
		}

		// Check to see if value1 and value2 have the same number of properties
		var lengthOfValue1 = 0;
		var lengthOfValue2 = 0;

		for(node in value1) {
			lengthOfValue1++;
		}
		for(node in value2) {
			lengthOfValue2++;
		}
		if(lengthOfValue1 != lengthOfValue2) {
			return false;
		}

		// Check to see if the values of value1 and value2 are equal to one another
		for(node in value1) {
			if(node in value2 == false) {
				return false;
			}
			if(deepEqual(value1[node], value2[node]) == false) {
				return false;
			}

		}

		return true;

	} else if(typeof value1 == typeof value2) {

		if(value1 == value2) {
			return true;
		}

	}

	return false;

}
*/




















/*

Chapter 5 - Higher-Order Functions
http://eloquentjavascript.net/05_higher_order.html

*/

/*
function forEach(array, action) {
	for(var i = 0; i < array.length; i++) {
		action(array[i]);
	}
}
*/

/*
function born(person) {
	return person.born > 1900 && person.born < 1925;
}

function name(person) {
	return person.name;
}

function filter(array, test1) {
	var passed = [];
	for(var i = 0; i < array.length; i++) {
		if(test1(array[i])) {
			passed.push(array[i]);
		}
	}
	return passed;
}

function map(array, transform) {
	var mapped = [];
	for(var i = 0; i < array.length; i++) {
		mapped.push(transform(array[i]));
	}
	return mapped;
}
*/



/*

//// Ancestry File

var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";

var ancestry = JSON.parse(ANCESTRY_FILE);




//// Flattening
//// http://eloquentjavascript.net/05_higher_order.html#h_aIOczlLyX1



function flatten(array) {

	return array.reduce(function(a, b) {
		console.log("a = " + a);
		console.log("b = " + b);
		return a.concat(b);
	});

}




//// Mother-Child Age Difference
//// http://eloquentjavascript.net/05_higher_order.html#h_I9XoVSLsTV

function average(array) {
	function plus(a, b) {
		return a + b;
	}
	return array.reduce(plus) / array.length;
}



var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
});





function mothersAge(person) {

	if(typeof byName[person.mother] == "undefined") {
		//return console.log("mother not in logs");
		return null;
	} else {
		//return mothersAges.push(person.born - byName[person.mother].born);
		return person.born - byName[person.mother].born;
	}
}



function averageMothersAge(family) {
	var mothersAges = [];

	family.forEach(function(person) {
		mothersAges.push(mothersAge(person));
	});


	mothersAges = mothersAges.filter(function(age) {
		return age != null;
	});


	console.log(average(mothersAges));
}




// Historical Life Expectancy
// http://eloquentjavascript.net/05_higher_order.html#h_FkNn96IrQe

function averageAgeByCentury(array) {

	var holdArray = {};

	array.forEach(function(person) {

		if(holdArray[person.deathCentury]) {
			holdArray[person.deathCentury].push(person.ageAtDeath);
		} else {
			holdArray[person.deathCentury] = [person.ageAtDeath];
		}
	});

	for(item in holdArray) {
		holdArray[item] = average(holdArray[item]);
	}

	return holdArray;

}


function ageAtDeath(person) {
	return person.died - person.born;
}

function deathCentury(array) {

	var holdArray = [];

	array.forEach(function(person) {
		person.deathCentury = Math.ceil(person.died / 100);
		person.ageAtDeath = person.died - person.born;
		holdArray.push(person);

	});

	return holdArray;
}

*/







































/*

Chapter 6 - The Secret Life of Objects
http://eloquentjavascript.net/06_object.html

*/

// Methods


/*
function speak(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'");
}

var whiteRabbit = {
	type: "white",
	speak: speak
};

var fatRabbit = {
	type: "fat",
	speak: speak
};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");





// Prototypes

var protoRabbit = {
	speak: function(line) {
		console.log("The " + this.type + " rabbit says '" + line + "'");
	}
}

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");


// Constructors

function Rabbit(type) {
	this.type = type;
	this.speak = speak;
}

var blackRabbit = new Rabbit ("black");

// Prototype-less Objects

var map = Object.create(null);
map.pizza = 0.069;

var map2 = Object.create(map);

map2.water = 123;




// Laying Out a Table


function rowHeights(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}

function colWidths(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}

function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);

	function drawLine(blocks, lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join(" ");
	}

	function drawRow(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});
		return blocks[0].map(function(_, lineNo) {
			return drawLine(blocks, lineNo);
		}).join("\n");
	}

	return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
	var result = {};
	for(var i = 0; i < times; i++) {
		result += string;
	}
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	var result = [];
	for(var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};






var rows = [];
for(var i = 0; i < 5; i++) {
	var row = [];
	for(var j = 0; j < 5; j++) {
		if((j + i) % 2 == 0) {
			row.push(new TextCell("##"));
		} else {
			row.push(new TextCell("   "));
		}
	}
	rows.push(row);
}

console.log(drawTable(rows));


var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function UnderlinedCell(inner) {
	this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};



function dataTable(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(name) {
		return keys.map(function(name) {
			return new TextCell(String(row[name]));
		});
	});
	return [headers].concat(body);
}




// Getters and Setters

var pile = {
	elements: ["eggshell", "orange peel", "worm"],
	get height() {
		return this.elements.length;
	}
	set height(value) {
		console.log("Ignoring attempt to set height to", value);
	}
};
*/



/*

//// A Vectory Type
//// http://eloquentjavascript.net/06_object.html#h_zO8FRQBMAy


function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(vector) {
	return new Vector((this.x + vector.x), (this.y + vector.y));
};
Vector.prototype.minus = function(vector) {
	return new Vector((this.x - vector.x), (this.y - vector.y));
};
Object.defineProperty(Vector.prototype, "length", {
	get: function() {
		return Math.sqrt(((this.x * this.x) + (this.y * this.y)));
	}
});



//// Sequence Interface
//// http://eloquentjavascript.net/06_object.html#h_a0w19Kx5iq



function RangeSeq(start, end) {
	this.start = start;
	this.end = end;
}

RangeSeq.prototype.runThrough = function(func) {
	for(i = sequence.start; i <= sequence.end; i++) {
		func(i);
	}
};

function logFive(seq) {
	for(i = seq.start; i < seq.start + 5; i++) {
		console.log(i);
	}
}

*/
















/*

Chapter 7 - Project: Electronic Life
http://eloquentjavascript.net/07_elife.html

*/


/*
var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];




function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
};





function Grid(width, height) {
	this.space = new Array(width * height);
	this.width = width;
	this.height = height;
}
Grid.prototype.isInside = function(vector) {
	return vector.x >= 0 && vector.x < this.width
		&& vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector) {
	return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value) {
	this.space[vector.x + this.width * vector.y] = value;
};
Grid.prototype.forEach = function(f, context) {
	for(var y = 0; y < this.height; y++) {
		for(var x = 0; x < this.width; x++) {
			var value = this.space[x + y * this.width];
			if(value != " ") {//if(value != null) {
				f.call(context, value, new Vector(x, y));
			}
		}
	}
};





function World(map, legend) {
	var grid = new Grid(map[0].length, map.length);
	this.grid = grid;
	this.legend = legend;

	map.forEach(function(line, y) {
		for(var x = 0; x < line.length; x++) {
			grid.set(new Vector(x, y),
					 elementFromChar(legend, line[x]));
		}
	});
}
World.prototype.toString = function() {
	var output = "";
	for(var y = 0; y < this.grid.height; y++) {
		for(var x = 0; x < this.grid.width; x++) {
			var element = this.grid.get(new Vector(x, y));
			output += charFromElement(element);
		}
		output += "\n";
	}
	return output;
};
World.prototype.turn = function() {
	var acted = [];
	this.grid.forEach(function(critter, vector) {
		if(critter.act && acted.indexOf(critter) == -1) {
			acted.push(critter);
			this.letAct(critter, vector);
		}
	}, this);
};
World.prototype.letAct = function(critter, vector) {
	var action = critter.act(new View(this, vector));
	if(action && action.type == "move") {
		var dest = this.checkDestination(action, vector);
		if(dest && this.grid.get(dest) == " ") {
			this.grid.set(vector, " ");
			this.grid.set(dest, critter);
		}
	}
};
World.prototype.checkDestination = function(action, vector) {
	if(directions.hasOwnProperty(action.direction)) {
		var dest = vector.plus(directions[action.direction]);
		if(this.grid.isInside(dest)) {
			return dest;
		}
	}
};










function View(world, vector) {
	this.world = world;
	this.vector = vector;
}
View.prototype.look = function(dir) {
	var target = this.vector.plus(directions[dir]);
	if(this.world.grid.isInside(target)) {
		return charFromElement(this.world.grid.get(target));
	} else {
		return "#";
	}
};
View.prototype.findAll = function(ch) {
	var found = [];
	for(var dir in directions) {
		if(this.look(dir) == ch) {
			found.push(dir);
		}
	}
	return found;
};
View.prototype.find = function(ch) {
	var found = this.findAll(ch);
	if(found.length == 0) {
		return " ";
	}
	return randomElement(found);
}










var directions = {
	"n": new Vector(0, -1),
	"ne": new Vector(1, -1),
	"e": new Vector(1, 0),
	"se": new Vector(1, 1),
	"s": new Vector(0, 1),
	"sw": new Vector(-1, 1),
	"w": new Vector(-1, 0),
	"nw": new Vector(-1, -1)
};


function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

var directionNames = "n ne e se s sw w nw".split(" ");







function BouncingCritter() {
	this.direction = randomElement(directionNames);
}
BouncingCritter.prototype.act = function(view) {
	if(view.look(this.direction) != " ") {
		this.direction = view.find(" ") || "s";
	}
	return {
		type: "move",
		direction: this.direction
	};
};

function Wall() {}

function WallFollower() {
	this.dir = "s";
}
WallFollower.prototype.act = function(view) {
	var start = this.dir;
	if(view.look(dirPlus(this.dir, -3)) != " ") {
		start = this.dir = dirPlus(this.dir, -2);
	}
	while(view.look(this.dir) != " ") {
		this.dir = dirPlus(this.dir, 1);
		if(this.dir == start) {
			break;
		}
	}
	return {type: "move", direction: this.dir};
};








function elementFromChar(legend, ch) {
	if(ch == " ") {
		return " ";//return null;
	}
	var element = new legend[ch]();
	element.originChar = ch;
	return element;
}

function charFromElement(element) {
	if(element == " ") {
		return " ";//return null;
	} else {
		return element.originChar;
	}
}










function dirPlus(dir, n) {
	var index = directionNames.indexOf(dir);
	return directionNames[(index + n + 8) % 8];
}









































function LifelikeWorld(map, legend) {
	World.call(this, map, legend);
}
LifelikeWorld.prototype = Object.create(World.prototype);
LifelikeWorld.prototype.letAct = function(critter, vector) {
	var action = critter.act(new View(this, vector));
	var handled = action
				  && action.type in actionTypes
				  && actionTypes[action.type].call(this, critter, vector, action);
	if(!handled) {
		critter.energy -= 0.2;
		if(critter.energy <= 0) {
			this.grid.set(vector, " ");
		}
	}
};


var actionTypes = Object.create(null);

actionTypes.grow = function(critter) {
	critter.energy += 0.5;
	return true;
};
actionTypes.move = function(critter, vector, action) {
	var dest = this.checkDestination(action, vector);
	if (dest == " " || critter.energy <=1 || this.grid.get(dest) != " ") {
		return false;
	}
	critter.energy -= 1;
	this.grid.set(vector, " ");
	this.grid.set(dest, critter);
	return true;
};
actionTypes.eat = function(critter, vector, action) {
	var dest = this.checkDestination(action, vector);
	var atDest = dest != " " && this.grid.get(dest);
	if(!atDest || atDest.energy == null) {
		return false;
	}
	critter.energy += atDest.energy;
	this.grid.set(dest, " ");
	return true;
};
actionTypes.reproduce = function(critter, vector, action) {
	var baby = elementFromChar(this.legend, critter.originChar);
	var dest = this.checkDestination(action, vector);
	if(dest == " " || critter.energy <= 2 * baby.energy || this.grid.get(dest) != " ") {
		return false;
	}
	critter.energy -= 2 * baby.energy;
	this.grid.set(dest, baby);
	return true;
};











function Plant() {
	this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function(view) {
	if(this.energy > 15) {
		var space = view.find(" ");
		if(space) {
			return {type: "reproduce", direction: space};
		}
	}
	if(this.energy < 20) {
		return {type: "grow"};
	}
};

function PlantEater() {
	this.energy = 20;
}
PlantEater.prototype.act = function(view) {
	var space = view.find(" ");
	if(this.energy > 60 && space) {
		return {type: "reproduce", direction: space};
	}
	var plant = view.find("*");
	if(plant) {
		return {type: "eat", direction: plant};
	}
	if(space) {
		return {type: "move", direction: space};
	}
};

function SmartPlantEater() {
	this.energy = 20;
}
SmartPlantEater.prototype.act = function(view) {
	var space = view.find(" ");
  	if(this.energy > 60 && space) {
    	return {type:"reproduce", direction: space};
    }
    var plant = view.findAll("*");
    if(plant.length >= 2) {
    	return {type:"eat", direction: plant[0]};
    }
    if(space) {
      return {type:"move", direction: space};
    }
};

function Tiger() {
	this.energy = 60;
}
Tiger.prototype.act = function(view) {
	var space = view.find(" ");
  	if(this.energy > 120 && space) {
    	return {type:"reproduce", direction: space};
    }
    var plantEater = view.find("O");
    if(plantEater) {
    	return {type:"eat", direction: plantEater};
    }
    if(space) {
      return {type:"move", direction: space};
    }
};










var world = new World(plan, {"#": Wall, "o": BouncingCritter});

var valley = new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": PlantEater,
   "*": Plant}
);

*/















/*

Chapter 8 - Bugs and Error Handling
http://eloquentjavascript.net/08_error.html

*/

/*
"use strict";
*/

/*
function canYouSpotTheProblem() {
	//"use strict";
	for(var counter = 0; counter < 10; counter++) {
		console.log("Happy happy");
	}
}
*/

/*
function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
};



function testVector() {
	var p1 = new Vector(10, 20);
	var p2 = new Vector(-10, 5);
	var p3 = p1.plus(p2);

	if(p1.x !== 10) return "fail: x property";
	if(p1.y !== 20) return "fail: y property";
	if(p2.x !== -10) return "fail: negative x property";
	if(p3.x !== 0) return "fail: x from plus";
	if(p3.y !== 25) return "fail: y from plus";
	return "everything ok";
}
*/

/*
function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
  //throw "Invalid direction: " + result;
}

function look() {
  if (promptDirection("Which way?") == "L")
    return "a house";
  else
    return "two angry bears";
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
*/





// Exercises



//// Retry
//// http://eloquentjavascript.net/08_error.html#h_n1zYouiAfX


/*
function MultiplicatorUnitFailure(message) {
	this.message = message;
  	this.stack = new Error().stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype)

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("You lost the coin toss.");
}

function reliableMultiply(a, b) {
  for(;;) {
  	try {
  		return primitiveMultiply(a, b);
  	} catch(e) {
    	if(e instanceof MultiplicatorUnitFailure) {
    		console.log(e.message, e.stack);
    	} else {
    		throw e;
        }
  	}
  }
}

console.log(reliableMultiply(8, 8));
*/


//// The Locked Box
//// http://eloquentjavascript.net/08_error.html#h_iGlwnUbkRs

/*
var box = {
	locked: true,
	unlock: function() { this.locked = false; },
	lock: function() { this.locked = true; },
	_contents: [],
	get contents() {
		if(this.locked) {
			throw new Error("Locked!");
		}
		return this._contents;
	}
};

function doThis(something) {
	box.contents.push(something);
}

function withBoxUnlocked(f) {
	var wasLocked = box.locked;

	if(box.locked) {
		box.unlock();
	}

	try {
		f();
	} catch(e) {
			throw new Error(e);
	} finally {
		if(wasLocked == false) {
			return box;
		}
		box.lock();
		return box;
	}

}
*/


























/*

Chapter 9 - Regular Expressions
http://eloquentjavascript.net/09_regexp.html

*/
/*

"use strict";

var re1 = new RegExp("abc");
var re2 = /abc/;

var numbers1 = /[0-9]/;
var numbers2 = /0123456789/;

var letters = /[a-z]/;
var notLetters = /[^a-z]/;

var eighteenPlus = /eighteen\+/;

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
var betterDateTime = /\d{2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

var notBinary = /[^0-1]/;

var repeat = /\w+/;

var neighbor = /neighbou?r/;

var cartoonCrying = /boo+(hoo+)+/i; //i makes the regex case insensitve

var match = /\d+/.exec("one two 100 200 300 4");

var quotedText = /'(\W*)'/;





function findDate(string) {
	var dateTime = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
	var match = dateTime.exec(string);
	return new Date(Number(match[3]),
					Number(match[2]) -1,
					Number(match[1])
		);
}

var animalCount1 = /^\d+ (pig|cow|chicken)s?$/;
var animalCount2 = /\b\d+ (pig|cow|chicken)s?\b/;

*/






















/*

Chapter 13 - The Document Object Model
http://eloquentjavascript.net/13_dom.html

*/




  var wheel = document.querySelector("img");
  var wave = document.querySelectorAll("img")[1];

  var angle = 0, lastTime = null, time = Date.now();
  function animate(time) {

    if(lastTime != null)
      angle += (time - lastTime) * 0.005;
    lastTime = time;
    wheel.style.top = 200 + (Math.sin(angle) * 100) + "px";
    wheel.style.left = 200 + (Math.cos(angle) * 100) + "px";
    //wave.style.top = parseInt(wheel.style.top) - (Math.sin(-angle * 10) * 100) + "px";
    //wave.style.left = parseInt(wheel.style.left) - (Math.cos(-angle * 10) * 100) + "px";
    wave.style.top = 200 - (Math.sin(angle) * 100) + "px";
    wave.style.left = 200 - (Math.cos(angle) * 100) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

var test = document.getElementsByClassName("test");
var column = document.getElementById("column");

//column.setAttribute("height", window.innerHeight + "px");

function printPattern(func, pattern) {

	var counter = 0;

	while(func.offsetWidth < (window.innerWidth * 0.9)) {

	func.appendChild(document.createTextNode(pattern));
	counter += 1;
	}
}



printPattern(test[0], "|_||_|__");
printPattern(test[0], "_|__|_||");

while(column.offsetHeight < window.innerHeight) {
	column.appendChild(document.createElement("div").setAttribute("class", "test"));
}


//while(column.offsetHeight < window.innerHeight * 0.9) {
	//column.appendChild(document.createElement("div").setAtt)
//}



//|_||_|__|_||_|__|_||_|__|_||_|__|_|
//_|__|_||_|__|_||_|__|_||_|__|_||_|_
//|_||_|__|_||_|__|_||_|__|_||_|__|_|

//for(var i = 0; i < (window.innerWidth * 0.9); i++) {
//	test.appendChild(document.createTextNode("X"));
//}
