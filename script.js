document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const passwordLengthInput = document.getElementById("passwordLength");
    const passwordLengthLabel = document.getElementById("passwordLengthLabel");

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.body.setAttribute("data-theme", systemTheme);
  
    themeToggle.addEventListener("change", () => {
      const theme = themeToggle.checked ? "dark" : "light";
      document.body.setAttribute("data-theme", theme);
    });
  
    passwordLengthInput.addEventListener("input", (e) => {
      passwordLengthLabel.textContent = e.target.value;
    });
  });
  
  function generatePassword() {
    const length = document.getElementById("passwordLength").value;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
  
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=<>?";
  
    let characters = lowerCaseLetters;
  
    if (includeUppercase) characters += upperCaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    document.getElementById("password").value = password;
  }
  
  function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
  