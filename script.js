// --- DINÂMICA INTERATIVA AVANÇADA ---

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. FILTRO DINÂMICO PARA A GALERIA DE ARTES VISUAIS
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const itensGaleria = document.querySelectorAll('#galeria-visuais .midia-item');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            this.classList.add('ativo');

            const categoria = this.getAttribute('data-filter');

            itensGaleria.forEach(item => {
                if (categoria === 'todos' || item.getAttribute('data-cat') === categoria) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 2. ABAS INTERATIVAS PARA A SEÇÃO DE LITERATURA
    const botoesAbas = document.querySelectorAll('.aba-btn');
    const conteudosAbas = document.querySelectorAll('.aba-conteudo');

    botoesAbas.forEach(aba => {
        aba.addEventListener('click', function() {
            botoesAbas.forEach(b => b.classList.remove('ativa'));
            this.classList.add('ativa');

            const indiceAlvo = parseInt(this.getAttribute('data-index'));

            conteudosAbas.forEach((conteudo, indice) => {
                if (indice === indiceAlvo) {
                    conteudo.classList.add('ativa');
                } else {
                    conteudo.classList.remove('ativa');
                }
            });
        });
    });

    // 3. SORTEADOR DE FRAGMENTOS LITERÁRIOS
    const fragmentos = [
        "As linhas retas servem para prender, as curvas para libertar.",
        "Uma orquídea suspensa no ar entende de gravidade melhor que qualquer arquiteto.",
        "O carimbo repete a forma, mas a intensidade da tinta é sempre única.",
        "Cenografia não é decorar um palco, é dar corpo ao espaço vazio."
    ];

    const btnSortear = document.getElementById('btn-sortear');
    const elementoTexto = document.getElementById('texto-sorteado');

    if (btnSortear && elementoTexto) {
        btnSortear.addEventListener('click', function() {
            const indiceAleatorio = Math.floor(Math.random() * fragmentos.length);
            elementoTexto.textContent = `"${fragmentos[indiceAleatorio]}"`;
        });
    }

    // 4. SIMULADOR DE DADOS DO ORQUIDÁRIO (SENSORES EM TEMPO REAL)
    const elUmidade = document.getElementById('val-umidade');
    const elTemp = document.getElementById('val-temp');

    function simularDadosEstufa() {
        if (elUmidade && elTemp) {
            const umidadeBase = 70 + (Math.random() * 5 - 2.5);
            const tempBase = 24 + (Math.random() * 2 - 1);
            
            elUmidade.textContent = umidadeBase.toFixed(1) + '%';
            elTemp.textContent = tempBase.toFixed(1) + '°C';
        }
    }
    // Atualiza a simulação dos dados sensores a cada 4 segundos
    setInterval(simularDadosEstufa, 4000);

    // Botão de Rega Física de Teste
    const btnRega = document.getElementById('btn-rega');
    if (btnRega) {
        btnRega.addEventListener('click', function() {
            if (elUmidade) {
                elUmidade.textContent = "85.0% (Aspersores Ativos)";
                elUmidade.style.color = "#3498db";
                
                alert("Sinal de teste enviado! Microaspersores virtuais ativados por 5 segundos.");
                
                setTimeout(() => {
                    elUmidade.style.color = "#2ecc71";
                    simularDadosEstufa();
                }, 5000);
            }
        });
    }

    // 5. DESTAQUE AUTOMÁTICO DO MENU CONTEXTUAL (SCROLL MONITORING)
    const secoes = document.querySelectorAll('section');
    const linksNav = document.querySelectorAll('#menu-principal a');
    
    window.addEventListener('scroll', () => {
        let atual = "";
        secoes.forEach(secao => {
            const secaoTop = secao.offsetTop;
            if (window.pageYOffset >= secaoTop - 120) {
                atual = secao.getAttribute('id');
            }
        });

        linksNav.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${atual}`) {
                link.classList.add('active');
            }
        });
    });
});
