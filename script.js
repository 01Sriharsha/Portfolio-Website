let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');

function validateName() {
    let nameval = document.getElementById('name').value;
    if (nameval.length == 0) {
        nameError.innerHTML = "Name cannot be empty"
        nameError.style.color = "red";
        return false;
    }
    if (!nameval.match(/^[A-Za-z]{5}/)) {
        nameError.innerHTML = "Name not valid"
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
        emailError.innerHTML = "Email cannot be empty"
        emailError.style.color = "red"
        return false;
    }
    if (!emailval.match(/^[A-Za-z0-9]+[@][a-z]{5}[\.][a-z]{3}/)) {
        emailError.innerHTML = "Email not valid"
        emailError.style.color = "red"
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
        messageError.innerHTML = "Message cannot be empty"
        messageError.style.color = "red"
        return false;
    }
    if (!messageval.match(/^[A-Za-z0-9\s\.\,]{30}/)) {
        messageError.innerHTML = "Message should contain atleast 30 characters"
        messageError.style.color = "red"
        return false;
    }
    else {
        messageError.innerHTML = "valid";
        messageError.style.color = "green";
        return true;
    }
}

function validateForm() {
    let submitError = document.getElementById('submit-error');
    if (!validateName() || !validateEmail() || !validateMessage()) {
        let contactform = document.getElementById('contactform');
        contactform.action = "#contactform";
        contactform.method = "";
        submitError.innerHTML = 'Please Fill all Field';
        submitError.style.color = "red";
        return false;
    }
    else {
        submitError.innerHTML = 'Submitting...';
        submitError.style.color = "Green";
    }
}



