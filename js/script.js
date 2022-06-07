let password;

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

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
    : confirmPasswordInput.setCustomValidity("Passwords do not match");
});

function hightlightRequirement(passwordValue, requirement, pattern) {
  passwordValue.match(pattern)
    ? (requirement.style.color = "#5eb458")
    : (requirement.style.color = "#ccc");
}
