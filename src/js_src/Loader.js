document.addEventListener("DOMContentLoaded", function() {
    const animationWrapper = document.querySelector('.animation-wrapper');
    const mainContent = document.querySelector('.content');
    const animationDuration = 4500; // Animation duration in milliseconds (4.5 seconds)

    // Check if the animation has already been played
    if (!sessionStorage.getItem('animationPlayed')) {
        // Hide animation wrapper and show main content after animation duration
        setTimeout(() => {
            animationWrapper.style.display = 'none'; // Hide the animation wrapper
            mainContent.classList.add('visible'); // Show the main content

            // Set the flag in sessionStorage to indicate the animation has been played
            sessionStorage.setItem('animationPlayed', 'true');
        }, animationDuration);
    } else {
        // If animation has already been played, directly show the main content
        animationWrapper.style.display = 'none'; // Hide the animation wrapper
        mainContent.classList.add('visible'); // Show the main content
    }
});
    