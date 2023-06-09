//Task-01. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write("<h4>Task-01</h4>");

var positiveInteger = prompt("Please Write any Positive Integer");
document.write("Entered Number: " + positiveInteger + "<br>");
document.write("Round Of value: " + Math.round(positiveInteger) + "<br>");
document.write("Floor value: " + Math.floor(positiveInteger) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveInteger) + "<br>");

//Task-2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write("<h4>Task-02</h4>");

var negativeInteger = prompt("Please Write any negative Integer");
document.write("Entered Number: " + negativeInteger + "<br>");
document.write("Round Of value: " + Math.round(negativeInteger) + "<br>");
document.write("Floor value: " + Math.floor(negativeInteger) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeInteger) + "<br>");

//Task-03. Write a program that displays the absolute value of a number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5

document.write("<h4>Task-03</h4>");

var absoluteVal = prompt("Write any Number to find out its Absolute Value.");
document.write("The absolute value of " + absoluteVal + " is " + Math.abs(absoluteVal));

//Task-04. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

document.write("<h4>Task-04</h4>");

var diceValue = Math.floor(Math.random() * 6 + 1);
document.write("Random Dice Value: " + diceValue);

//Task-5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

document.write("<h4>Task-05</h4>");

var toss = Math.floor(Math.random() * 2);
var coinValue = (toss === 0) ? "Heads" : "Tails";
document.write("Random Coin Value: " + coinValue);

//Task-06. Write a program that shows a random number between 1 and 100 in your browser.

document.write("<h4>Task-06</h4>");

var randomNumber = Math.floor(Math.random() * 100 + 1);
document.write("Random Number Between 1 and 100: " + randomNumber);

//Task-07. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

document.write("<h4>Task-07</h4>");

var userInput = prompt("Enter Your Weight in Kilograms:");
var weight = parseFloat(userInput);

if (!isNaN(weight)) {
document.write("The Weight of User is " + weight + " Kilograms")
}

else {
  document.write("Invalid User Input" + "<br>" + "Please Enter a number.")
}


//Task-08. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

document.write("<h4>Task-08</h4>");

var secretNumber = 8;
var userInput1 = prompt("Enter a Number Between 1 to 10 to Guess the Secret Number");

if (userInput === secretNumber) {
  document.write("Congratulations!!!" + "<br>" + "You Guessed the Correct Secret Number.");
}
 else {
  document.write("Try Again to Guess the Correct Secret Number!")
 }
