function generirajCaptchu() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}
  
function postaviCaptchu() {
    const captchaText = generirajCaptchu();
    document.getElementById("captcha").textContent = captchaText;
    return captchaText;
}

let currentCaptcha = postaviCaptchu();

document.getElementById("refresh-captcha").addEventListener("click", () => {
    currentCaptcha = postaviCaptchu();
    document.getElementById("captcha-message").textContent = "";
    document.getElementById("captcha-input").value = "";
});
  
document.getElementById("verify-captcha").addEventListener("click", () => {
    const userInput = document.getElementById("captcha-input").value;
    const messageElement = document.getElementById("captcha-message");

    if (userInput === currentCaptcha) {
        messageElement.style.color = "green";
        messageElement.textContent = "CAPTCHA verifikacija uspješna!";
    } else {
        messageElement.style.color = "red";
        messageElement.textContent = "Netočan CAPTCHA kod. Pokušaj ponovo!";
    }
});
  