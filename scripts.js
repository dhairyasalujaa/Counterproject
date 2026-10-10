let add1 = document.getElementById("add1");
let subtract1 = document.getElementById("subtract1");
let reset1 = document.getElementById("reset");
let count = document.getElementById("counter");
let message = document.getElementById("message");

let counter = 0;

function add1f() {
  counter++;
  count.textContent = counter;
}

function subtract1f() {
  counter--;
  count.textContent = counter;
}

function reset1f() {
  counter = 0;
  count.textContent = counter;
}
add1.addEventListener("click", add1f);
subtract1.addEventListener("click", subtract1f);
reset1.addEventListener("click", reset1f);
add1.addEventListener("click", updateMessage);
subtract1.addEventListener("click", updateMessage);
reset1.addEventListener("click", updateMessage);
function updateMessage() {
  if (counter < 0) {
    message.textContent = "Counter is negative!";
  } else if (counter === 0) {
    message.textContent = "Counter is zero!";
  } else {
    message.textContent = "Counter is positive!";
  }
}
