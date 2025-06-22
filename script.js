document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.documentElement; // Seleciona o <html>
    let initialFontSize = getComputedStyle(rootElement).fontSize; // Armazena o tamanho inicial da fonte do HTML

    // Função para alternar o contraste
    const toggleContrast = () => {
        document.body.classList.toggle('high-contrast'); // O alto contraste ainda afeta o body para cores
    };

    // Função para aumentar o tamanho da fonte
    const increaseFontSize = () => {
        const currentSize = parseFloat(getComputedStyle(rootElement).fontSize);
        rootElement.style.fontSize = (currentSize + 2) + 'px'; // Aumenta em 2px
    };

    // Função para diminuir o tamanho da fonte
    const decreaseFontSize = () => {
        const currentSize = parseFloat(getComputedStyle(rootElement).fontSize);
        rootElement.style.fontSize = (currentSize - 2) + 'px'; // Diminui em 2px
    };

    // Função para resetar o tamanho da fonte
    const resetFontSize = () => {
        rootElement.style.fontSize = initialFontSize;
    };

    // Pega os botões pelo ID
    const contrastButton = document.getElementById('toggle-contrast');
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const resetFontButton = document.getElementById('reset-font');

    // Adiciona os event listeners aos botões se eles existirem
    if (contrastButton) {
        contrastButton.addEventListener('click', toggleContrast);
    }

    if (increaseFontButton) {
        increaseFontButton.addEventListener('click', increaseFontSize);
    }

    if (decreaseFontButton) {
        decreaseFontButton.addEventListener('click', decreaseFontSize);
    }

    if (resetFontButton) {
        resetFontButton.addEventListener('click', resetFontSize);
    }
});