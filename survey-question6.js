const month1 = document.querySelector(".option-1-month");
const month3 = document.querySelector(".option-3-6-months");
const year1 = document.querySelector(".option-1-year");
const no = document.querySelector(".option-no-need");

month1.addEventListener("click", () => {
  redirectToRandomResult();
});

month3.addEventListener("click", () => {
  redirectToRandomResult();
});

year1.addEventListener("click", () => {
  redirectToRandomResult();
});

no.addEventListener("click", () => {
  redirectToRandomResult();
});

function redirectToRandomResult() {
  const outcomes = ["spender.html", "saver.html", "investor.html"];
  const randomIndex = Math.floor(Math.random() * outcomes.length);
  const randomOutcome = outcomes[randomIndex];
  window.location.href = randomOutcome;
}
