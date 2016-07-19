
/*
Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

attach a click handler to roll dice HTML element 'roll dice'  HINT: onclick event
- generate random number 1
- generate random number 2

2) Follow the steps below to write your code.
* The following should be contained inside a function, rollDice
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the class for the first die element, and store to a variable firstDie (hint: recall string concatenation)
* combine 'dice-' and random1 to form the class for the second die element, and store to a variable secondDie (hint: recall string concatenation)
* apply firstDie and secondDie to their respective HTML elements using the .className attribute (hint: use document.getElementById)
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint: document.getElementById) */

document.getElementById("roll-dice").onclick = function rolldice() {
	var random1 = Math.floor((Math.random() * 6) + 1);
	var random2 = Math.floor((Math.random() * 6) + 1);
	var firstDie = /*'dice-'+random1*/ document.getElementById('first-die');
	var secondDie = /*'dice-'+random2*/document.getElementById('second-die');
	firstDie.className = 'dice dice-' + random1
	secondDie.className = 'dice dice-' + random2

	// document.getElementById("first-die").className = firstDie;
	// document.getElementById("second-die").className = secondDie;


	// if you delete everything to the right of the comments on lines 24 and 25, then delete 26 & 27 and take out comments on 29 & 30 it works, but it's a different way
}


// 3) Attach an onclick event handler to the the element 'roll-dice' - when this button is clicked, it should trigger the above rollDice function


