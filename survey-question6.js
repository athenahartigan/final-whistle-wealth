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

funct