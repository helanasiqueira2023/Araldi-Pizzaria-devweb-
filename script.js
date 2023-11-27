document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('menu-icon');
    button.addEventListener("click", () => {
        const sideBarElement = document.getElementById('side-bar');
        sideBarElement.classList.toggle('open');
        const isOpen = sideBarElement.classList.contains('open')
        console.log('hello world')
    });
    
});
