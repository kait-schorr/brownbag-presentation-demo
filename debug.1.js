let numberOfDogs = prompt("How many Dogs do you have?");
// let numberOfPeople = prompt("How many people do you have?");
//Difference 1
// while (numberOfDogs <= numberOfPeople) {
//   console.log("Move Along. Nothing to See Here");
// }

function tooManyDogs() {
  if (numberOfDogs > numberOfPeople) {
    return confirm("You've got a problem.");
  } else {
    alert("You're the perfect human specimen.");
    clearInterval(catTimer);
  }
}
//Difference 2
function addDogs() {
  let text = document.getElementsByClassName("Dogs")[0].innerHTML;
  if (numberOfDogs > 0) {
    text +=
      '<img src="img/cat.jpg" width="200px" height="200px" style="border-radius: 50%">';
  }
  document.getElementsByClassName("Dogs")[0].innerHTML = text;
  numberOfDogs--;
}
let catPics = document.querySelectorAll("img");
//SPOT THE DIFFERENCES
let catTimer = setInterval(() => {
  addDogs();
}, 1000);
let personTimer = setInterval(() => addPerson(), 500);
catPics[0].innerHTML = "<div>X</div>";

//More differences
