//Assignment-13-15________________________

//Task-01. Declare an empty array using JS literal notation to store student names in future.

document.write("<h4>Task-01</h4>");
document.write("Check VS Code app.js file for Task-01");

var emptyArr = [];

//Task-02. Declare an empty array using JS object notation to store student names in future.

document.write("<h4>Task-02</h4>");
document.write("Check VS Code app.js file");
var emptyArray = new Array();

//Task-03. Declare and initialize a strings array.

document.write("<h4>Task-03</h4>");
document.write("Check VS Code app.js file");

var array = ["Hello", "Hi"];


//Task-4. Declare and initialize a numbers array.

document.write("<h4>Task-04</h4>");
document.write("Check VS Code app.js file");

var numbers = [1, 2, 3, 4, 5];


//Task-5. Declare and initialize a boolean array.

document.write("<h4>Task-05</h4>");
document.write("Check VS Code app.js file");

var boolean = ["true", "false"];

//Task-06. Declare and initialize a mixed array.

document.write("<h4>Task-06</h4>");
document.write("Check VS Code app.js file");

var mixedArray = [1, "one", true, false];

//Tash-07. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

document.write("<h4>Task-07</h4>");

var eduQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications:</h1>");
document.write("1)  " + eduQualification[0]);
document.write("<br>")
document.write("2)  " + eduQualification[1]);
document.write("<br>")
document.write("3)  " + eduQualification[2]);
document.write("<br>")
document.write("4)  " + eduQualification[3]);
document.write("<br>")
document.write("5)  " + eduQualification[4]);
document.write("<br>")
document.write("6)  " + eduQualification[5]);
document.write("<br>")
document.write("7)  " + eduQualification[6]);
document.write("<br>")
document.write("8)  " + eduQualification[7]);
document.write("<br>")


//Task-08. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

document.write("<h4>Task-08</h4>");


var studentsName = ["Michael", "John", "Tony"];
var score = [320, 230, 480];
var totalMarks = 500;
var percentage1 = (score[0] / totalMarks) * 100;
var percentage2 = (score[1] / totalMarks) * 100;
var percentage3 = (score[2] / totalMarks) * 100;
document.write("Score of " + studentsName[0] + " is " + score[0] + "." + "  Percentage: " + percentage1 + "%" + "<br>");
document.write("Score of " + studentsName[1] + " is " + score[1] + "." + "  Percentage: " + percentage2 + "%" + "<br>");
document.write("Score of " + studentsName[2] + " is " + score[2] + "." + "  Percentage: " + percentage3 + "%" );


//Task-09. Initialize an array with color names. Display the array elements in your browser.
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
//c. Add two more color to the beginning of the array. Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated array in your browser.
//e. Delete the last color in the array. Display the updated array in your browser.
//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

document.write("<h4>Task-09</h4>");

//Initialize an array with color names. Display the array elements in your browser.

var colorNames = [" Red ", " Green ", " Yellow ", " Blue ", " Orange "];
document.write("<h2>Colors:</h2>" + "Initial Color List is: " + "<br>" + colorNames + "<br><br>")


//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser

var userInput = prompt("What color do you want to add to the beginning of this color range? \n" + colorNames);
colorNames.unshift(userInput);
document.write("Upated Color List after adding color(s) to the Beginning is: " + "<br>" + colorNames + "<br><br>");

//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

var userInput1 = prompt("What color do you want to add to the end of this color range? \n" + colorNames);
colorNames.push(userInput1);
document.write("Upated Color List after adding color(s) to the End is: " + "<br>" + colorNames + "<br><br>");

//c. Add two more color to the beginning of the array. Display the updated array in your browser.

colorNames.unshift(" Purple " , " Brown ");
document.write("Updated Color List is: "+ "<br>" + colorNames + "<br><br>");


//d. Delete the first color in the array. Display the updated array in your browser.

colorNames.shift();
document.write("Updated Color List After Removing First Element is: " + "<br>" +  colorNames + "<br><br>");


//e. Delete the last color in the array. Display the updated array in your browser.

colorNames.pop();
document.write("Updated Color List After Removing Last Element is: " + "<br>" +  colorNames + "<br><br>");

//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

var newColor = prompt("What Color Do You Want to Add In This Color Range?\n " + colorNames);
var newPosition = prompt("At What Position do you Want to add a Color?\n " + "*(Start Counting Colors from '0')\n" + colorNames);
colorNames.splice(newPosition, 0 , newColor);
document.write("Udated List after adding a new color:" + "<br>" + colorNames + "<br><br>");

//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var colorToDelete = prompt("How Many Color(s) Do You Want to Delete In This Color Range?\n " + colorNames);
var newPosition1 = prompt("At What Position do you Want to delete Color(s)?\n " + "*(Start Counting Colors from '0')\n" + colorNames);
colorNames.splice(newPosition1, colorToDelete);
document.write("Udated List after Removing color(s) From the List is:" + "<br>" + colorNames + "<br><br>");

//Task-010. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

document.write("<h4>Task-10</h4>");

var scoreOfStdents = [320 ,230 ,480 ,120];
document.write("<h3> Score of Students:  </h3>" + scoreOfStdents);
scoreOfStdents.sort();
document.write("<h3>Ordered Score of Students: </h3>" + scoreOfStdents);

//Task-11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selected Cities array.

document.write("<h4>Task-11</h4>");

var citiesList = ["Karachi " , " Lahore " , " Islamabad " , " Quetta " , " Peshawar "];
document.write("<h3>Cities List:</h3>" + citiesList);
var selectedCitiesList = citiesList.slice(2,4);
document.write("<h3>Selected Cities List:</h3>" + selectedCitiesList);

//Task-12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

document.write("<h4>Task-12</h4>");

 var arr = ["This ", " is ", " my ", " cat"];
 document.write("<h3>Array:</h3>" + arr);
 var string = arr.join(" ");
 document.write("<h3>String:</h3>" + string);

//Task-13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

document.write("<h4>Task-13</h4>");

var list = [];
list.push("Keybord");
list.push("Mouse");
list.push("Printer");
list.push("Monitor");

document.write("<h1>Devices:</h1>" + list);

var out1 = list.shift();
var out2 = list.shift();
var out3 = list.shift();
var out4 = list.shift();

document.write("<h3>Out:</h3>" + out1);
document.write("<h3>Out:</h3>" + out2);
document.write("<h3>Out:</h3>" + out3);
document.write("<h3>Out:</h3>" + out4);


//Task-14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out):

document.write("<h4>Task-14</h4>");

var emptyArr = [];
emptyArr.push("Keybord");
emptyArr.push("Mouse");
emptyArr.push("Printer");
emptyArr.push("Monitor");
document.write("<h1>Devices:</h1>" + emptyArr);

var last1 = emptyArr.pop();
var last2 = emptyArr.pop();
var last3 = emptyArr.pop();
var last4 = emptyArr.pop();

document.write("<h3>Out:</h3>" + last1);
document.write("<h3>Out:</h3>" + last2);
document.write("<h3>Out:</h3>" + last3);
document.write("<h3>Out:</h3>" + last4);

//Task-15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

document.write("<h4>Task-15</h4>");

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var selectHTML = '<select>' + manufacturers.map(function(manufacturer) {
  return '<option value="' + manufacturer + '">' + manufacturer + '</option>';
}).join('') + '</select>';

document.write(selectHTML);