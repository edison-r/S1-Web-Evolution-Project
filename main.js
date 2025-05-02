// Menu open/close functionality
document.addEventListener("DOMContentLoaded", function () {
    const menuOpenButton = document.querySelector(".mobile__menu--open");
    const menuCloseButton = document.querySelector(".mobile__menu--close");
    const mobileMenu = document.querySelector(".mobile__menu");
    const body = document.body;

    menuOpenButton.addEventListener("click", function () {
        mobileMenu.classList.add("active");
        menuOpenButton.classList.add("active");
        menuCloseButton.classList.add("active");
        body.classList.add("no-scroll");
    }
    );
    menuCloseButton.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        menuCloseButton.classList.remove("active");
        menuOpenButton.classList.remove("active");
        body.classList.remove("no-scroll");
    }
    );
});

// Tab underline functionality for the articles
document.addEventListener("DOMContentLoaded", function () {
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const tab3 = document.getElementById("tab3");

    tab1.addEventListener("click", function () {
        tab1.classList.add("active");
        tab2.classList.remove("active");
        tab3.classList.remove("active");
    }
    );
    tab2.addEventListener("click", function () {
        tab1.classList.remove("active");
        tab2.classList.add("active");
        tab3.classList.remove("active");
    }
    );
    tab3.addEventListener("click", function () {
        tab1.classList.remove("active");
        tab2.classList.remove("active");
        tab3.classList.add("active");
    }
    );
});

// Articles show/hide functionality
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

// Accordion functionality
document.addEventListener("DOMContentLoaded", function () {
    // Paso 1: Seleccionamos todos los botones de pregunta
    const questions = document.querySelectorAll(".faq__question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            // Paso 2: Localizamos el contenedor padre (faq__item)
            const faqItem = this.closest(".faq__item");

            // Paso 3: Localizamos la respuesta y el icono dentro de ese bloque
            const answer = faqItem.querySelector(".faq__answer");
            const icon = faqItem.querySelector(".faq__icon");

            // Paso 4: Alternamos (mostrar/ocultar) la respuesta
            answer.classList.toggle("hidden");

            // Paso 5: Rotamos el icono si está abierto
            icon.classList.toggle("rotate-180");

            // Paso 6: (opcional) cerrar otros acordeones abiertos
            questions.forEach((otherQuestion) => {
                if (otherQuestion !== this) {
                    const otherItem = otherQuestion.closest(".faq__item");
                    const otherAnswer = otherItem.querySelector(".faq__answer");
                    const otherIcon = otherItem.querySelector(".faq__icon");

                    otherAnswer.classList.add("hidden");
                    otherIcon.classList.remove("rotate-180");
                }
            });
        });
    });
});