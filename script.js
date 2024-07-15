const form = document.querySelector("form");
const input_containers = document.querySelectorAll(".input_container");
const radios = document.querySelectorAll(".radio");
const textarea = document.querySelector(".textarea");
const checkbox = document.querySelector(".checkbox");
let radioParent = document.querySelector(".radio_container");

input_containers.forEach((container) => {
  container.addEventListener("input", () => {
    container.querySelector("input").style.borderColor = "#87a3a6";
    container.querySelector(".error").style.display = "none";
  });
});
radios.forEach((radio) => {
  radio.addEventListener("input", () => {
    radioParent.querySelector(".error").style.display = "none";
  });
});

textarea.addEventListener("input", () => {
  textarea.parentElement.querySelector(".error").style.display = "none";
  textarea.style.borderColor = "#87a3a6";
});
checkbox.addEventListener("input", () => {
  checkbox.parentElement.parentElement.querySelector(".error").style.display =
    "none";
});

form.addEventListener("submit", (e) => {
  let submit = true;

  input_containers.forEach((container) => {
    let input = container.querySelector("input");
    let error = container.querySelector(".error");
    if (input.type === "email") {
      if (input.value.trim() === "") {
        input.style.borderColor = "red";
        error.style.display = "block";
        error.innerHTML = "This field is required";
        submit = false;
      } else {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailPattern.test(input.value)) {
          input.style.borderColor = "red";
          error.style.display = "block";
          error.innerHTML = "Please enter valid email";
          submit = false;
        }
      }
    }
    if (input.value.trim() === "") {
      input.style.borderColor = "red";
      error.style.display = "block";
      submit = false;
    }
  });

  let radioErr = true;

  radios.forEach((radio) => {
    if (radio.checked) {
      console.log("checked");
      radioErr = false;
    }
  });
  if (radioErr) {
    radioParent.querySelector(".error").style.display = "block";
    submit = false;
  }

  if (textarea.value.trim() === "") {
    textarea.parentElement.querySelector(".error").style.display = "block";
    textarea.style.borderColor = "red";
    submit = false;
  }
  if (!checkbox.checked) {
    checkbox.parentElement.parentElement.querySelector(".error").style.display =
      "block";
    submit = false;
  }

  if (!submit) {
    e.preventDefault();
  } else {
    console.log("submited");
  }
});
