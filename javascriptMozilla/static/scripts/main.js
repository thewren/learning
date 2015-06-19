/*

Explore jQuery and AngularJS
No, stick with barenones javascript!  eloquentjavascript.net and You Don't Know JS on GitHub

*/


// Create a variable called navcol and set it's value equal to the first element in the document with the class '.navcol'
var navcol = document.querySelector('.navcol');
var maincontent = document.querySelector('.maincontent');



// Listen for a mouseclick on navcol, then execute a function
navcol.onclick = function() {

	var navcolWidth = navcol.getAttribute('width');

	if(navcolWidth === '100px') {
		navcol.setAttribute('width', '1000px');
		maincontent.setAttribute('width', '100px');
	} else {
		navcol.setAttribute('width', '100px');
		maincontent.setAttribute('width', '1000px');
	}
}



// This is a test
var myImage = document.querySelector('img');

myImage.onclick = function() {
	
	var mySrc = myImage.getAttribute('src');

	if(mySrc === 'static/images/firefox-icon.png') {
		myImage.setAttribute('src', 'static/images/waves_400x400.gif');
	} else {
		myImage.setAttribute('src', 'static/images/firefox-icon.png');
	}
}