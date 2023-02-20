function changeBackground(e) {
    var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    var firstLetter = e.innerHTML[0];
    if (vowels.indexOf(firstLetter) !== -1) {
      e.style.backgroundColor = "red";
    } else {
      e.style.backgroundColor = "green";
    }
  }