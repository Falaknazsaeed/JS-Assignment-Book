//Task-01.Consider you have following code snippet:(Copy it in your HTML file)
//  <div>
//  <h1> DOM </h1>
//  <div id=”form-content” class=”content”>
//  <label for=”first-name”>First Name</label>
//  <input type=”text” id=”first-name” />
//  <label for=”last-name”>Last Name</label>
//  <input type=”text” id=”last-name” />
//  <label for=”email”>Email</label>
//  <input type=”text” id=”email” />
//  </div>
//  <div id=”main-content” class=”content”>
//  <p class=”render”> First Name : Alex</p>
//  <p class=”render” id=”lastName”>Last Name: Bank</p>
//  <p class=”render”> Email : alexbank@example.com</p>
//  <p class=”render”> Country : Pakistan </p>
//  <p class=”render”> contact : +92 300 1234567</p>
//  </div>
//  </div>
//  i. Get element of id “main-content” and assign them in a variable.
//  ii. Display all child elements of “main-content” element.
//  iii. Get all elements of class “render” and show their innerHTML 
//  in browser.
//  iv. Fill input value whose element id first-name using javascript.
//  v. Repeat part iv for id ”last-name” and “email”


document.addEventListener("DOMContentLoaded", function () {
  var mainContent = document.getElementById("main-content");
  var childElements = mainContent.children;
  console.log(childElements);

  var renderElements = document.getElementsByClassName("render");
  for (var i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
  }

  var firstNameInput = document.getElementById("first-name");
  firstNameInput.value = "Alex";

  var lastNameInput = document.getElementById("last-name");
  lastNameInput.value = "Bank";

  var emailInput = document.getElementById("email");
  emailInput.value = "alexbank@example.com";
});


//Task-02. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email"

  // Task i: Get the node type of the element with id "form-content"
  var formContent = document.getElementById("form-content");
  console.log("Node type of 'form-content':", formContent.nodeType);

  // Task ii: Get the node type of the element with id "lastName" and its child node
  var lastNameElement = document.getElementById("lastName");
  console.log("Node type of 'lastName' element:", lastNameElement.nodeType);
  console.log("Child node of 'lastName' element:", lastNameElement.firstChild);

  // Task iii: Update the child node of the element with id "lastName"
  lastNameElement.firstChild.nodeValue = "Last Name: Updated";

  // Task iv: Get the first and last child of the element with id "main-content"
  var mainContent = document.getElementById("main-content");
  var firstChild = mainContent.firstChild;
  var lastChild = mainContent.lastChild;
  console.log("First child of 'main-content':", firstChild);
  console.log("Last child of 'main-content':", lastChild);

  // Task v: Get the next and previous siblings of the element with id "lastName"
  var nextSibling = lastNameElement.nextSibling;
  var previousSibling = lastNameElement.previousSibling;
  console.log("Next sibling of 'lastName':", nextSibling);
  console.log("Previous sibling of 'lastName':", previousSibling);

  // Task vi: Get the parent node and node type of the element with id "email"
  var emailElement = document.getElementById("email");
  var parentNode = emailElement.parentNode;
  console.log("Parent node of 'email':", parentNode);
  console.log("Node type of 'email':", emailElement.nodeType);

