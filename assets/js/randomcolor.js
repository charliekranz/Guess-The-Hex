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
    var sColor = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00',
    '#00FFFF', '#FF00FF', '#999999', '#008000', 'FFFFCC', '#CCCCCC',
    '#00CCFF', '#CCCC66', '#993300', '#FFCC99', '#CCCCFF', '#9966CC'];

	// Shuffle the colors
	shuffle(sColor);

	// Grab the first one
	return sColor[0];

};

// Set the background-color of the #colors element to a random color
var app = document.querySelector('#sColor');
app.style.backgroundColor = randomColor();


// Add values to the other buttons //

for(var i=0 ; i<squares.length ; i++){
    // Add colours to squares
    squares[i].style.backgroundColor = colours[i];
 
    // Add click listeners to squares
    // Setup mouseover listener
    squares[i].addEventListener("click", function(){
    // Grab colour of picked square
    var clickedColour = this.style.backgroundColor;
        // Compare colour to winningColour
        if(clickedColour === colourPicked){
 
        } else{
            this.style.backgroundColor = "#232323";
        }
         
    });
}

// Populates one button with winning color //

var colourPicked = colours[3];
var winningColour = document.querySelector("#winningColour");
 
winningColour.textContent = colourPicked;