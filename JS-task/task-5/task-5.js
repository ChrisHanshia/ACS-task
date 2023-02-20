function changeColor(e) {
    var index = Array.prototype.indexOf.call(e.parentNode.children,e);
    if (index % 2 === 0) {
     e.style.color = "red";
    } else {
     e.style.color = "green";
    }
  }