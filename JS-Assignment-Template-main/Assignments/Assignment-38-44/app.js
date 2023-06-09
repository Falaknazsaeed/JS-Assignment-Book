//Task-01. Write a custom function power ( a, b ), to calculate the value of a raised to b.

document.write("<h4>Task-01</h4>");


function power(a, b) {
  var thePower = Math.pow(a, b);
  return thePower;
}

document.write("The Square Root of 4 is: " + power(4, 2) + "<br>");
document.write("The Cube Root of 4 is: " + power(4, 3) + "<br>");
document.write("The 4th Root of 4 is: " + power(4, 4));


//Task-02. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

document.write("<h4>Task-02</h4>");


function checkLeapYear(year) {

   //three conditions to find out the leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      document.write(year + ' is a leap year');
  } else {
      document.write(year + ' is not a leap year');
  }
}

// take input
var year = prompt('Enter a year to check whether its a Leap Year or Not? :');

checkLeapYear(year);

//Task-03. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by :
//area = S(S − a)(S − b)(S − c)where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions

document.write("<h4>Task-03</h4>");


function halfPerimeterOfTriangle(a, b, c) {
  var s =  ( a + b + c ) / 2;
  return s;
}

function areaOfTriangle(a, b, c) {
  var s = halfPerimeterOfTriangle(a, b, c);
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
 
document.write("The Area of Triangle is: " + areaOfTriangle(5, 6, 8).toFixed(2));


//Task-04. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

document.write("<h4>Task-04</h4>");

function forAverage(Sub1, Sub2, Sub3) {
  var obtainedMarks = Sub1 + Sub2 + Sub3;
  var averageMarks = obtainedMarks / 3;
  return averageMarks;
}

function forPercentage(Sub1, Sub2, Sub3) {
  var obtainedMarks = Sub1 + Sub2 + Sub3;
  var totalMarks = 300;
  var percentage = (obtainedMarks / totalMarks) * 100;
  return percentage;
}

function mainFunction() {
  var subject1Marks = +prompt("Enter marks obtained in 1st Subject out of 100");
  var subject2Marks = +prompt("Enter marks obtained in 2nd Subject out of 100");
  var subject3Marks = +prompt("Enter marks obtained in 3rd Subject out of 100");

  var average = forAverage(subject1Marks, subject2Marks, subject3Marks);
  var percentage0 = forPercentage(subject1Marks, subject2Marks, subject3Marks)

  document.write("Average Marks: " + average.toFixed(2) + "<br>");
  document.write("Percentage: " + percentage0.toFixed(2) + "%");
}
 
mainFunction();

//Task-05. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

document.write("<h4>Task-05</h4>");


function indexOf(str, foundChar) {
  var i = 0;
  var searchIndex = -1;

  do {
    if (str[i] === foundChar) {
      searchIndex = i;
      break;
    }
    i++;
  }
  
  while (i < str.length);

  return searchIndex;
}

var str = "Hello Moto";
var foundChar = "o";
document.write("The Original Statement: " + str + "<br>" + "After applying custom function 'indexOf', the index of 'o' is : " + indexOf(str, foundChar));

//Task-06. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

document.write("<h4>Task-06</h4>");


var sentence = "Lorem ipsum dolor sit amet";

function removeVowels(sentence) {
  var newSentence = sentence.replace(/[aeiou]/gi, " ");
  return newSentence;
}

document.write("Original Sentence: " + sentence + "<br>" + "After Removing Vowels: " + removeVowels(sentence));

//Task-7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.

document.write("<h4>Task-07</h4>");


function countTwoVowels(text) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  for (var i = 0; i < text.length - 1; i++) {
    var char1 = text[i].toLowerCase();
    var char2 = text[i + 1].toLowerCase();

    if (vowels.indexOf(char1) !== -1 && vowels.indexOf(char2) !== -1) {
      switch (char1 + char2) {
        case 'ae':
        case 'ea':
        case 'io':
        case 'ui':
          count++;
          break;
        default:
          break;
      }
    }
  }

  return count;
}

var text = "Pleases read this application and give me gratuity.";
var count = countTwoVowels(text);
document.write("Example Sentence: " + text + "<br>" + "Total Number of Successive Vowels: " + count);

//Task-08. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

document.write("<h4>Task-08</h4>");


function kmToMeters(km) {
  return km * 1000;
}

function kmToFeet(km) {
  return km * 3280.84;
}

function kmToInches(km) {
  return km * 39370.08;
}

function kmToCentimeters(km) {
  return km * 100000;
}

function printDistance(distance) {
  document.write("The distance enter in km is: " + distanceBetweenCities + "<br><br>");
  document.write("Entered Distance in Meters: " + kmToMeters(distance) + " m" + "<br>");
  document.write("Entered Distance in Feet: " + kmToFeet(distance) + " ft" + "<br>");
  document.write("Entered Distance in Inches: " + kmToInches(distance) + " in" + "<br>");
  document.write("Entered Distance in Centimeters: " + kmToCentimeters(distance) + " cm" + "<br>");
}

var distanceBetweenCities = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
printDistance(distanceBetweenCities);


//Task-09 Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

document.write("<h4>Task-09</h4>");


function calcOvertimePay(hoursWorked) {
  var regularHours = 40;
  var ratePerHrs = 12;
  var overTimeHrs = hoursWorked - regularHours;
  var overTimePay = 0;

  if (overTimeHrs > 0) {
    overTimePay = overTimeHrs * ratePerHrs;
  }

  return overTimePay;
}

const hoursWorked = parseFloat(prompt("Enter the total hours worked by the employee:"));
const overTimePay = calcOvertimePay(hoursWorked);
document.write("Total Hours worked by the employee is: " + hoursWorked + "<br>")
document.write("Overtime Pay: Rs. " + overTimePay.toFixed(2));

//Task-10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

document.write("<h4>Task-10</h4>");


function calcCurrencyNotes(withdrawAmount) {
  var denominations = [100, 50, 10];
  var notes = [0, 0, 0];
  var i = 0;

  while (withdrawAmount > 0 && i < denominations.length) {
    notes[i] = Math.floor(withdrawAmount / denominations[i]);
    withdrawAmount = withdrawAmount % denominations[i]; 
    i++;
  }

  return notes;
}

var withdrawAmount = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));
var notes = calcCurrencyNotes(withdrawAmount);

document.write("Number of 100 notes: " + notes[0] + "<br>");
document.write("Number of 50 notes: " + notes[1] + "<br>");
document.write("Number of 10 notes: " + notes[2] + "<br>");

