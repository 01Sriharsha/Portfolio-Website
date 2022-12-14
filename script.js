let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let nameval = document.getElementById('name').value;
    if (nameval.length == 0) {
        nameError.innerHTML = "*Name cannot be empty";
        nameError.style.color = "red";
        setTimeout(() => {
            nameError.innerHTML = "";
        }, 3000);
        return false;
    }
    if (!nameval.match(/^[A-Za-z\s\.]{4,15}/)) {
        nameError.innerHTML = "*Enter valid name"
        nameError.style.color = "red";
        return false;
    }
    else {
        nameError.innerHTML = "valid"
        nameError.style.color = "green";
        return true;
    }
}

function validateEmail() {
    let emailval = document.getElementById('email').value;
    if (emailval.length == 0) {
        emailError.innerHTML = "Email cannot be empty";
        emailError.style.color = "red";
        setTimeout(() => {
            emailError.innerHTML = "";
        }, 3000);
        return false;
    }
    if (!emailval.match(/^[A-Za-z0-9]+[@][a-z]{5}[\.][a-z]{3}/)) {
        emailError.innerHTML = "*Enter valid email address";
        emailError.style.color = "red";
        return false;
    }
    else {
        emailError.innerHTML = "valid"
        emailError.style.color = "green"
        return true;
    }
}

function validateMessage() {
    let messageval = document.getElementById('textarea').value;
    if (messageval.length == 0) {
        messageError.innerHTML = "*Message cannot be empty";
        messageError.style.color = "red";
        setTimeout(() => {
            messageError.innerHTML = "";
        }, 3000);
        return false;
    }
    if (!messageval.match(/^[A-Za-z0-9\s\.\,@!$#\*\'\"]{25}/)) {
        messageError.innerHTML = "*Message should contain atleast 25 characters";
        messageError.style.color = "red";
        return false;
    }
    else {
        messageError.innerHTML = "valid";
        messageError.style.color = "green";
        return true;
    }
}

function validateForm(event) {
    if (!validateName() && !validateEmail() && !validateMessage() || !validateMessage() || !validateName() ) {
        event.preventDefault();
        submitError.innerHTML = '*One of the field is either empty or not valid';
        submitError.style.color = "red";
        setTimeout(() => {
            submitError.innerHTML = '';
        }, 3000);
        return false;
    }
    else {
        submitError.innerHTML = 'Submitting...';
        submitError.style.color = "Green";
        return true;
    }
}


document.getElementById('btn').addEventListener('click', () => {
    let myform = document.getElementById('contactform');
    if(validateForm()==true){
        nameError.style.display = "none";
        emailError.style.display = "none";
        messageError.style.display = "none";
        submitError.style.display = "none";
        document.getElementById('name').removeAttribute('required');
        document.getElementById('email').removeAttribute('required');
        myform.submit();
    }
    myform.reset();
})