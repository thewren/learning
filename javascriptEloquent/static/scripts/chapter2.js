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







