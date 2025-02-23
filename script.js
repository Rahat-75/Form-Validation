document.getElementById('enhancedForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    let isValid = true;

    const name = document.getElementById('name').value;
    if (name === '' || !/^[a-zA-Z ]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Please enter a valid name.';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }


    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        isValid = false;
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    if (phone === '' || !/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    const dob = document.getElementById('dob').value;
    if (dob === '') {
        document.getElementById('dobError').textContent = 'Please enter your date of birth.';
        isValid = false;
    }

    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    if (!genderMale && !genderFemale) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        isValid = false;
    }

    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');

    }
});