//Task-01. Write a program that displays current date and time in your browser.

document.write("<h4>Task-01</h4>");
document.write("Task-01 Displayed on Alert Box")

var rightNow = new Date();
alert("Current Date and Time:\n" + rightNow);

//Task-02. Write a program that alerts the current month in words. For example December.

document.write("<h4>Task-02</h4>");
document.write("Task-02 Displayed on Alert Box")

var monthNames = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
var currentMonth = new Date();
var theMonth = currentMonth.getMonth();
var nameOfMonth = monthNames[theMonth];
alert("Current Month: " + nameOfMonth)

// //Task-3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

document.write("<h4>Task-03</h4>");
document.write("Task-03 Displayed on Alert Box")

var dayNames = ["Sunday" , "Monday" , "Tuesday" , "Wednesday", "Thursday" , "Friday" , "Saturday"]
var currentDate = new Date();
var theDay = currentDate.getDay();
var currentDayNames = dayNames[theDay].slice(0, 3);
alert("Today is: " + currentDayNames);

// //Task-04. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

document.write("<h4>Task-04</h4>");
document.write("Task-04 Displayed on Alert Box")

var today = new Date();
var dayOfWeek = today.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
  alert("It's Fun Day!!!!");
}
else {
  alert("Sorry, It's not Fun day");
}

// //Task-05. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

document.write("<h4>Task-05</h4>");
document.write("Task-05 Displayed on Alert Box")

var daysOfMonth = today.getDate();

if (daysOfMonth < 16) {
  alert("First Fifteen Days of the Month.");
}

else {
  alert("Last Days of the Month.");
}

//Task-06. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

document.write("<h4>Task-06</h4>");
document.write("Task-06 Displayed on Alert Box")


var millisecSinceMidnight = today.getTime();
var minutesSinceMidnight = Math.floor(today.getTime() / (1000 * 60));

alert("Current Date and Time:\n" + today + "\nElapsed Milliseconds since January 1, 1970: " + millisecSinceMidnight + "\nElapsed Minutes since January 1, 1970: " + minutesSinceMidnight);

//Task-07. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

document.write("<h4>Task-07</h4>");
document.write("Task-07 Displayed on Alert Box")

var beforeNoon = today.getHours();

if (beforeNoon <= 12) {
  alert("It's AM.");
}
else {
  alert("It's PM.");
}

//Task-08. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate

document.write("<h4>Task-08</h4>");
document.write("Task-08 Displayed on Alert Box")

var laterDate = new Date(2020, 11, 31);
alert("Later Date: " + laterDate);

//Task-09. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?

document.write("<h4>Task-09</h4>");
document.write("Task-09 Displayed on Alert Box")

var year = today.getFullYear();
var ramzanStarts = new Date(2023, 2, 23);
var dayzPast = Math.floor((today - ramzanStarts) / (1000 * 60 * 60 * 24));

alert(dayzPast + " days have passed since 1st Ramzan, 2023");

//Task-10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

document.write("<h4>Task-10</h4>");
document.write("Task-10 Displayed on Alert Box")

var referenceDate = new Date(2015, 0, 1);
var milliSeconds = Math.floor((today - referenceDate) / 1000);
alert("On Reference Date: " + referenceDate  + ", " +  milliSeconds + " seconds had passed since beginning of 2015");

//Task-11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

document.write("<h4>Task-11</h4>");
document.write("Task-11 Displayed on Alert Box")

var d = new Date();
var currentHours = d.getHours();
d.setHours(currentHours - 1);
alert("Current Date: " + today + "\n 1 Hour ago, it was " + d);

//Task-12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

document.write("<h4>Task-12</h4>");
document.write("Task-12 Displayed on Alert Box")

var date = new Date();
var currentYear = date.getFullYear();
date.setFullYear(currentYear - 100);
alert("Current Date: " + today + "\n100 Years back, it was " + date);


//Task-13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

document.write("<h4>Task-13</h4>");
document.write("Task-13 Displayed on Alert Box")

var userAge = prompt("What is your Age?");
var recentYear = new Date().getFullYear();
var userBirthYear = recentYear - userAge;
alert("Your Age is: " + userAge + "\nYour Birth Year is : " +  userBirthYear);

//Task-14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

document.write("<h4>Task-14</h4>");

var customerName = prompt("Your Name Please!");
var upperCharacter = customerName.toUpperCase();

var numberOfUnits = prompt("Please write Number of Units for the Current Month");

var monthNames1 = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
var recentMonth = today.getMonth();
var nameOfMonth1 = monthNames1[recentMonth];

var chargesPerUnit = 16;

var netAmount = numberOfUnits * chargesPerUnit;

var latePaymentSur = (netAmount * 10) / 100; //10% of net Amount

var grossAmount = netAmount + latePaymentSur;

document.write("<h1>K-Electric Bill</h1>");

document.write("Customer Name: " + upperCharacter + "<br>" + "Month: " + nameOfMonth1 + "<br>" + "Number Of Units: " + numberOfUnits + "<br>" + "Charges per Unit: " + chargesPerUnit + "<br><br><br>" + "Net Amount Payable (within Due Date): Rs." + netAmount + "<br>" + "Late Payment Surcharge: Rs." + latePaymentSur + "<br>" + "Gross Amount Payable (after Due Date): Rs." + grossAmount);

