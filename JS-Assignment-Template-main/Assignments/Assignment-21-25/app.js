//Task-01. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

document.write("<h4>Task-01</h4>");
document.write("Task-01 Displayed on Alert Box")

var firstName = prompt("Enter Your First Name Please..");
var lastName = prompt("Enter Your Last Name Please..");

var firstChar = firstName.slice(0, 1);
firstChar = firstChar.toUpperCase();
var otherChars = firstName.slice(1);
otherChars = otherChars.toLowerCase();

var firstChar1 = lastName.slice(0, 1);
firstChar1 = firstChar1.toUpperCase(); 
var otherChars1 = lastName.slice(1);
otherChars1 = otherChars1.toLowerCase();

var fullName = firstChar + otherChars + " " + firstChar1 + otherChars1;
alert("Welcome!! " + fullName);


//Task-02. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

document.write("<h4>Task-02</h4>");
document.write("Task-02 Displayed on Alert Box")

var mobile = prompt("What is Your favorite Mobile model???");
alert("My Favorite Phone is: " + mobile);

var charsInMobile = mobile.length;
alert("Length of String: " + charsInMobile);

//Task-03. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

document.write("<h4>Task-03</h4>");

var countryName = "Pakistani";
var indexNum = countryName.indexOf("n");
document.write("String: " + countryName + "<br>" + "Index of 'n': " + indexNum);

//Task-04. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

document.write("<h4>Task-04</h4>");

var greetings = "Hello World";
var indexNum2 = greetings.lastIndexOf("l");
document.write("String: " + greetings + "<br>" + "Last Index of 'l': " + indexNum2);

//Task-05. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

document.write("<h4>Task-05</h4>");

var cntryName = "Pakistani";
var indexChar = cntryName.charAt("3");
document.write("String: " + cntryName + "<br>" + "Character at Index '3': " + indexChar);

//Task-6. Repeat Q1(task-01) using string concat() method.

document.write("<h4>Task-06</h4>");

document.write("Task-06 Displayed on Alert Box")

var firstName = prompt("Enter Your First Name Please..");
var lastName = prompt("Enter Your Last Name Please..");

var firstChar = firstName.slice(0, 1);
firstChar = firstChar.toUpperCase();
var otherChars = firstName.slice(1);
otherChars = otherChars.toLowerCase();

var firstChar1 = lastName.slice(0, 1);
firstChar1 = firstChar1.toUpperCase(); 
var otherChars1 = lastName.slice(1);
otherChars1 = otherChars1.toLowerCase();

var fullName = firstChar.concat(otherChars, " " , firstChar1, otherChars1);
alert("Welcome!! " + fullName);

//Task-07. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser

document.write("<h4>Task-07</h4>");

var city = "Hyderabad";
var replacement = city.replace("Hyder" , "Islam");
document.write("City: " + city + "<br>" + "After Replacement 'Hyder' to 'Islam': " + "<br>" + replacement);

//Task-08. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

document.write("<h4>Task-08</h4>");


var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace(/and/g, "&");
document.write("Original Statement: " + "<br>" + message + "<br><br>" + "Statement After Repalcement 'and' with '&': " + "<br>" + replace);

//Task-09. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

document.write("<h4>Task-09</h4>");

var quantity = "472";
var number = (+quantity);
document.write("Value: " + quantity + "<br>" + "Type: " + typeof(quantity) + "<br><br>" + "Value: " + number + "<br>" + "Type: " + typeof(number));

//Task-10. Write a program that takes user input. Convert and show the input in capital letters.

document.write("<h4>Task-10</h4>");

var userInput = prompt("Please type any word..");
var charsUp = userInput.toUpperCase();
document.write("User Input: " + userInput + "<br>");
document.write("Upper Case: " + charsUp);

//Task-11. Write a program that takes user input. Convert and show the input in title case.

document.write("<h4>Task-11</h4>");

var userInput1 = prompt("Please Type any Word...");
var firstChars3 = userInput1.slice(0, 1);
var otherChar = userInput1.slice(1);
a = firstChars3.toUpperCase(); 
b = otherChar.toLowerCase();
document.write("User Input: " + userInput1 + "<br>" + "Title Case: " + a + b);

//Task-12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

document.write("<h4>Task-12</h4>");

var number = 35.36;
var result = number.toString();
var answer = result.replace(".", "");
document.write("Number: " + number+ "<br>" + "Result: " + answer);

//Task-13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

document.write("<h4>Task-13</h4>");

document.write("Task-13 Displayed on Alert Box.")

var userName = prompt("Please Enter Your Name");

for (var i = 0; i < userName.length; i++) {
if (userName.charCodeAt(i) === 33) {
alert("Exclamation Mark found! \n Please Enter A Valid UserName.");
break;
 }
if (userName.charCodeAt(i) === 44) {
   alert("Comma found! \n Please Enter A Valid UserName.");
   break;
}
if (userName.charCodeAt(i) === 46) {
    alert("Dot/Point found! \n Please Enter A Valid UserName.");
    break;
}
if (userName.charCodeAt(i) === 64) {
    alert("At the Rate Symbol found! \n Please Enter A Valid UserName.");
    break;
}
else {
    alert("Valid UserName");
    break;
}
    
}

//Task-14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

document.write("<h4>Task-14</h4>");

document.write("Task-13 Displayed on Alert Box.") 

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

//Task-15. Write a program to take password as an input from user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements, prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

document.write("<h4>Task-15</h4>");

document.write("Task-15 Displayed on Alert Box")

var password = prompt("Please Enter A Password.");

var hasAlphabets = false;
var hasNumbers = false;


for (var i = 0; i < password.length; i++) {
var charCode = password.charCodeAt(i);

if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
hasAlphabets = true;
} 
else if (charCode >= 48 && charCode <= 57) {
hasNumbers = true;
}
}

if (hasAlphabets && hasNumbers && password.length >= 6 && !isNaN(password[0])) {
alert("Valid password!\nYour password is: " + password);
} 

else {
alert("Invalid password! Please enter a valid password.");
}


//Task-16. Write a program to convert the following string to an array using string split method.var university = “University of Karachi”; Display the elements of array in your browser.

document.write("<h4>Task-16</h4>");


var university = "Universtity Of Karachi";
document.write("Original String: " + university + "<br>");
var uniArr = university.split("");
document.write("Elements Of Array: " + uniArr + "<br>");

for (var i = 0; i < university.length; i++) {
document.write("<br>" + university.charAt(i));
}

//Task-17. Write a program to display the last character of a user input.

document.write("<h4>Task-17</h4>");

var userInput = prompt("Please Enter Any Word");
var lastChar = userInput.charAt(userInput.length - 1);
document.write("User Input: " + userInput + "<br>" + "Last Character of Input: " + lastChar);

//Task-18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

document.write("<h4>Task-18</h4>");

var myStr = "The quick brown fox jumps over the lazy dog";
var searchWord = "the";
var count = 0;
var lowerCasemyStr = myStr.toLowerCase();
var words = lowerCasemyStr.split(" ");

for (var i = 0; i < words.length; i++) {
  if (words[i] === searchWord) {
    count++;
  }
}

document.write("Text: The quick brown fox jumps over the lazy dog" + "<br>" + "There are " + count + " occurence(s) of word " + " ' " +  searchWord + " ' " + ".");
