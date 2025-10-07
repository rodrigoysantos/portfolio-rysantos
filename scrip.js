// Seleciona todos os links do menu que possuem hash
const menuLinks = document.querySelectorAll('nav.menu a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // evita o comportamento padrão do link

        const targetId = this.getAttribute('href'); // pega o id da seção
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Scroll suave
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
})