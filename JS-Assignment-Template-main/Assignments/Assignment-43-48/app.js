//Task-01. Show an alert box on click on a link.

function popup(message) {
  alert(message);
}

//Task-02. Display some Mobile images in browser. On click on an image Show the message in alert to user.


function showMessage(message) {
  alert(message);
}

//Task-03. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted. 


function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//Task-04. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.



//Task-05. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.


var counter = 0;
  var counterValueElement = document.getElementById('counterValue');

  function increaseCounter() {
    counter++;
    counterValueElement.textContent = counter;
  }

  function decreaseCounter() {
    if (counter > 0) {
      counter--;
      counterValueElement.textContent = counter;
    }
  }
