// Event listeners

// This adds a "submitted" class to the form upon submission and activates any invalid stylings.
document
  .querySelector(".submit")
  .addEventListener("click", () =>
    document.querySelector(".form-container").classList.add("submitted")
  );

document.querySelector("#confirm-password").addEventListener("input", () => {
  // Grab value of password input box
  let userPassword = document.querySelector("#password");
  let cfmPassword = document.querySelector("#confirm-password");
  if (userPassword.value === cfmPassword.value) {
    console.log("Passwords match.");
    cfmPassword.setCustomValidity("");
  } else {
    console.log("Passwords do not match.");
    cfmPassword.setCustomValidity("Passwords do not match.");
  }
});
