const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");

yesButton.addEventListener("click", () => {
  redirectToRandomResult();
});

noButton.addEventListener("click", () => {
  redirectToRandomResult();
});

function redirectToRandomResult() {
  const outcomes = ["spender.html", "saver.html", "investor.html"];
  const randomIndex = Math.floor(Math.random() * outcomes.length);
  const randomOutcome = outcomes[randomIndex];
  window.location.href = randomOutcome;
}
