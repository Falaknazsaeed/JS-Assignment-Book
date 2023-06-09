//Assignment9-10"//


//Task-01. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

document.write("<h4>Task-01</h4>");
document.write("Displayed on alert box.")

var cityName = prompt("Enter Your City.");
 if (cityName === "karachi"){
    alert("Welcome to city of lights");
 }
 
//Task-02. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

document.write("<h4>Task-02</h4>");
document.write("Displayed on alert box");

var gender = prompt("Your Gender Please....");
if (gender === "male") {
   alert("Good Morning Sir.")
}

if (gender === "female") {
   alert("Good Morning Ma'am.")
}

//Task-03Write a program to take input color of road traffic signal from the user & show the message according to this table

document.write("<h4>Task-03</h4>");
document.write("Displayed on alert box");

var trafficColor = prompt("Please enter a traffic color. \n1 Red or \n2 Yellow or \n3 Green");
if (trafficColor === "red") {
   alert("Must Stop!")
}
if (trafficColor === "yellow") {
   alert("Ready to Move!")
}
if (trafficColor === "green") {
   alert("Move Now!")
}

//Task-04. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,show the message “Please refill the fuel in your car”

document.write("<h4>Task-04</h4>");
document.write("Displayed on alert box");

var fuel = prompt("How many litres of fuel is remaining in your car?");
if (fuel < 0.25) {
   alert("Please refill the fuel in your car");
}
if (fuel > 0.25) {
   alert("Great!!!");
}

//Task-05. Run this script, & check whether alert message would be displayed or not. Record the outputs.

document.write("<h4>Task-05</h4>");
document.write("Output has been recoreded and mentioned on app.js file.");

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//**************OUTPUT ==== alert is running on browser*********************** 



// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//**************OUTPUT ==== alert is not running on browser***********************



// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//**************OUTPUT ==== alert(condition 4 is true) is running on browser*********************** 




// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//**************OUTPUT ==== alert is running on browser*********************** 



// if (true){
//    alert("True");
//    }
//    if (false){
//    alert("False");
//    }
//**************OUTPUT ==== alert(true) is running on browser*********************** 



// if("car" < "cat"){
//    alert("car is smaller than cat");
// }
//**************OUTPUT ==== alert is running on browser*********************** 


//Task-06. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. a)Take percentage & compute grade as per following table: b)Show the total marks, marks obtained, percentage, grade & remarks like:

document.write("<h4>Task-06</h4>");

var userInput1 = +prompt("Please enter your obtained marks in first subject out of 100");
var userInput2 = +prompt("Please enter your obtained marks in second subject out of 100");
var userInput3 = +prompt("Please enter your obtained marks in third subject out of 100");
var marksObtained = userInput1 + userInput2 + userInput3;
var totalMarks = 300;
var percentage = ((marksObtained / totalMarks) * 100);

if (percentage >= "80") {
   var grade = "A-one";
   var remarks = "Excellent"
   document.write("Total Marks: " + totalMarks + "<br>" + "Obtained Marks: " + marksObtained + "<br>" + "Percentage: " + percentage + "%" + "<br>" + "Grade: " + grade + "<br>" + "Remarks: " + remarks)
}
else if (percentage >= "70") {
   var grade1 = "A";
   var remarks1 = "Good"
   document.write("Total Marks: " + totalMarks + "<br>" + "Obtained Marks: " + marksObtained + "<br>" + "Percentage: " + percentage + "%" + "<br>" + "Grade: " + grade1 + "<br>" + "Remarks: " + remarks1) 
}
else if (percentage >= "60") {
   var grade2 = "B";
   var remarks2 = "You Need To improve"
   document.write("Total Marks: " + totalMarks + "<br>" + "Obtained Marks: " + marksObtained + "<br>" + "Percentage: " + percentage + "%" + "<br>" + "Grade: " + grade2 + "<br>" + "Remarks: " + remarks2)  
}
else {
    percentage < "60"
   var grade3 = "Fail";
   var remarks3 = "Sorry"
   document.write("Total Marks: " + totalMarks + "<br>" + "Obtained Marks: " + marksObtained + "<br>" + "Percentage: " + percentage + "%" + "<br>" + "Grade: " + grade3 + "<br>" + "Remarks: " + remarks3)
}

//Task-07. Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

document.write("<h4>Task-07</h4>");
document.write("Displayed on alert box");

var secretNumber = prompt("Guess the Sceret Number from 1 -10");
var num = 7;
if ( secretNumber == "7") {
   alert("Bingo! Correct answer");
}

if (secretNumber == "8") {
   alert("Close enough to the correct answer.");
}

if (secretNumber < "7") {
   alert("Sorry! Wrong Guess");
}

if (secretNumber >= "9") {
   alert("Sorry! Wrong Guess");
}

//Task-08. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

document.write("<h4>Task-08</h4>");
document.write("Displayed on alert box");


var givenNumber = prompt("Please Enter Any Number to Check Whether it is Divisible by 3?");

 if (givenNumber%3 === 0) {
   alert("This number can be divisible by 3")
 }
 
 if (givenNumber%3 !== 0) {
   alert("This number can not be divisible by 3")
 }

//Task-09. Write a program that checks whether the given input is an even number or an odd number.

document.write("<h4>Task-09</h4>");
document.write("Displayed on alert box");

var userInput = prompt("Enter a Number to check whether it's Even or Odd?");

if (userInput%2 === 0) {
   alert(userInput + " is an Even Number");
}

if (userInput%2 !== 0) {
   alert(userInput + " is an Odd Number")
}

//Task-10. Write a program that takes temperature as input and shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”

document.write("<h4>Task-10</h4>");
document.write("Displayed on alert box");

var temperature = prompt("Kindly Enter Current Temperature");
if (temperature > 40) {
   alert("It is too hot outside.")
}

else if (temperature > 30) {
   alert("The Weather today is Normal.")
} 

else if (temperature > 20) {
   alert("Today’s Weather is cool.")
}
else {temperature > 10
   alert("OMG! Today’s weather is so Cool.")
}

//Task-11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.

document.write("<h4>Task-11</h4>");
document.write("Displayed on alert box");

var firstNumber = +prompt("Enter a Number");
var secondNumber = +prompt("Enter Another Number");
var operation = prompt("Choose an Operation that you want to perform on Given Numbers. \n 1:  + \n 2:  - \n 3:  * \n 4:  / \n 5:  %");

if (operation == "+") {
   var newNum = firstNumber + secondNumber;
   alert("The sum of " + firstNumber + " and "+ secondNumber + " is: " +  "\n" +newNum);
}

else if (operation == "-") {
   var newNum = firstNumber - secondNumber;
   alert("The subtraction of " + firstNumber + " and "+ secondNumber + " is: " +  "\n" +newNum);
}

else if (operation == "*") {
   var newNum = firstNumber * secondNumber;
   alert("The multiplication of " + firstNumber + " and "+ secondNumber + " is: " +  "\n" +newNum);
}

else if (operation == "/") {
   var newNum = firstNumber / secondNumber;
   alert("The division of " + firstNumber + " and "+ secondNumber + " is: " +  "\n" +newNum);
}
else {operation == "%"
   var newNum = firstNumber % secondNumber;
   alert("The modulus of " + firstNumber + " and "+ secondNumber + " is: " +  "\n" +newNum);
}