document.addEventListener("DOMContentLoaded", function () {
    const menuOpenButton = document.querySelector(".mobile__menu--open");
    const menuCloseButton = document.querySelector(".mobile__menu--close");
    const mobileMenu = document.querySelector(".mobile__menu");

    menuOpenButton.addEventListener("click", function (event) {
        event.preventDefault();
        mobileMenu.classList.add("active");
    }
    );
    menuCloseButton.addEventListener("click", function (event) {
        event.preventDefault();
        mobileMenu.classList.remove("active");
    }
    );
});
