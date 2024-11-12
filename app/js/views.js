document.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var screenPosition = window.innerHeight / 1.3;

    sections.forEach(function(section) {
        var sectionPosition = section.getBoundingClientRect().top;

        if (sectionPosition < screenPosition) {
            section.classList.add('slide-up');
            section.classList.remove('hidden');
        } else {
            section.classList.remove('slide-up');
            section.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        const menuList = document.querySelector('.menu-list');
        menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces del header que apuntan a secciones de la página
    const headerLinks = document.querySelectorAll('header a[href^="#"]');

    headerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            var headerOffset = document.querySelector('header').offsetHeight;
            var elementPosition = target.getBoundingClientRect().top + window.scrollY;
            var offsetPosition = elementPosition - headerOffset - (window.innerHeight / 2 - target.offsetHeight / 2);

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});