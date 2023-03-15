let button = document.querySelector("#submit");
button.addEventListener("click", function () {
  let result = [];
  let initialValue = document.querySelector("#rangeFrom").value;
  let finalValue = document.querySelector("#rangeTo").value;
  let divisibleNumber = document.querySelector("#divisibleBy").value;
  for (let i = initialValue; i <= finalValue; i++) {
    if (i % divisibleNumber === 0) {
      result.push(i);
    }
  }
  document.querySelector("#display").innerHTML = result.join(" ");
});