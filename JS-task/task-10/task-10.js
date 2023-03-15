let box = document.querySelectorAll("div");
let pervious = null;
box.forEach((element) => {
  element.addEventListener("click", function () {
    // if previous have element the element's display property will changed to block
    if (pervious) {
      pervious.style.display = "block";
    }
    // current element will have display property none
    this.style.display = "none";
    // current element will be assigned to pervious variable
    pervious = this;
  });
});