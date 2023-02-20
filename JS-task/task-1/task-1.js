let textClicked = [];
    function showText(event) {
      const target = event.target;
      const text = target.textContent;

      textClicked.push(text);
      alert(textClicked.join("\n"));
    }

    document.addEventListener("DOMContentLoaded", function() {
      const boxes = document.querySelectorAll(".text-box");

      boxes.forEach(box => {
        box.addEventListener("click", showText);
      });
    });   