// Grab the password input field
const passwordField = document.getElementById('password');

// Add an event listener to detect typing in the password field
passwordField.addEventListener('input', function() {
    const passwordValue = passwordField.value;
    const strength = checkPasswordStrength(passwordValue);
    
    // Remove previous classes for weak, medium, and strong
    passwordField.classList.remove('weak', 'medium', 'strong');

    // Add the class based on the password strength
    if (strength === 'weak') {
        passwordField.classList.add('weak');
    } else if (strength === 'medium') {
        passwordField.classList.add('medium');
    } else if (strength === 'strong') {
        passwordField.classList.add('strong');
    }
});

// Function to check password strength
function checkPasswordStrength(password) {
    // Simple regex-based conditions to check for strength
    let strength = 'weak';

    // Weak: less than 6 characters
    if (password.length < 6) {
        return strength;
    }

    // Medium: At least 6 characters, contains letters and numbers
    if (password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
        strength = 'medium';
    }

    // Strong: At least 8 characters, contains letters, numbers, and special characters
    if (password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        strength = 'strong';
    }

    return strength;
}
