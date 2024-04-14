

/*
const toggleButton = document.getElementById('toggle-mode'); 

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});
*/

const themeButton = document.querySelector('.theme-button');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const body = document.body;





themeButton.addEventListener('click', () => {
    if (moonIcon.classList.contains('active')) {
        moonIcon.classList.remove('active');
        sunIcon.classList.add('active');
    } else {
        sunIcon.classList.remove('active');
        moonIcon.classList.add('active');
    }
    body.classList.toggle('dark-mode');
});