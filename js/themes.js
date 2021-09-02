const oceansTheme = document.getElementById('oceans_theme');
const pinkyTheme = document.getElementById('pinky_theme');
const defaultTheme = document.getElementById('default_theme');
const linkTheme = document.querySelector('#link_theme');

// Grab For mobile //------------------
const oceansMobile = document.querySelector('.oceans_mobile');
const pinkyMobile = document.querySelector('.pinky_mobile');
const defaultMobile = document.querySelector('.default_mobile');

// Oceans Theme Toggle //------------
oceansTheme.addEventListener('click', oceans);
oceansMobile.addEventListener('click', oceans);

function oceans() {
    if(linkTheme.getAttribute('href') !== 'css/oceans.css') {
        linkTheme.href = 'css/oceans.css';
        document.body.classList.add('oceansIsLive');    
    }
}
// Pinky Theme Toggle // ------------
pinkyTheme.addEventListener('click', pinky);
pinkyMobile.addEventListener('click', pinky);
function pinky() {
    if(linkTheme.getAttribute('href') !== 'css/pinky.css') {
        linkTheme.href = 'css/pinky.css';
        document.body.classList.add('pinkyIsLive');
    }
}
// Default Theme Toggle // -------------
defaultTheme.addEventListener('click', change);
defaultMobile.addEventListener('click', change);
function change() {
    if(linkTheme.getAttribute('href') !== 'css/default.css') {
        linkTheme.href = 'css/default.css';
    }
}