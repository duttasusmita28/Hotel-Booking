// Add event listener to the reset-password-form on the reset.html page
document.addEventListener('DOMContentLoaded', function() {
    const resetPasswordForm = document.getElementById('reset-password-form');
    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle the logic for verifying security questions and resetting the password here
            // You can access form fields using document.getElementById('element-id').value
            // After resetting the password, you may want to redirect the user back to the login page
            // window.location.href = 'login.html';
        });
    }
});
