const inputs = document.querySelectorAll(".input");
const submitBtn = document.querySelector("button");
const msgAlert = document.querySelector(".msg-alert");
const form = document.querySelector("form");

// inputs
const firstname = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const checkRadio = document.querySelector('input[name="query-type"]:checked');
const supportRequest = document.getElementById("support-request");
const generalInquiry = document.getElementById("general-inquiry");

let formIsValid = false;

const checkInputs = () => {
  // get the values from the input
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  console.log("checking inpuuuts");
  // set success function
  const setSuccessFor = (input) => {
    const inputContainer = input.parentElement;
    inputContainer.classList.remove("error");
    inputContainer.classList.add("success");
  };
  // set error function
  const setErrorFor = (input, message) => {
    const inputContainer = input.parentElement;
    const smallElement = inputContainer.querySelector("small");
    smallElement.innerText = message;
    inputContainer.classList.add("error");
  };

  // isEmail function
  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
  //checking firstname
  if (firstnameValue === "") {
    setErrorFor(firstname, "This field is required");
  } else {
    setSuccessFor(firstname);
  }

  //checking lastname
  if (lastnameValue === "") {
    setErrorFor(lastname, "This field is required");
  } else {
    setSuccessFor(lastname);
  }

  //checking email
  if (emailValue === "") {
    setErrorFor(email, "This field is required");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "email is not valid");
  } else {
    setSuccessFor(email);
  }

  
  //check query type
  
  const container = document.querySelector(".query-container");
  console.log(generalInquiry.checked, supportRequest.ckecked, checkRadio);
  if (!generalInquiry.checked && !supportRequest.checked) {
    let small = container.lastElementChild;
    small.innerText = "please select a query type";
    container.className = "query-container error";
  } else {
    container.className = "query-container success";
  }

  //check message
  if (messageValue === "") {
    setErrorFor(message, "message cannot be blank");
  } else {
    setSuccessFor(message);
  }
};

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

form.addEventListener("submit", (event) => {
  // console.log("msgAlert");
  event.preventDefault();
  checkInputs();
  // msgAlert.classList.add("active");
});

// submitBtn.addEventListener("click", submitHandler);
