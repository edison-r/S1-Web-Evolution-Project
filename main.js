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

document.addEventListener("DOMContentLoaded", function () {
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const tab3 = document.getElementById("tab3");

    const article1 = document.getElementById("article1");
    const article2 = document.getElementById("article2");
    const article3 = document.getElementById("article3");

    tab1.addEventListener("click", function () {
        article1.classList.add("active");
        article2.classList.remove("active");
        article3.classList.remove("active");
    }
    );
    tab2.addEventListener("click", function () {
        article1.classList.remove("active");
        article2.classList.add("active");
        article3.classList.remove("active");
    }
    );
    tab3.addEventListener("click", function () {
        article1.classList.remove("active");
        article2.classList.remove("active");
        article3.classList.add("active");
    }
    );
});