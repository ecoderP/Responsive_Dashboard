// Toggle left harmbugger menus
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const logo = document.querySelector('.bx-doughnut-chart');
const codeVotex = document.querySelector('.codevotex');


openMenu.addEventListener('click', open);
closeMenu.addEventListener('click', close);

function open() {
    
    if(openMenu.style.display === 'none') {
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        logo.style.display = 'none';
        codeVotex.style.display = 'none';
        
    } else {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
        logo.style.display = 'block';
        codeVotex.style.display = 'block';
        
    }
    minimiseSideBar();
}
function close() {
    if(closeMenu.style.display === 'none') {
        closeMenu.style.display = 'block';
        openMenu.style.display = 'none';
        logo.style.display = 'block';
        codeVotex.style.display = 'block';
    } else {
        closeMenu.style.display = 'none';
        openMenu.style.display = 'block';
        logo.style.display = 'none';
        codeVotex.style.display = 'none';
    }
    minimiseSideBar()
}
function minimiseSideBar() {
    const hideSideLinks = document.querySelectorAll('.link-item');
    const sideBar = document.getElementById('left-sidebar');
    const searchBtn = document.getElementById('search-btn');
    
    for(i=0; i < hideSideLinks.length; i++) {
        if(openMenu.style.display === 'block') {
            hideSideLinks[i].style.display = 'none';
        } else {
            hideSideLinks[i].style.display = 'block';
        }
        
     }
     if(sideBar.classList.contains('col-md-3')) {
        sideBar.classList.replace('col-md-3', 'col-md-1');
        searchBtn.classList.add('open-state')
    } else {
        sideBar.classList.replace('col-md-1', 'col-md-3');
        searchBtn.classList.remove('open-state')
    }
}


// Toggle mobile menu on right hand side
const horizontalDots = document.getElementById('horizontalDots');
const mobileRightHandMenu = document.getElementById('mobile-menu');

horizontalDots.addEventListener('click', openRightHandMenu);

function openRightHandMenu() {
    if(horizontalDots.classList.contains('horizontal-dots')) {
        horizontalDots.classList.remove('horizontal-dots');
        mobileRightHandMenu.style.display = 'none'
    } else {
        horizontalDots.classList.add('horizontal-dots');
        mobileRightHandMenu.style.display = 'block'
    }
}