const inputs = document.querySelectorAll(".input");

const focusFunction = (e) => {
  e.target.parentElement.classList.add("focus");
};
const blurFunction = (e) => {
  if (e.target.value === "") {
    e.target.parentElement.classList.remove("focus");
  }
};

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunction);
  input.addEventListener("blur", blurFunction);
});
