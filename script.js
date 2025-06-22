document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Função para alternar o contraste
    const toggleContrast = () => {
        body.classList.toggle('high-contrast');
    };

    // Função para aumentar o tamanho da fonte
    const increaseFontSize = () => {
        const currentSize = parseFloat(getComputedStyle(body).fontSize);
        body.style.fontSize = (currentSize + 2) + 'px'; // Aumenta em 2px
    };

    // Função para diminuir o tamanho da fonte
    const decreaseFontSize = () => {
        const currentSize = parseFloat(getComputedStyle(body).fontSize);
        body.style.fontSize = (currentSize - 2) + 'px'; // Diminui em 2px
    };

    // Adiciona botões (você precisa criá-los no HTML com IDs específicos)
    const contrastButton = document.getElementById('toggle-contrast');
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const resetFontButton = document.getElementById('reset-font'); // Adicionar um botão de reset de fonte

    if (contrastButton) {
        contrastButton.addEventListener('click', toggleContrast);
    }

    if (increaseFontButton) {
        increaseFontButton.addEventListener('click', increaseFontSize);
    }

    if (decreaseFontButton) {
        decreaseFontButton.addEventListener('click', decreaseFontSize);
    }

    // Se você tiver um botão para resetar a fonte ao tamanho inicial
    if (resetFontButton) {
        // Armazenar o tamanho de fonte inicial ao carregar a página
        const initialFontSize = getComputedStyle(body).fontSize;
        resetFontButton.addEventListener('click', () => {
            body.style.fontSize = initialFontSize;
        });
    }
});