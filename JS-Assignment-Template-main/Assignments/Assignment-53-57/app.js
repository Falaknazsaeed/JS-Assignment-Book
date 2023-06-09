//Task-01Consider you have 4 images in a file. Now When you click on an image it should display in a modal

function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imageUrl;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

//Task-02.Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).On each click on “zoom in”(+) , add 10px in font size of paragraph.And on each click on “zoom out”(-) , minus 10px in font size of paragraph

var paragraph = document.getElementById("zoomedText");
var fontSize = 16;

function zoomIn() {
  fontSize += 10;
  paragraph.style.fontSize = fontSize + "px";
}

function zoomOut() {
  if (fontSize > 10) {
    fontSize -= 10;
    paragraph.style.fontSize = fontSize + "px";
  }
}
