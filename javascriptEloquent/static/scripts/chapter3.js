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












