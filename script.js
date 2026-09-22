// --- ANIMAÇÕES E INTERAÇÕES SCRIPT ---

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos que vão receber a animação de Fade-in
    const animatables = document.querySelectorAll('.card, .text-block, .timeline-item');
    
    // Configura o observador para ativar o efeito quando o usuário rolar a tela até o item
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1 // Ativa a animação assim que 10% do item estiver visível
    });

    // Aplica o estado inicial oculto em cada elemento e inicia a observação
    animatables.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
});
