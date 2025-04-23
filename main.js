const links = document.querySelectorAll('.articles-nav a');
const articles = document.querySelectorAll('.article');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        // quitar clase active de todos
        links.forEach(l => l.classList.remove('active-tab'));
        articles.forEach(a => a.classList.remove('active'));

        // agregar clase active al que corresponde
        link.classList.add('active-tab');
        const target = document.querySelector(link.getAttribute('href'));
        target.classList.add('active');
    });
});
