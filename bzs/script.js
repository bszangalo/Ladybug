document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('acessibilidade-toggle');
    const opcoesMenu = document.getElementById('opcoes-acessibilidade');
    const aumentarFonteBtn = document.getElementById('aumentar-fonte');
    const diminuirFonteBtn = document.getElementById('diminuir-fonte');
    const alternarContrasteBtn = document.getElementById('alternar-contraste');
    const body = document.body;

    // Função para mostrar/esconder opções de acessibilidade
    toggleButton.addEventListener('click', () => {
        // Altera a cor do botão da joaninha
        toggleButton.classList.toggle('preta');
        // Mostra ou esconde o menu de opções
        opcoesMenu.classList.toggle('visivel');
        
        // Atualiza o atributo aria para leitores de tela
        const isVisible = opcoesMenu.classList.contains('visivel');
        toggleButton.setAttribute('aria-expanded', isVisible);
    });

    // Função para aumentar a fonte
    aumentarFonteBtn.addEventListener('click', () => {
        const currentSize = parseFloat(getComputedStyle(body).fontSize);
        body.style.fontSize = `${currentSize + 2}px`;
    });

    // Função para diminuir a fonte
    diminuirFonteBtn.addEventListener('click', () => {
        const currentSize = parseFloat(getComputedStyle(body).fontSize);
        body.style.fontSize = `${currentSize - 2}px`;
    });

    // Função para alternar o contraste
    alternarContrasteBtn.addEventListener('click', () => {
        body.classList.toggle('alto-contraste');
    });
});