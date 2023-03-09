const form = document.querySelector("#contactform");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");



    function formValidation () {

        event.preventDefault();
    
    
        if (checkLength(name.value, 0) === true){
            nameError.style.display = "none";
            successfullCheck(name);
        }
        else {
            nameError.style.display = "block";
        } 
    
        if(emailValidation(email.value) === true) {
            emailError.style.display = "none";
            successfullCheck(email);
        }
        else {
            emailError.style.display = "block";
        }
    
        if (checkLength(message.value, 3) === true){
            messageError.style.display = "none";
            successfullCheck(message);
        }
        else {
            messageError.style.display = "block";
        } 
    }
    
    form.addEventListener("submit", formValidation);
    
    function checkLength(value, length) {
        if (value.trim().length > length) {
            return true;
        }
        else {
            return false;
        }
    }
    
    function emailValidation (email) {
        const sym = /\S+@\S+\.\S+/;
        const pattern = sym.test(email);
        return pattern;
    }



