function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm").value;
    let error = document.getElementById("msg");

    error.textContent = "";
    error.style.color = "red";

    if (name.trim() === "") {
        error.textContent = "Name cannot be empty";
        return false;
    }

    if (email.trim() === "") {
        error.textContent = "Email cannot be empty";
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        error.textContent = "Please enter a valid email address";
        return false;
    }

    if (password.trim() === "") {
        error.textContent = "Password cannot be empty";
        return false;
    }

    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters long";
        return false;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match";
        return false;
    }

    alert("Form submitted successfully!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm").value = "";
}
