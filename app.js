const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// target the button
const btn = document.getElementById("btn");
// target the color
const color = document.querySelector(".color");

// function that change the background color
btn.addEventListener("click", function () {
  // target the body
  //   console.log(document.body);
  // get random number between 0 and 3, invoke the function
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  //   change the value
  color.textContent = colors[randomNumber];
});

// random number function
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
