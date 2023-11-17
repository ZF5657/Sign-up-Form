const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone_number');
const userPass = document.querySelector('#user_password');
const confirmPass = document.querySelector('#confirm_password');
const submitBtn = document.querySelector('.submit');
const required = document.querySelectorAll('.required');

const passCheck = () => {
    if(confirmPass.value != '' && confirmPass.value != userPass.value && userPass.value != '' && userPass.value != confirmPass.value) {
        userPass.style = ('border: 2px solid red')
        confirmPass.style = ('border: 2px solid red')
    }
    else if(userPass.value == '' || userPass.value == '' && confirmPass != ''){
        userPass.style = ('border: 2px solid #2e2e2e')
        confirmPass.style = ('border: 2px solid red')
    }
    else if(confirmPass.value == ''){
        confirmPass.style = ('border: 2px solid #2e2e2e')
    }
    else {
        userPass.style = ('border: 2px solid green')
        confirmPass.style = ('border: 2px solid green')
    }
};
  
userPass.addEventListener('input', () => {
    passCheck();
});

confirmPass.addEventListener('input', () => {
    passCheck();
});