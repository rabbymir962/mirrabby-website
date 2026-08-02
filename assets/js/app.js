/*
=====================================================
MIR RABBY HUMAN RIGHTS - MAIN APP INITIALIZER
=====================================================
*/

console.log('MIR RABBY Human Rights Portal Loaded Successfully | Domain: mirrabbyhumanrights.com');

// Set active class on nav link according to current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') !== '#' && currentPath.includes(link.getAttribute('href'))) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});
