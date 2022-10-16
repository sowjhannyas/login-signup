const login = document.querySelector(".login"),
option1 = document.querySelector(".option1"),
option2 = document.querySelector(".option2"),
email = document.querySelector("#email"),
text = document.querySelector(".text"),
button1 = document.querySelector(".submitLogin"),
button2 = document.querySelector(".submitSignup"),
signup = document.querySelector(".signup");

window.addEventListener('load', () => {
    login.classList.add("show");
    signup.classList.remove("show");
    button.disabled = false;
});

option1.addEventListener("click", ()=>{
    login.classList.remove("show");
    signup.classList.add("show");
});

option2.addEventListener("click", ()=>{
    signup.classList.remove("show");
    login.classList.add("show");
});

email.onkeypress = () =>{
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.value.match(valid)){
        text.classList.add("show");
        button1.disabled = true;
        button2.disabled = true;
    }else{
        text.classList.remove("show");
        button1.disabled = false;
        button2.disabled = false;
    }
};