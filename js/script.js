const password = document.getElementById("password");
const password_requirements = document.getElementById("form-infos");

const eightCharsMatch = document.querySelector("#form-infos li:nth-child(1)");
const lowercaseMatch = document.querySelector("#form-infos li:nth-child(2)");
const uppercaseMatch = document.querySelector("#form-infos li:nth-child(3)");
const numberMatch = document.querySelector("#form-infos li:nth-child(4)");
const specialCharMatch = document.querySelector("#form-infos li:nth-child(5)");

const correctColor = "#5eb458";
const incorrectColor = "#ccc";

password.addEventListener("focus", () => {
  password_requirements.style.visibility = "visible";
});

password.addEventListener("blur", () => {
  password_requirements.style.visibility = "hidden";
});

password.addEventListener("keyup", (e) => {
  const password = e.target.value;

  password.match("(?=^.{8,}$)")
    ? (eightCharsMatch.style.color = correctColor)
    : (eightCharsMatch.style.color = incorrectColor);

  password.match(`(?=.*[a-z])`)
    ? (lowercaseMatch.style.color = correctColor)
    : (lowercaseMatch.style.color = incorrectColor);

  password.match(`(?=.*[A-Z])`)
    ? (uppercaseMatch.style.color = correctColor)
    : (uppercaseMatch.style.color = incorrectColor);

  password.match(`(?=.*[0-9])`)
    ? (numberMatch.style.color = correctColor)
    : (numberMatch.style.color = incorrectColor);

  password.match(`(?=.*[^A-Za-z0-9])`)
    ? (specialCharMatch.style.color = correctColor)
    : (specialCharMatch.style.color = incorrectColor);
});
