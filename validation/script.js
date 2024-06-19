const form = document.querySelector("form");

const mailInput = document.querySelector("#mail");
const countryInput = document.querySelector("#country");
const postalInput = document.querySelector("#postal");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const inputs = [
  mailInput,
  countryInput,
  postalInput,
  passwordInput,
  confirmPasswordInput,
];

const mailValidationDiv = document.querySelector("#mail-validation-message");
const postalValidationDiv = document.querySelector(
  "#postal-validation-message"
);
const passwordValidationDiv = document.querySelector(
  "#password-validation-message"
);
const confirmPasswordValidationDiv = document.querySelector(
  "#confirm-password-validation-message"
);
const requiredValidationDiv = document.querySelector(
  "#required-validation-message"
);

const validationMsg = {
  mailValidationDiv: "Please enter a valid email address.",
  postalValidationDiv: "Please enter a valid postal code.",
  passwordValidationDiv:
    "Please type at least 8 characters, with at least 1 capital letter, 1 number and 1 special character.",
  confirmPasswordValidationDiv: "Passwords do not match.",
  requiredValidationDiv: "Please fill in all the form.",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const requiredValidationArr = inputs.map((item) => isRequiredValid(item));
  const showRequiredMsg = requiredValidationArr.includes(false);

  isEmailValid(mailInput);
  isPostalValid(postalInput);
  isPasswordValid(passwordInput);
  isConfirmPasswordValid(confirmPasswordInput);

  if (showRequiredMsg)
    requiredValidationDiv.textContent = validationMsg.requiredValidationDiv;
  if (!showRequiredMsg) requiredValidationDiv.textContent = "";
});

const isRequiredValid = (item) => {
  if (item.value === "") {
    item.classList.add("invalid");
    return false;
  }

  item.classList.remove("invalid");
  return true;
};

const isEmailValid = (item) => {
  const constraint = new RegExp("^.+@.+$");

  if (!constraint.test(item.value)) {
    item.classList.add("invalid");
    mailValidationDiv.textContent = validationMsg.mailValidationDiv;
    return false;
  }

  item.classList.remove("invalid");
  mailValidationDiv.textContent = "";
  return true;
};

const isPostalValid = (item) => {
  if (item.value.length !== 6) {
    item.classList.add("invalid");
    postalValidationDiv.textContent = validationMsg.postalValidationDiv;
    return false;
  }

  item.classList.remove("invalid");
  postalValidationDiv.textContent = "";
  return true;
};

const isPasswordValid = (item) => {
  const constraint = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if (!constraint.test(item.value)) {
    item.classList.add("invalid");
    passwordValidationDiv.textContent = validationMsg.passwordValidationDiv;
    return false;
  }

  item.classList.remove("invalid");
  passwordValidationDiv.textContent = "";
  return true;
};

const isConfirmPasswordValid = (item) => {
  const confirmPassword = item.value;
  const password = passwordInput.value;

  if (confirmPassword !== password) {
    item.classList.add("invalid");
    confirmPasswordValidationDiv.textContent =
      validationMsg.confirmPasswordValidationDiv;

    return false;
  }

  item.classList.remove("invalid");
  confirmPasswordValidationDiv.textContent = "";
  return true;
};

inputs.forEach((item) =>
  item.addEventListener("input", () => {
    isRequiredValid(item);
  })
);

mailInput.addEventListener("input", () => {
  isEmailValid(mailInput);
});

postalInput.addEventListener("input", () => {
  isPostalValid(postalInput);
});

passwordInput.addEventListener("input", () => {
  isPasswordValid(passwordInput);
  isConfirmPasswordValid(confirmPasswordInput);
});

confirmPasswordInput.addEventListener("input", () => {
  isConfirmPasswordValid(confirmPasswordInput);
});
