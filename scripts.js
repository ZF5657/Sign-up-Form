const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#user_email');
const phone = document.querySelector('#phone_number');
const userPass = document.querySelector('#user_password');
const confirmPass = document.querySelector('#confirm_password');
const errorMsg = document.querySelectorAll('.errorMsg');
const submitBtn = document.querySelector('.submit');
const required = document.querySelectorAll('.required');

errorMsg.forEach((message) => {
    message.style.visibility = 'hidden';
});

//function for validating any missing values from the required input fields
const validate = (e) => {
    e.preventDefault();

    required.forEach((input) => {
        if(!input.value) {
            if(!firstName.value) {
                document.querySelector('#firstMsg').style.visibility = 'visible';
                firstName.style = ('border: 2px solid red;');
            }
            else if(!lastName.value) {
                document.querySelector('#lastMsg').style.visibility = 'visible';
                lastName.style = ('border: 2px solid red;');
            }
            else if(!email.value) {
                document.querySelector('#emailMsg').style.visibility = 'visible';
                email.style = ('border: 2px solid red;');
            }
            else if(!userPass.value) {
                document.querySelector('#passMsg').style.visibility = 'visible';
                userPass.style = ('border: 2px solid red;');
            }
            else if(confirmPass.value != userPass.value) {
                document.querySelector('#confirmMsg').style.visibility = 'visible';
                confirmPass.style = ('border: 2px solid red;');
            }
        }
    })
}

//removes visible errors once input has value
firstName.addEventListener('input', () => {
    if(firstName.value.length > 0) {
        document.querySelector('#firstMsg').style.visibility = 'hidden';
        firstName.style = ('border: 2px solid #2e2e2e;');
        firstName.value = firstName.value.replace(/[0-9]/g, '')
    }
})

lastName.addEventListener('input', () => {
    if(lastName.value.length > 0) {
        document.querySelector('#lastMsg').style.visibility = 'hidden';
        lastName.style = ('border: 2px solid #2e2e2e;');
        lastName.value = lastName.value.replace(/[0-9]/g, '')
    }
})


const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);

    if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}
};

phone.addEventListener('keydown', enforceFormat);
phone.addEventListener('keyup', formatToPhone);

phone.addEventListener('input', () => {
    if(phone.value.length > 0 && phone.value.length < 16) {
        document.querySelector('#phoneMsg').style.visibility = 'visible';
        phone.style = ('border: 2px solid red;');
    }
    else {
        document.querySelector('#phoneMsg').style.visibility = 'hidden';
        phone.style = ('border: 2px solid #2e2e2e;');
    }
})

email.addEventListener('input', () => {
    if(!email.value.includes(".com") && email.value.length > 0) {
        document.querySelector('#emailMsg').style.visibility = 'visible';
        email.style = ('border: 2px solid red;');
    }
    else {
        document.querySelector('#emailMsg').style.visibility = 'hidden';
        email.style = ('border: 2px solid #2e2e2e;');
    }
})

userPass.addEventListener('input', () => {
    if(userPass.value.length > 0) {
        document.querySelector('#passMsg').style.visibility = 'hidden';
        userPass.style = ('border: 2px solid #2e2e2e;');
    }
})

confirmPass.addEventListener('input', () => {
    if(confirmPass.value != userPass.value) {
        document.querySelector('#confirmMsg').style.visibility = 'visible';
        confirmPass.style = ('border: 2px solid red;');
    }
    else if(confirmPass.value == userPass.value && confirmPass.value.length > 0) {
        document.querySelector('#confirmMsg').style.visibility = 'hidden';
        userPass.style = ('border: 2px solid green;');
        confirmPass.style = ('border: 2px solid green;');
    }
    else {
        confirmPass.style = ('border: 2px solid #2e2e2e;');
        document.querySelector('#confirmMsg').style.visibility = 'hidden';
    }
})


submitBtn.addEventListener('click', validate);