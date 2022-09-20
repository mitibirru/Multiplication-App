const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionElem = document.getElementById("question");
const formElem = document.getElementById("form");
const inputElem = document.getElementById("input");
const scoreElem = document.getElementById("score");

questionElem.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnswer = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scoreElem.innerText = `score: ${score}`;

formElem.addEventListener("submit", () => {
  const userAns = +inputElem.value;
  if (userAns === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
