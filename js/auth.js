const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const submitBtn = document.querySelector(".submitBtn");
const error = document.querySelector(".error")

const users = JSON.parse(localStorage.getItem("users"))

console.log(users)


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();


    const isUser = !!users.find(item => item.email === emailInput.value)

    if (emailInput.value !== "" && passwordInput.value !== "") {
        if (isUser) {
            localStorage.setItem("isAuth", "true")
            window.open("../index.html" , "_self")
        } else{
            error.innerHTML ="Данный пользователь не найдень"
        }
        } else {
            error.innerHTML = "Все поля должны быть заполнены"
        }
    })



    window.addEventListener("load" , () => {
        if(localStorage.getItem("isAuth") === "true") {
            window.open("../index.html" , "_self")
        }
    })