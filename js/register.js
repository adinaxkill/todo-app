


const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const submitBtn = document.querySelector(".submitBtn");
const error = document.querySelector(".error")


window.addEventListener("load", () => {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]))
    }
})

const users = JSON.parse(localStorage.getItem("users"))


submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    

    const isUser = !!users.find(item => item.email === emailInput.value)


    if (emailInput.value !== "" && passwordInput.value !== "") {
        if (isUser) {
            error.innerHTML = "Такой пользователь уже существует"
        } else {
            const allUsers = JSON.parse(localStorage.getItem("users"));

            localStorage.setItem("users",
            JSON.stringify(
                [
                    ...allUsers,
                    {
                        email: emailInput.value, passwoed: passwordInput.value
                    }
                ]
            )
        )

        }
       
        localStorage.setItem("isAuth", "true")

        window.open("../index.html")

        emailInput.value = ""
        passwordInput.value = ""
    } else {
        error.innerHTML = "Поля не заполнены"
    }

})



window.addEventListener("load", () => {
    if(localStorage.getItem("isAuth") === "true") {
        window.open("../index.html", "_self")

    }
})


