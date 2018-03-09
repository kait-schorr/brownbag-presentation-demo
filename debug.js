let numberOfCats = 20;
let numberOfPeople = 2;

// while (numberOfCats <= numberOfPeople) {
//   console.log("Move Along. Nothing to See Here");
// }

while (tooManyCats()) {
  console.log("Let's add more people.");
  numberOfPeople++;
}
function tooManyCats() {
  if (numberOfCats > numberOfPeople) {
    console.log("You've got a problem.");
    return true;
  } else {
    console.log("You're the perfect human specimen.");
    return false;
  }
}
function printCats() {
  let text = "";
  for (let i = 0; i < numberOfCats; i++) {
    text +=
      '<img src="img/cat.jpg" width="200px" height="200px" style="border-radius: 50%">';
  }
  document.getElementsByClassName("cats")[0].innerHTML = text;
}
let catPics = document.querySelectorAll("img");

printCats();
catPics[0].innerHTML = "<div>X</div>";
