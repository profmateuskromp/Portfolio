// --- ANIMAÇÃO DE ENTRADA SUAVE (EDITORIAL) ---

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os blocos de conteúdo para aplicar a transição ao rolar a página
    const items = document.querySelectorAll('.card, .text-block, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Traz os blocos suavemente para cima, simulando a paginação de uma revista
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes do item chegar ao topo do visor
    });

    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.8s cubic-bezier(0.215, 0.610, 0.355, 1), transform 0.8s cubic-bezier(0.215, 0.610, 0.355, 1)';
        observer.observe(item);
    });
});
