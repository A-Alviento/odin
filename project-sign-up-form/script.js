const password = document.querySelector("#pw");
const confirmPassword = document.querySelector("#confirm_pw");
const passwordRequirementText = document.querySelector("#pw-requirements");

confirmPassword.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
    passwordRequirementText.textContent = "* Passwords do not match";
  } else {
    password.style.border = "1px solid black";
    confirmPassword.style.border = "1px solid black";
    passwordRequirementText.textContent = "";
  }
});

password.addEventListener("input", () => {
  if (password.value === confirmPassword.value) {
    password.style.border = "1px solid black";
    confirmPassword.style.border = "1px solid black";
    passwordRequirementText.textContent = "";
  }
});

console.log("Hello, World!");
