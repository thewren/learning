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









