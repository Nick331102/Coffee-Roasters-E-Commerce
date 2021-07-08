 const navShow = () => {
    const menu = document.querySelector(".menu__toggle")
    const menuLinks = document.querySelector(".nav__links--container")

    menu.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
    });

}
navShow();



