//Task-01. Write a function that displays current date & time in your browser.

document.write("<h4>Task-01</h4>");


function tellTime() {
  var currentDate = new Date();
  document.write(currentDate);
}

tellTime();

//Task-02. Write a function that takes first & last name and then it greets the user using his full name.

document.write("<h4>Task-02</h4>");


function greetUser(firstName, lastName) {

  var firstName = prompt("Please Enter Your First Name.");
  var lastName = prompt("Please Enter Your Last Name.")

  var capFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  var capLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  var fullName = capFirstName + " " + capLastName;
  document.write("Hello, " + fullName + "!" + "<br>" + "Welcome to My Website!")
}
greetUser();

//Task-03. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

document.write("<h4>Task-03</h4>");


function sum(a, b) {
  var a = +prompt("Enter the First Number to Add:");
  var b = +prompt("Enter the Second Number to Add:");
  var result = a + b;
  document.write("The Sum of " + a + " and " + b + " is: " + result )

}
sum();

//Task-04. Calculator:
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

document.write("<h4>Task-04</h4>");


var userInput1 = +prompt("Please Enter The First Number");
var userInput2 = +prompt("Please Enter The Second Number");
var operator = prompt("Please Select An Operator Given Below To Perform Desire Calculation \n + , - , * , /")

function calculator(num1, num2, operator) {
  var result;
  if (operator === "+") {
    result = userInput1 + userInput2;
  } 

  else if (operator === "-") {
    result = userInput1 - userInput2;
  }

  else if (operator === "*") {
    result = userInput1 * userInput2;
  }

  else if (operator === "/") {
    result = userInput1 / userInput1;
  }
  
  else{
    result = "Invalid Operator";
  }

  return result;
}

var finalResult = calculator(userInput1, userInput2, operator);
document.write("The result of " + userInput1 + operator + userInput2 + " is: " + finalResult)


//Task-05. Write a function that squares its argument.

document.write("<h4>Task-05</h4>");


function square(a) {
  return a * a
}
 var results = square(8);
 document.write("The Square Value of 8 is: " + results);


//Task-06. Write a function that computes factorial of a number.

document.write("<h4>Task-06</h4>");


function factorial(number) {
  if (number === 0) {
    return 1;
  }
  else {
    return number * factorial(number - 1);
  }
}

document.write("The factorial of 9 is: " + factorial(9));


//Task-07. Write a function that take start and end number as inputs & display counting in your browser.

document.write("<h4>Task-07</h4>");



function counting(startNumber, endNumber) {
  var startNumber = +prompt("Write a number from where you want to start counting.");
  var endNumber = +prompt("Write a number from where you want to end counting.");
  document.write("The desire counting from " + startNumber + " to " + endNumber + " is: <br><br>");

  for (var i = startNumber; i <= endNumber; i++) {
    document.write(i + "<br>");
  }
}

counting();

//Task-08. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2
//Take base and perpendicular as inputs.
//Outer function : calculateHypotenuse()
//Inner function: calculateSquare()

document.write("<h4>Task-08</h4>");


function calculateHypotenuse() {
  
  function calculateSquare(side) {
    return side * side
  }
  
  var base = parseInt(prompt("Please Enter the base of Right-angled Triangle."));
  var perpendicular = parseInt(prompt("Please Enter the perpendicular of Right-angled Triangle."));

  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);

  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);

  return hypotenuse;
}

var finalResult = calculateHypotenuse();
document.write("The Hypotenuse of given base and perpendicular is "  + finalResult.toFixed(2));


//Task-09. Write a function that calculates the area of a rectangle.
// A = width * height Pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables

document.write("<h4>Task-09</h4>");

//i. Arguments as value
function areaOfRectangle(width, height) {
  return width * height;
}

var area = areaOfRectangle(8, 4);

document.write("<h4>The area of triangle by passing Arguments as value is: </h4>")
document.write(area);


//ii. Arguments as variables
var width = 8;
var height = 4;

var area = areaOfRectangle(width, height);

document.write("<h4>The area of triangle by passing Arguments as variable is: </h4>")
document.write(area);


