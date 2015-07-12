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



































