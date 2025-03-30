 // Adiciona o efeito de texto animado
 document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('animated-text');
    const text = "I love you";

    // Limpa o conteúdo existente
    textElement.innerHTML = '';

    // Cria spans para cada caractere
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      textElement.appendChild(span);
    });
  });