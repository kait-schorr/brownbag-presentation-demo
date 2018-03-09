let numberOfDogs = prompt("How many dogs do you have?");
// let numberOfPeople = prompt("How many people do you have?");

// while (numberOfDogs <= numberOfPeople) {
//   console.log("Move Along. Nothing to See Here");
// }
//Change
function tooManyDogs() {
  if (numberOfDogs > numberOfPeople) {
    return confirm("You've got a problem.");
  } else {
    alert("You're the perfect human specimen.");
    clearInterval(catTimer);
  }
}
//Here's a difference
function addDogs() {
  let text = document.getElementsByClassName("Dogs")[0].innerHTML;
  if (numberOfDogs > 0) {
    text +=
      '<img src="img/cat.jpg" width="200px" height="200px" style="border-radius: 50%">';
  }
  document.getElementsByClassName("Dogs")[0].innerHTML = text;
  numberOfDogs--;
}
//Another difference
let catPics = document.querySelectorAll("img");

let catTimer = setInterval(() => {
  addDogs();
}, 1000);
let personTimer = setInterval(() => addPerson(), 500);
catPics[0].innerHTML = "<div>X</div>";
//More differences
