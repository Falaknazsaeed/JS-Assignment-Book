//Assignment-#-06//

//Task-1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

document.write("<h4>Task-01</h4>");
var a = 10;
document.write("Result:" + "<br>" + "The value of a is: " + a +"<br><br>");

a = ++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

a = a++
document.write("The value of a++ is:" + a + "<br>");
document.write("Now the value of a is: " + ++a + "<br><br>");

a = --a;
document.write("The value of --a is: " + a + "<br>");
document.write("Noe the value of a is: 11" + "<br><br>");

a = a--;
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a);





//Task-2. What will be the output in variables a, b & result after execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;

document.write("<h4>Task-02</h4>");
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("The output is: " + result);





//Task-03. Write a program that takes input a name from user & greet the user.

document.write("<h4>Task-03</h4>");
var userName = prompt("Kindly Enter Your Name");
alert("Hello " + userName + " \nWelcome to my website");

document.write("Displays on alert box.");


//Task-04------//

document.write("<h4>Task-04</h4>");
document.write("Task-04 wasn't given.");





//Task-05. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

document.write("<h4>Task-05</h4>");

var userInput = prompt("Please Enter a Number to Know its Multiplication table:")
document.write("Table of " + userInput + "<br><br>");

var result = userInput * 1;
document.write(userInput + " x 1 = " + result + "<br>");
var result = userInput * 2;
document.write(userInput + " x 2 = " + result + "<br>");
var result = userInput * 3;
document.write(userInput + " x 3 = " + result + "<br>");
var result = userInput * 4;
document.write(userInput + " x 4 = " + result + "<br>");
var result = userInput * 5;
document.write(userInput + " x 5 = " + result + "<br>");
var result = userInput * 6;
document.write(userInput + " x 6 = " + result + "<br>");
var result = userInput * 7;
document.write(userInput + " x 7 = " + result + "<br>");
var result = userInput * 8;
document.write(userInput + " x 8 = " + result + "<br>");
var result = userInput * 9;
document.write(userInput + " x 9 = " + result + "<br>");
var result = userInput * 10;
document.write(userInput + " x 10 = " + result);






//Task-06. Take
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

document.write("<h4>Task-06</h4>");

var subject1 = prompt("Enter Your First Subject Name");
var subject2 = prompt("Enter Your Second Subject Name");
var subject3 = prompt("Enter Your Third Subject Name");
var eachMarks = 100;
var totalMarks = eachMarks * 3;
var obtMarks1 = +prompt("Enter Marks Obtained in First Subject out of 100");
var obtMarks2 = +prompt("Enter Marks Obtained in Second Subject out of 100")
var obtMarks3 = +prompt("Enter Marks Obtained in Third Subject out of 100");
var obtainedMarks = obtMarks1 + obtMarks2 + obtMarks3;
var percentage1 = (obtMarks1 / eachMarks) * 100;
var percentage2 = (obtMarks2 / eachMarks) * 100;
var percentage3 = (obtMarks3 / eachMarks) * 100;
var averagePercentage = (obtainedMarks / totalMarks) * 100

document.write("<table border='1'>")
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>")
document.write("<tr><td>" + subject1 + "</td><td>" + eachMarks + "</td><td>" + obtMarks1 + "</td><td>" + percentage1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + eachMarks + "</td><td>" + obtMarks2 + "</td><td>" + percentage2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + eachMarks + "</td><td>" + obtMarks3 + "</td><td>" + percentage3 + "%</td></tr>");
document.write("</table>");

document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Obtained Marks: " + obtainedMarks + "</p>");
document.write("<p>Average Percentage: " + averagePercentage + "%</p>");


