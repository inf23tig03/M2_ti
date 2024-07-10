document.addEventListener("DOMContentLoaded", function() {
    const animationWrapper = document.querySelector('.animation-wrapper');
    const mainContent = document.querySelector('.content');
    const animationDuration = 4500;  

     
    if (!sessionStorage.getItem('animationPlayed')) {
         
        setTimeout(() => {
            animationWrapper.style.display = 'none';  
            mainContent.classList.add('visible');  

             
            sessionStorage.setItem('animationPlayed', 'true');
        }, animationDuration);
    } else {
        
        animationWrapper.style.display = 'none';  
        mainContent.classList.add('visible');  
    }
});
    