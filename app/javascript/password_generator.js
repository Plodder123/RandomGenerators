document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generate');
  const passwordInput = document.getElementById('generatedPassword');

  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%-^&*()_+';

  generateButton.addEventListener('click', function() {
      const passwordLength = 14;
      let generatedPassword = '';

      for (let i = 0; i < passwordLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          generatedPassword += characters.charAt(randomIndex);
      }

      passwordInput.value = generatedPassword;

    });
  });


function passwordCopy() {
  const generatedPassword = document.getElementById("generatedPassword");

  if (!generatedPassword) {
    console.error("Generated password element not found.");
    return;
  }

  const passwordText = generatedPassword.value || generatedPassword.textContent;

  navigator.clipboard.writeText(passwordText)
    .then(() => {
      console.log("Password copied to clipboard");

      const message = document.createElement("div");
      message.textContent = "Password copied!";
      message.className = "copy-message";
      document.body.appendChild(message);

      setTimeout(() => document.body.removeChild(message), 3000);
    })
    .catch(err => {
      console.error("Failed to copy password: ", err);
    });
}
