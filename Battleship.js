
//create an array of 5 elements and assign them each a letter (type string) value
var myArray = ['a','b','c','d','e'];
//var myArray = new Array(5); //don't forget the ';' at the end!

// this function generates a random number between a specified minimum and maximum number
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

//For our game, we'll pick a number from 0 to 4. This is where our "battleship" is.
var correctAnswer = getRandomNumber(0,4);

//Let's assign this 'correctAnswer' random number to our array in the same 'index' (place holder) as the value of this number, like so:
myArray[correctAnswer] = correctAnswer;

//Remember, the array has a length of 5 but it starts with index 0; therefore, the 5th (last) element in our array is at index 4. **You will typically reduce by '-1' to compensate for the difference between array.length and array.index**

//Let's print our array so we can see what the random number is and it was placed
alert(myArray.join(', '));
// NOTE: .join() is a method that concatinates all elements in an array. It takes an 'delimiter' value - in this case a comma and space - to place between them.

//START THE GAME:
var userInput = parseInt(prompt("Let's play Battleship! To fire at a battleship, please enter another number from 0 to 4:"), 10);

//The game loop: keep asking the player to guess until they guess the right answer
while (userInput !== correctAnswer) {
  var userInput = parseInt(prompt("You missed! To fire again, please enter another number from 0 to 4:"), 10);
}

//The code below will only run when the game loop ends:
alert("You win! Battleship sunk!")
