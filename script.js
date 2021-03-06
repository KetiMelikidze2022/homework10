// form validation
let formElement = document.getElementById('registration');

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    // console.log(event.target);
    let form = event.target;

    //username
    // let username = document.querySelector('[name = "username"]').value;
    let username = document.getElementById('user').value;

    if (username.length < 5 || username == "") {
        errors.username = 'Username can not be empty and  must be more then 5 characters';
    }

    //password
    // let password = document.querySelector('[name = "password"]').value;
    let password = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;

    if (password != password2 || password == "") {
        errors.password2 = 'Password can not be empty and Passwords do not match';
    }

    //radio 
    let gender = false;

    form.querySelectorAll('[name = "gender"]').forEach(element => {
        if (element.checked) {
            gender = true;
        }
    });
        if (!gender) {
            errors.gender = 'Please select your gender';
        }

        
        
        
        
        
        
        
    //chekcbox
    let agree = document.getElementById('agree').checked;
    if (!agree) {
        errors.agree = 'You must agree our terms and conditions';
    }

    form.querySelectorAll('.error-text').forEach(element => {
        element.textContent = '';
    })

    //errors
    for (let item in errors) {
        console.log(item);

        let errorSpan = document.getElementById('error_' + item);
        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }

    }

    if (Object.keys(errors).length == 0) {
        form.submit();
    }

    console.log(errors);


})


