document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card, .text-block, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // Remove os filtros de opacidade e traz o elemento para sua posição de impacto original
                entry.target.style.opacity = '1';
                entry.target.style.transform = entry.target.dataset.originalTransform || 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.05 // Dispara rápido ao menor sinal na tela
    });

    cards.forEach(card => {
        // Armazena a rotação aleatória padrão do CSS para não quebrá-la
        const computedStyle = window.getComputedStyle(card);
        const currentTransform = computedStyle.transform;
        card.dataset.originalTransform = currentTransform === 'none' ? '' : currentTransform;

        // Aplica o estado de transição dramática inicial
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) scale(0.95)';
        card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        observer.observe(card);
    });
});
