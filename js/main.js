// Toggle left harmbugger menus
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', open);
closeMenu.addEventListener('click', close);

function open() {
    if(openMenu.style.display === 'none') {
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none'
    } else {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block'
    }
}
function close() {
    if(closeMenu.style.display === 'none') {
        closeMenu.style.display = 'block';
        openMenu.style.display = 'none'
    } else {
        closeMenu.style.display = 'none';
        openMenu.style.display = 'block'
    }
}

// Toggle mobile menu on right hand side
const horizontalDots = document.getElementById('horizontalDots');
const mobileRightHandMenu = document.getElementById('mobile-menu');

horizontalDots.addEventListener('click', openRightHandMenu);

function openRightHandMenu() {
    console.log(2);
    if(horizontalDots.classList.contains('horizontal-dots')) {
        horizontalDots.classList.remove('horizontal-dots');
        mobileRightHandMenu.style.display = 'none'
    } else {
        horizontalDots.classList.add('horizontal-dots');
        mobileRightHandMenu.style.display = 'block'
    }
}