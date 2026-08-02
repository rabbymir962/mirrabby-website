/*
=====================================================
MIR RABBY HUMAN RIGHTS - LOADER SCRIPT
=====================================================
*/

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 300);
    }
});
