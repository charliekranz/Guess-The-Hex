/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

/**
 * Pick a random color for a list
 * @return {String} The color
 */
var randomColor = function () {

	// The available colors
	var sColor = ['blue', 'red', 'yellow', 'orange', 'green', 'rebeccapurple'];

	// Shuffle the colors
	shuffle(sColor);

	// Grab the first one
	return sColor[0];

};

// Set the background-color of the #colors element to a random color
var app = document.querySelector('#sColor');
app.style.backgroundColor = randomColor();