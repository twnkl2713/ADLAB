// Elements
const form = document.getElementById('registrationForm');
const errorMsg = document.getElementById('errorMsg');
const dobInput = document.getElementById('dob');
const ageInput = document.getElementById('age');

// 1. Auto-Calculate Age Logic
dobInput.addEventListener('change', function() {
    const birthDate = new Date(this.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    ageInput.value = age >= 0 ? age : 0;
});

// 2. Sequential Validation Logic
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page reload

    // Reset error message
    errorMsg.style.display = 'none';
    errorMsg.textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const password = document.getElementById('password').value;
    const confirmPwd = document.getElementById('confirmPassword').value;
    const age = parseInt(ageInput.value);

    // NAME Validation (Starts with Capital, No numbers)
    const namePattern = /^[A-Z][a-zA-Z\s]*$/;
    if (name === "") {
        return showError("Name cannot be empty");
    } else if (!namePattern.test(name)) {
        return showError("Name must start with a Capital letter and contain no numbers");
    }

    // EMAIL Validation (Regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;
    if (email === "") {
        return showError("Email cannot be empty");
    } else if (!email.match(emailPattern)) {
        return showError("Enter a valid email address");
    }

    // TEL Validation (Starts with 7,8,9 and 10 digits)
    const telPattern = /^[789]\d{9}$/;
    if (!telPattern.test(tel)) {
        return showError("TEL must be 10 digits starting with 7, 8, or 9");
    }

    // PASSWORD Validation (Min 6, 1 UC, 1 LC, 1 Digit, 1 Special)
    const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (password.length < 6) {
        return showError("Password must be at least 6 characters");
    } else if (!pwdPattern.test(password)) {
        return showError("Password needs 1 Upper, 1 Lower, 1 Digit, and 1 Special Char");
    }

    if (password !== confirmPwd) {
        return showError("Passwords do not match");
    }

    // AGE Validation (Must be above 18)
    if (isNaN(age) || age < 18) {
        return showError("You must be 18 or older to register");
    }

    // If all pass
    alert("Registration Successful!");
    form.reset();
    ageInput.value = "";
});

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
    window.scrollTo(0, 0); 
    return false;
}