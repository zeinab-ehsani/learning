let togglePassword = document.querySelector("#togglePassword")
let password = document.querySelector("#password")
const eyeIcon = document.getElementById("eyeIcon")
togglePassword.addEventListener("click", function () {

    const isHidden = password.type === "password";
    password.type = isHidden ? "text" : "password";
    eyeIcon.className = isHidden ? "bi bi-eye" : "bi bi-eye-slash";
})



let formLogin=document.querySelector(".form-login")
let formRegister=document.querySelector(".form-register")

let loginBtn=document.querySelector(".login-btn")
let signinBtn=document.querySelector(".signin-btn")
let imgLogin=document.querySelector(".img-login")

loginBtn.addEventListener("click",function(){

formRegister.classList.add("d-none")
 formLogin.classList.remove("d-none")
loginBtn.classList.add("bg-brand")
signinBtn.classList.remove("bg-brand")
imgLogin.style.backgroundImage = 'url("./assets/img/login/login.svg")'

})
signinBtn.addEventListener("click",function(){

formRegister.classList.remove("d-none")
 formLogin.classList.add("d-none")

signinBtn.classList.add("bg-brand")
loginBtn.classList.remove("bg-brand")
imgLogin.style.backgroundImage = 'url("./assets/img/login/signin.svg")'


})