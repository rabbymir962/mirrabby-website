document.addEventListener('DOMContentLoaded', function () {
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sideDrawer = document.getElementById('sideDrawer');
    const menuOverlay = document.getElementById('menuOverlay');

    // সাইড মেনু ওপেন করার ফাংশন
    function openMenu() {
        if (sideDrawer && menuOverlay) {
            sideDrawer.classList.add('open');
            menuOverlay.classList.add('active');
        }
    }

    // সাইড মেনু বন্ধ করার ফাংশন
    function closeMenu() {
        if (sideDrawer && menuOverlay) {
            sideDrawer.classList.remove('open');
            menuOverlay.classList.remove('active');
        }
    }

    // ইভেন্ট লিসেনার
    if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
});
