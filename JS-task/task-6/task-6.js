let color = [
    "blue",
    "red",
    "yellow",
    "green",
    "brown",
    "black",
    "gray",
    "orange",
    "pink",
    "violet"
  ];
  let colorCount = {};
  let click = document.querySelector("#clickButton");
  click.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 10);
    document.body.style.backgroundColor = color[randomNumber];
    if (colorCount.hasOwnProperty(color[randomNumber])) {
      colorCount[color[randomNumber]] += 1;
    }
    else {
      colorCount[color[randomNumber]] = 1;
    }
    document.querySelector("#" + color[randomNumber]).innerHTML =
      colorCount[color[randomNumber]];
  });
  