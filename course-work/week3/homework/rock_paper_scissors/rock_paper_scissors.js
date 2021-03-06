var prompt = require('prompt');

// initializes game; prompts user for rock, paper, or scissors input
function init () {
	prompt.get('choice', function (err, result) {
		var choice = result.choice;

		// error handling - will run prompt again if user does not enter rock, paper, or scissors
		if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') return init();

		// triggers game
		startGame(choice)
	});
}

// turns on prompt; runs init
prompt.start();
init();

function startGame(userChoice) {
	var cpuChoice = generateCPUChoice();
	var winner = compare(userChoice, cpuChoice);
	console.log(winner);
}

// YOUR CODE BELOW!

// 1. The function generateCPUChoice should randomly generate and return one of the following values: 'rock', 'paper', or 'scissors'
// Start by creating an array containing: ['rock', 'paper', 'scissors']
// Then, randomly generate a whole number between 0 and 2
// Use this randomly generated number to pull a value from the array (eg myArray[ranomNum])
// Ensure you return this value!
function generateCPUChoice (cpuChoice) {
	var choices = ['rock', 'paper', 'scissors'];
	var cpuNumber = Math.floor(Math.random()*3);
	var compChoice = choices[cpuNumber];
	return compChoice;
}

var cpuChoice = generateCPUChoice(cpuChoice);

// 2. The function compare takes two strings (userChoice and cpuChoice) that represent the user's and cpu's respective choices: 'rock', 'paper', or 'scissors'
// This function should compare the two choices, and return a winner
// For example, if userChoice === 'rock' and cpuChoice === 'scissors', then 'user' should be returned
// Hint: use if/else/ele if logic to compare the values and return a winner
function compare(userChoice, cpuChoice) {
	var draw = 'you chose ' + userChoice + ', and the computer chose ' + cpuChoice +', it is a draw!';
	var user = 'you chose ' + userChoice + ', and the computer chose ' + cpuChoice +', you win!';
	var computer = 'you chose ' + userChoice + ', and the computer chose ' + cpuChoice +', computer wins!';
	if (userChoice === 'rock' && cpuChoice === 'scissors'){
		return user;
	} else if (userChoice === 'paper' && cpuChoice === 'rock') {
		return user;
	} else if (userChoice === 'scissors' && cpuChoice === 'paper') {
		return user;
	} else if (userChoice === cpuChoice ) {
		return draw;
	} else {
		return computer;
	}
};





