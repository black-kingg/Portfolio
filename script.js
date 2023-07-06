window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('window-scrolled', window.scrollY > 0);
    }
});