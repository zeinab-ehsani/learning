let togglePassword = document.querySelector("#togglePassword")
let password = document.querySelector("#password")
const eyeIcon = document.getElementById("eyeIcon")
togglePassword.addEventListener("click", function () {

    const isHidden = password.type === "password";
    password.type = isHidden ? "text" : "password";
    eyeIcon.className = isHidden ? "bi bi-eye" : "bi bi-eye-slash";
})

