let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let submitButton = document.querySelector(".create-account");
let passwordErrorMessage = document.querySelector(".error-message-password");

submitButton.addEventListener("click", (event) => {
  if (password.validity.valid) {
    if (password.value != confirmPassword.value)  {
      passwordErrorMessage.style.display = "block";
      event.preventDefault();
      if (password.validity.valid) {
        password.setCustomValidity("Passwords do not match");
        confirmPassword.setCustomValidity("Passwords do not match");
      }; 
    };
  } else if (password.value == confirmPassword.value)  {
    passwordErrorMessage.style.display = "none";
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
  };
});

function comparePasswords() {
  if (passwordErrorMessage.style.display == "block" &&  password.value == confirmPassword.value) {
    passwordErrorMessage.style.display = "none";
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
  };
}

password.addEventListener("input", comparePasswords);
confirmPassword.addEventListener("input", comparePasswords);
