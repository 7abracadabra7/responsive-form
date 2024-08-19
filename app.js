const inputs = document.querySelectorAll(".input");
const submitBtn = document.querySelector("button");
const msgAlert = document.querySelector(".msg-alert");

const formHandler = (event) => {
  event.preventDefalt();
};

const focusFunction = (e) => {
  e.target.parentElement.classList.add("focus");
};
const blurFunction = (e) => {
  if (e.target.value === "") {
    e.target.parentElement.classList.remove("focus");
  }
};

const submitHandler = () => {
  console.log("msgAlert");
  msgAlert.classList.add("active");
};

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunction);
  input.addEventListener("blur", blurFunction);
});

submitBtn.addEventListener("click", submitHandler);
