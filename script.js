document.getElementById("generate-btn").addEventListener("click", generatePassword);
document.getElementById("theme-toggle").addEventListener("change", updateTheme);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard);

function generatePassword() {
  const length = document.getElementById("password-length").value;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characterPool = "";
  if (includeUppercase) characterPool += uppercase;
  if (includeLowercase) characterPool += lowercase;
  if (includeNumbers) characterPool += numbers;
  if (includeSymbols) characterPool += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
  }

  document.getElementById("password-output").textContent = password;
  document.getElementById("copy-btn").style.display = "inline-block";
}

function copyToClipboard() {
  const password = document.getElementById("password-output").textContent;

  if (password) {
    navigator.clipboard.writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch(err => {
        console.error("Error copying text: ", err);
        alert("Failed to copy password.");
      });
  }
}

function updateTheme() {
  const theme = document.getElementById("theme-toggle").value;
  const body = document.body;
  const container = document.querySelector(".container");
  const button = document.querySelector("button");

  body.classList.remove("light-mode", "dark-mode", "system-mode");
  container.classList.remove("light-mode", "dark-mode", "system-mode");
  button.classList.remove("light-mode", "dark-mode", "system-mode");

  if (theme === "light") {
    body.classList.add("light-mode");
    container.classList.add("light-mode");
    button.classList.add("light-mode");
  } else if (theme === "dark") {
    body.classList.add("dark-mode");
    container.classList.add("dark-mode");
    button.classList.add("dark-mode");
  } else {
    body.classList.add("system-mode");
    container.classList.add("system-mode");
    button.classList.add("system-mode");
  }
}

(function () {
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.getElementById("theme-toggle").value = "system"; 
  updateTheme(); 
})();
