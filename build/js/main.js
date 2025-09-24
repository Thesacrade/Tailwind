const initApp = () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        hamburgerButton.classList.toggle('hidden');
        mobileMenu.classList.toggle('hidden');  
    }
    
    hamburgerButton.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);

}    

document.addEventListener('DOMContentLoaded', initApp);