let password;

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const password_requirements = document.getElementById("form-infos");

const eightCharsMatch = document.querySelector("#form-infos li:nth-child(1)");
const lowercaseMatch = document.querySelector("#form-infos li:nth-child(2)");
const uppercaseMatch = document.querySelector("#form-infos li:nth-child(3)");
const numberMatch = document.querySelector("#form-infos li:nth-child(4)");
const specialCharMatch = document.querySelector("#form-infos li:nth-child(5)");

const correctColor = "#5eb458";
const incorrectColor = "#ccc";

passwordInput.addEventListener("focus", () => {
  password_requirements.style.visibility = "visible";
});

passwordInput.addEventListener("blur", () => {
  password_requirements.style.visibility = "hidden";
});

passwordInput.addEventListener("keyup", (e) => {
  password = e.target.value;

  hightlightRequirement(password, eightCharsMatch, `(?=^.{8,}$)`);
  hightlightRequirement(password, lowercaseMatch, `(?=.*[a-z])`);
  hightlightRequirement(password, uppercaseMatch, `(?=.*[A-Z])`);
  hightlightRequirement(password, numberMatch, `(?=.*[0-9])`);
  hightlightRequirement(password, specialCharMatch, `(?=.*[^A-Za-z0-9])`);
});

confirmPasswordInput.addEventListener("keyup", () => {
  confirmPasswordInput.value == password
    ? confirmPasswordInput.setCustomValidity("")
    : confirmPasswordInput.setCustomValidity("Invalid");
});

function hightlightRequirement(passwordValue, requirement, pattern) {
  passwordValue.match(pattern)
    ? (requirement.style.color = correctColor)
    : (requirement.style.color = incorrectColor);
}
