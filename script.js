document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('menu-icon');
    button.addEventListener("click", () => {
        const testeElement = document.querySelector('.teste');
        if (testeElement.style.left === '-1000px') { 
            testeElement.style.left = '0px';
        } else {
            testeElement.style.left = '-1000px';
        }
    });
});
