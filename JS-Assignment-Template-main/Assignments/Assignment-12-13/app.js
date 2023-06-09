//Task-01. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

document.write("<h4>Task-01</h4>");
document.write("Displayed on alert box");

var userInput = prompt("Enter any Number or Alphabet");
var charCode = userInput.charCodeAt(0);
if (charCode >= 65 && charCode <= 90 ) {
   alert(userInput + " is a Upper Case Letter.")
}

else if (charCode >=97 && charCode <=122) {
   alert(userInput + " is a Lower Case Letter.")
}

else if (charCode >=48 && charCode <= 57) {
   alert(userInput + " is a number.")
}

else {
   alert("Wrong Input.")
}

//Task-02. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

document.write("<h4>Task-02</h4>");
document.write("Displayed on alert box");

var a = prompt("Please enter any Number");
var b = prompt("Please enter another Number");
if (a > b) {
    alert(a + " is greater than " + b);
}
else if (b > a) {
    alert(b + " is greater than " + a);
}
else if (a == b) {
    alert("The Given Two Numbers Are Equal.");
}
else {
    alert("Wrong Input");
}

//Task-3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

document.write("<h4>Task-03</h4>");
document.write("Displayed on alert box");

var userInput = prompt("Please Enter a Number of Your Choice. \n*(It can be  positive, negative or zero.)");
 if (userInput > 0) {
    alert(userInput + " is a positive number.");
 }
 else if (userInput < 0) {
    alert(userInput + " is a negative number.");
 }
 else {
    userInput = 0
    alert(userInput + " is a zero number.");
 }

//Task -04. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

document.write("<h4>Task-04</h4>");
document.write("Displayed on alert box");

var vowels = "aeiouAEIOU";
var userInput = prompt("Enter an Alphabet");
if (vowels.indexOf(userInput) !== -1){
    alert(userInput + " is a vowel.")
}
else {
    alert(userInput + " is not a vowel.")
}

//Task-05. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “ Please enter your password”
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

document.write("<h4>Task-05</h4>");
document.write("Displayed on alert box");

var correctPwd = "1234567890";
var userPwd = prompt("Please Enter Your Password.");
if (userPwd === "") {
    alert("Please enter your password.");
}
else if (userPwd === correctPwd) {
    alert("Correct!")
}
else { 
    alert("Incorrect Password. ")
}

//Task-06. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

document.write("<h4>Task-06</h4>");
document.write("Check VS Code app.js file");

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

//Task-7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

document.write("<h4>Task-07</h4>");
document.write("Displayed on alert box");

var time = parseInt(prompt("Please Enter a Time in 24 hours clock format like: 1900 = 7pm."));

if (time >= 0 && time < 1200 ) {
    alert("Good Morning.");
}

else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon.");
}

else if (time >= 1700 && time < 2100) {
    alert("Good Evening.");
}

else if (time >= 2100 && time < 2359) {
    alert("Good Night.");
}

else {
    alert("Wrong Format!!!")
}