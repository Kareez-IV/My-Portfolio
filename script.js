
// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('Thank you for your message! We will get back to you soon.');
        form.reset(); // Reset the form fields
    });
});
