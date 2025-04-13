document.addEventListener('DOMContentLoaded', function() {
    var contactBtn = document.getElementById('contact-btn'); // Select the contact button
    var popup = document.getElementById('popup');            // Select the popup
    var closeBtn = document.querySelector('.close-btn');     // Select the close button

    // Add click event listener to the contact button
    contactBtn.addEventListener('click', function(event) {
        event.preventDefault();   // Prevent default link behavior
        popup.style.display = 'block';  // Show the popup
    });

    // Add click event listener to the close button
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';  // Hide the popup
    });

    // Add click event listener to the window
    window.addEventListener('click', function(event) {
        if (event.target === popup) {  // If the click is outside the popup content
            popup.style.display = 'none';  // Hide the popup
        }
    });
});
