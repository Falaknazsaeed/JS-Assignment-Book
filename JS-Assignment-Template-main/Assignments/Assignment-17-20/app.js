//Task-01. Declare and initialize an empty multidimensional array.(Array of arrays)

document.write("<h4>Task-01</h4>");
document.write("Check VS Code app.js file for Task-01");

var a = [
    [],
    [],
    []
];


//Task-02. Declare and initialize a multidimensional array representing the following matrix:

document.write("<h4>Task-02</h4>");

document.write("<h3>Multidimensional Array: </h3>");

var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
for (var i = 0; i < 3; i++){
    for (var b = 0; b < 4; b++) {
        document.write(arr[i][b] + " ");  
    }
    document.write("<br>");
}


//Task-03. Write a program to print numeric counting from 1 to 10.

document.write("<h4>Task-03</h4>");

document.write("<h3>Numeric Counting from 1 -10</h3>");

for (var i = 1; i <=10; i++) {
    document.write(i + "<br>");
}



//Task-04. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

document.write("<h4>Task-04</h4>");

var userInput = prompt("Enter A Number to show its multiplication table");
var userInput2 = prompt("Enter the Length of Multiplication Table");

document.write("Multiplication Table of " + userInput + "<br>");
document.write("Length " + userInput2 + "<br><br>");

for (var i = 1; i <= userInput2; i++) {
    document.write(userInput + " " + "x" + " " + i + " " + "=" + " " + userInput*i + "<br>")
}



//Task-05. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

document.write("<h4>Task-05</h4>");

document.write("<h3>Array of Fruits</h3>");

var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"]
for (var i = 0; i <= 4; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<h3>Array Index of Fruits</h3>");

document.write("Element At Index " + fruits.indexOf("Apple") + " is Apple" + "<br>");
document.write("Element At Index " + fruits.indexOf("Banana") + " is Banana" + "<br>");
document.write("Element At Index " + fruits.indexOf("Mango") + " is Mango" + "<br>");
document.write("Element At Index " + fruits.indexOf("Orange") + " is orange" + "<br>");
document.write("Element At Index " + fruits.indexOf("Strawberry") + " is Strawberry" + "<br>");


//Task-06. Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<h4>Task-06</h4>");

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

var a = "<h1>Counting</h1>";
document.write(a);

for (var i = 1; i <= 15; i++) {
    document.write(i + "," + " ");
}


//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,


var a = "<h1>Reverse Counting</h1>";
document.write(a);

for (var i = 10; i > 0; i-=1) {
    document.write(i + "," + " ");
}

//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

var a = "<h1>Even</h1>";
document.write(a);

var even = [];

for (var i = 0; i <= 20; i += 2) {
    even.push(i);
}
document.write(even);

//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

var a = "<h1>Odd</h1>";
document.write(a);

var myArray = [];

for (var i = 1; i < 20; i += 2) {
  myArray.push(i);
}
document.write(myArray);

//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var a = "<h1>Series</h1>";
document.write(a);

for (var i = 2; i <=20; i += 2) {
    document.write(i + "k" + "," + " ");
}


//Task-07. You have an array
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not. Example:

document.write("<h4>Task-07</h4>");
document.write("Task-07 Displayed on Alert box.")

var falakBakery = prompt("Welcome to Falak Naz bakery.\nWhat do you want to order Sir/Ma'aam?");
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var matchFound = false;
for (var i = 0; i <= 4; i++){
if (falakBakery === A[i]) {
matchFound = true;
alert(falakBakery + " is available at index " + i + " in our bakery");
break;
 }
}
if (matchFound === false) {
alert("It's not on the list");
}

//Task-08. Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].

document.write("<h4>Task-08</h4>");

var num = [24, 53, 78, 91, 12];
document.write("Array Items: " + num + "<br>");
document.write("The Largest Number in the array is: " + Math.max.apply(null, num));

//Task-09. Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12]

document.write("<h4>Task-09</h4>");

var num = [24, 53, 78, 91, 12];
document.write("Array Items: " + num + "<br>");
document.write("The Smallest Number in the array is: " + Math.min.apply(null, num));

//Task-010. Write a program to print multiples of 5 ranging 1 to 100.


document.write("<h4>Task-10</h4>");

document.write("<h3>Multiple Of 5 Ranging From 1 to 100.</h3>");

var multiple = 5;
for (var i = 1; i <= 20; i++) {
document.write(i*multiple + ", ");
}
