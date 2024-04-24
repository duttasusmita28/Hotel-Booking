function generateCAPTCHA() {
  var captcha = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("captcha").innerText = captcha;
}

function validateCaptcha() {
  var userInput = document.getElementById("userInput").value;
  var captcha = document.getElementById("captcha").innerText;

  if (userInput === captcha) {
    alert("CAPTCHA is correct. You can now login.");
    generateCAPTCHA();
  } else {
    alert("Incorrect CAPTCHA. Please try again.");
    document.getElementById("userInput").value = "";
    generateCAPTCHA();
  }
}