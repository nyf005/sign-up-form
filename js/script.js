let password;

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const password_requirements = document.getElementById("password-requirements");

const eightCharsMatch = document.querySelector(
  "#password-requirements li:nth-child(1)"
);
const lowercaseMatch = document.querySelector(
  "#password-requirements li:nth-child(2)"
);
const uppercaseMatch = document.querySelector(
  "#password-requirements li:nth-child(3)"
);
const numberMatch = document.querySelector(
  "#password-requirements li:nth-child(4)"
);
const specialCharMatch = document.querySelector(
  "#password-requirements li:nth-child(5)"
);

const correctColor = "#5eb458";
const incorrectColor = "#ccc";

// Show requirements when password has focus
passwordInput.addEventListener("focus", () => {
  password_requirements.style.display = "block";
  password_requirements.classList.remove("hidden");
});

// Hide requirements when password loses focus
passwordInput.addEventListener("blur", () => {
  password_requirements.style.display = "none";
});

// Highlight requirement when pattern is match
passwordInput.addEventListener("keyup", (e) => {
  password = e.target.value;

  hightlightRequirement(password, eightCharsMatch, `(?=^.{8,}$)`);
  hightlightRequirement(password, lowercaseMatch, `(?=.*[a-z])`);
  hightlightRequirement(password, uppercaseMatch, `(?=.*[A-Z])`);
  hightlightRequirement(password, numberMatch, `(?=.*[0-9])`);
  hightlightRequirement(password, specialCharMatch, `(?=.*[^A-Za-z0-9])`);
});

confirmPasswordInput.addEventListener("keyup", () => {
  // We use setCustomValidity to validate with ("") or invalidate with anything in brackets like ("Invalid")
  confirmPasswordInput.value == password
    ? confirmPasswordInput.setCustomValidity("")
    : confirmPasswordInput.setCustomValidity("Invalid");
});

function hightlightRequirement(passwordValue, requirement, pattern) {
  passwordValue.match(pattern)
    ? (requirement.style.color = correctColor)
    : (requirement.style.color = incorrectColor);
}