//Task-10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

document.write("<h4>Task-10</h4>");

var userInput4 = prompt("Enter a word to check that whether it's a Palindrome or not? \n\n *A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.*");

var capitallizeInput = userInput4.charAt(0).toUpperCase() + userInput4.slice(1);

function palindrome(str) {
  var reverseStr = str.split("").reverse().join("");
  return str.toLowerCase() === reverseStr.toLowerCase();
}

var result = palindrome(capitallizeInput);

if (result) {
  document.write(capitallizeInput + " is a Palindrome");
}
else {
  document.write(capitallizeInput + " is not a Palindrome." + "<br><br>" + "Remember: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.")
}

// Task-11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

document.write("<h4>Task-11</h4>");


// (a) Taking input from the user.

var str = prompt("Please enter any sentence.")

function capitalization(str) {
  var words = str.split(" ");
  
  for (var i = 0; i < words.length; i++) {
    var upperCase = words[i].charAt(0).toUpperCase();
    words[i] = upperCase + words[i].slice(1);
  }
  return words.join(" ");
}

document.write("The Original String: " + str + "<br>");
document.write("String After Capitalization: " + capitalization(str) + "<br><br>");

//  (b)  calling function for the given example.
var givenSentence = "the quick brown fox"

document.write("The Original String: " + givenSentence + "<br>");
document.write("String After Capitalization: " + capitalization(givenSentence));

//Task-12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//EXAMPLE STRING : 'Web Development Tutorial'
//EXPECTED OUTPUT : 'Development'

document.write("<h4>Task-12</h4>");


// (a) Taking input from the user.
var string = prompt("Enter a Sentence.");

function findLongestWord(string) {
  var stringSplit = string.split(" ");
  var maxLength = 0;
  var longestWord = "";

  for(var i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length > maxLength) {
      maxLength = stringSplit[i].length;
      longestWord = stringSplit[i];
    }
  }
  return longestWord;
}

document.write("The Original String: " + string + "<br>");
document.write("Longest Word in the String: " + findLongestWord(string) + "<br><br>");

// //  (b)  calling function for the given example.

var givenStatement = "Web Development Tutorial";
document.write("The Original String: " + givenStatement + "<br>");
document.write("Longest Word in the String: " + findLongestWord(givenStatement));

//Task-13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
//Sample arguments : 'JSResourceS.com', 'o'

document.write("<h4>Task-13</h4>");

function numberOfOccurences(str, letter) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === letter.toLowerCase()){
    count++;
    }
    
  }

  return count;
}

// // (a): Calling function by given example inthe Question:
var myStatement = "JSResourceS.com";
var letterToCount = "o";
var resultant = numberOfOccurences(myStatement, letterToCount)
document.write("The Original String was: " + myStatement + "<br>" + "The Letter to Count inthe String is: " + letterToCount + "<br><br>" + "Number of Occurences of the Given Letter is: " + resultant + "<br><br><br>");


// // (b): Calling function by taking Userinput:
var myStatement1 = prompt("Enter a Word or Sentence");
var letterToCount1 = prompt("Enter the letter that you want to count in the given Word/Sentence.");
var resultant1 = numberOfOccurences(myStatement1, letterToCount1)
document.write("The Original String was: " + myStatement1 + "<br>" + "The Letter to Count inthe String is: " + letterToCount1 + "<br><br>" + "Number of Occurences of the Given Letter is: " + resultant1);


//Task-14. The Geometrizer
//Create 2 functions that calculate properties of a circle, using the definitions here.
//Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr, Area of circle = πr2

document.write("<h4>Task-14</h4>");


function calcCircumference(radius) {
  var circumferenceOfTheCircle = 2 * Math.PI * radius;
  document.write("The Circumference of the Circle is: " + circumferenceOfTheCircle.toFixed(2) + "<br>"); 
}

function calcArea(radius) {
  var areaOfTheCircle = Math.PI * Math.pow(radius, 2);
  document.write("The Area Of The Circle is: " + areaOfTheCircle.toFixed(2));
}


calcCircumference(5);
calcArea(5);