//Assignment-#-05//

//Task-01. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

document.write("<h4>Task-01</h4>");

var a = 5;
var b = 3;
var total = a + b;
document.write("Sum of 5 and 3 is " + total);




//Task-02. Repeat task1 for subtraction, multiplication, division & modulus.

document.write("<h4>Task-02</h4>");

var a = 5;
var b = 3;
var total = a - b;
document.write("Subtraction of 5 and 3 is " + total + "<br>");

var total = a * b;
document.write("Multiplication of 5 and 3 is " + total + "<br>");

var total = a/b;
document.write("Division of 5 and 3 is " + total + "<br>");

var total = a%b;
document.write("Modulus of 5 and 3 is " + total);




//Task-03. Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial value: 5”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value after increment is: 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value after decrement is: 12”.
//k. Show the remainder after dividing the variable’s value by 3. 
//l. Output : “The remainder is : 0”.

document.write("<h4>Task-03</h4>");

var num;
document.write("Value after variable declaration is " + num + "<br>");
var num = 5;
document.write("Initial Value: " + num + "<br>");
var increement = ++num;
document.write("Value after increment is: " + increement + "<br>");
var addition = num + 7;
document.write("Value after addition is: " + addition + "<br>");
var decreement = --addition;
document.write("Value after decrement is: " + decreement + "<br>");
var modulus = addition%3;
document.write("The remainder is: " + modulus);




//Task-04. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 ticketsto a movie.

document.write("<h4>Task-04</h4>");

var ticketPrice = 600;
var totalCost = ticketPrice*5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");




//Task-05. Write a script to display multiplication table of any number in your browser.

document.write("<h4>Task-05</h4>");


document.write("Table of 4" + "<br>");
var num = 4;
var result = 4 * 1;
document.write("4 x 1 = " + result + "<br>");
var result = 4 * 2;
document.write("4 x 2 = " + result + "<br>");
var result = 4 * 3;
document.write("4 x 3 = " + result + "<br>");
var result = 4 * 4;
document.write("4 x 4 = " + result + "<br>");
var result = 4 * 5;
document.write("4 x 5 = " + result + "<br>");
var result = 4 * 6;
document.write("4 x 6 = " + result + "<br>");
var result = 4 * 7;
document.write("4 x 7 = " + result + "<br>");
var result = 4 * 8;
document.write("4 x 8 = " + result + "<br>");
var result = 4 * 9;
document.write("4 x 9 = " + result + "<br>");
var result = 4 * 10;
document.write("4 x 10 = " + result);





//Task-06. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”

document.write("<h4>Task-06</h4>");


var temperature = 25;
var conversion = (temperature * 9/5) + 32;
document.write("25°C is " + conversion + "°F" + "<br>");
var temp = 70;
var convert = (temp - 32)  * 5/9;
document.write("70°F is " + convert + "°C");





//Task-07. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.

document.write("<h4>Task-07</h4>");


document.write("<h1>Shopping Cart</h1>");
var price1 = 650;
document.write("Price of item # 1 is: " + price1 + "<br>");
var quantity1 = 3;
document.write("Quantity of item # 1 is: " + quantity1 + "<br>");
var price2 = 100;
document.write("Price of item # 2 is: " + price2 + "<br>");
var quantity2 = 7;
document.write("Quantity of item # 2 is: " + quantity2 + "<br>");
var shippingCharges = 100;
document.write("Shipping Charges " + shippingCharges + "<br><br>");
var totalCost = (price1*quantity1)+(price2*quantity2)+shippingCharges;
document.write("Total cost of your order is: Rs." + totalCost);




//Task-08. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

document.write("<h4>Task-08</h4>");


document.write("<h1>Marks Sheet</h1>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = marksObtained/totalMarks * 100;
document.write("Total Marks: " + totalMarks + "<br>" + "Obtained Marks: " + marksObtained + "<br>" + "Percentage: " + percentage + "%");





//Task-09. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h4>Task-09</h4>");


document.write("<h1>Currency in PKR</h1>");
var usDollar = 10;
var saudiRiyals = 25;
var totalCurrency = (10 * 104.80) + (25 * 28);

document.write("Total Currency: "  + saudiRiyals +  " Saudi Riyals and " + usDollar + " Dollars" + "<br>")
document.write("Total Currency in PKR: " + totalCurrency);




//Task-10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

document.write("<h4>Task-10</h4>");
var num = 4;
var total = (num + 5 * 10)/2;
document.write("Final answer is: " + total);




//Task-11. The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values.

document.write("<h4>Task-11</h4>");
document.write("<h1>Age Calculator</h1>");
var currentYear = 2023;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>" + "Birth Year: " + birthYear + "<br>" + "Your Age is: " + age);




//Task-12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and output “The circumference is NN”.(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h4>Task-12</h4>");
document.write("<h1>Geometrizer</h1>");
var radius = 20;
var circumference = 2 * 3.142 * 20;
var area = 3.142 * 20**2;
document.write("Radius of a Circle: " + radius + "<br>" + "The Circumference is: " + circumference + "<br>" + "The area is: " + area);




//Task-13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 

//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.

document.write("<h4>Task-13</h4>");
document.write("<h1>The Lifetime Supply Calculator</h1>");
var favoriteSnack =  " Prince Biscuits";
var currAge = 15;
var maxAge = 65;
var estimAmount = 3;
var total = (maxAge - currAge) * 3;
document.write("Favourite Snack: " + favoriteSnack + "<br>" + "Current Age: " + currAge + "<br>" + "Estimated Maximum Age: " + maxAge + "<br>" + "Amount of snacks per day: " + estimAmount + "<br>" + "You will need " + total + favoriteSnack + " to last until the ripe old age of 65");

