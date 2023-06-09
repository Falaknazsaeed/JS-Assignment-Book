//Task-01. Create a signup form and display form data in your web page on submission


function displayFormData(event) {
  event.preventDefault();
  
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  var formData = "First Name: " + firstName + "<br>Last Name: " + lastName + "<br>Email: " + email + "<br>Password: " + password;
  
  document.getElementById("formData").innerHTML = formData;
  
  document.getElementById("signupForm").reset();
}

//Task-02. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.  

function expandedItemDetails() {
   var expandedDetails = "<p>Here are some additional details about the item:</p><br><ul><li>Item Color: Golden</li><li>Material: Metal</li><li>Style: vintage</li><li>Model Number: 66895</li><li>Switch Type: Knob switch</li><li>Is Smart Device: no</li><li>Warranty: 2 year</li><li>Shade Direction: Up & Down</li><li>Origin: Pakistan</li></ul>";
   document.getElementById("itemdetails").innerHTML = expandedDetails;
 }
 

 //Task-03 Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

 var students = [];

 function addStudent(event) {
   event.preventDefault();

   var name = document.getElementById("name").value;
   var age = document.getElementById("age").value;
   var grade = document.getElementById("grade").value;

   var student = {
     name: name,
     age: age,
     grade: grade
   };

   students.push(student);

   displayStudents();
   document.getElementById("studentForm").reset();
 }

 function displayStudents() {
   var tableBody = document.getElementById("studentTableBody");
   tableBody.innerHTML = "";

   for (var i = 0; i < students.length; i++) {
     var student = students[i];

     var row = "<tr>" +
       "<td>" + student.name + "</td>" +
       "<td>" + student.age + "</td>" +
       "<td>" + student.grade + "</td>" +
       "<td>" +
       "<button onclick='deleteStudent(" + i + ")'>Delete</button>" +
       "<button onclick='editStudent(" + i + ")'>Edit</button>" +
       "</td>" +
       "</tr>";

     tableBody.innerHTML += row;
   }
 }

 function deleteStudent(index) {
   students.splice(index, 1);
   displayStudents();
 }

 function editStudent(index) {
   var student = students[index];

   document.getElementById("editName").value = student.name;
   document.getElementById("editAge").value = student.age;
   document.getElementById("editGrade").value = student.grade;
   document.getElementById("editRowIndex").value = index;

   document.getElementById("editFormContainer").style.display = "block";
 }

 function updateStudent(event) {
   event.preventDefault();

   var index = document.getElementById("editRowIndex").value;
   var name = document.getElementById("editName").value;
   var age = document.getElementById("editAge").value;
   var grade = document.getElementById("editGrade").value;

   students[index].name = name;
   students[index].age = age;
   students[index].grade = grade;

   displayStudents();
   cancelEdit();
 }

 function cancelEdit() {
   document.getElementById("editForm").reset();
   document.getElementById("editFormContainer").style.display = "none";
 }
