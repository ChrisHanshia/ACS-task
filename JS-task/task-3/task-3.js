function showText() {
    var inputField = document.getElementById("inputField");
    var textDiv = document.getElementById("textDiv");
    textDiv.innerHTML = inputField.value;
    alert("The text in the input field is: " + inputField.value);
  }