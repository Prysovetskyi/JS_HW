const circles = document.querySelectorAll(".circle");
const redButton = document.getElementById("turn-red");
const greenButton = document.getElementById("turn-green");
const blueButton = document.getElementById("turn-blue");

redButton.addEventListener("click", function() {
  circles.forEach(circle => {
    circle.style.backgroundColor = "red";
  });
});

greenButton.addEventListener("click", function() {
  circles.forEach(circle => {
    circle.style.backgroundColor = "green";
  });
});

blueButton.addEventListener("click", function() {
  circles.forEach(circle => {
    circle.style.backgroundColor = "blue";
  });
});
