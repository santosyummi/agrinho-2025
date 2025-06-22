document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleAcessibilidade');
    const body = document.body;

    // Função para alternar o modo
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        // Salva a preferência do usuário no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = 'Modo Claro'; // Altera o texto do botão
        } else {
            localStorage.setItem('theme', 'light');
            toggleButton.textContent = 'Modo Escuro'; // Altera o texto do botão
        }
    }

    // Verifica a preferência do usuário ao carregar a página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }

    // Adiciona o evento de clique ao botão
    toggleButton.addEventListener('click', toggleDarkMode);
});