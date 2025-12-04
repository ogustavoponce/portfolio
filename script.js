// Inicializar AOS (Animate On Scroll) Library
// Isso faz os elementos aparecerem suavemente quando você rola a página
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true, // Animação roda apenas uma vez para não ficar irritante
        offset: 100, // Começa a animar 100px antes do elemento aparecer
        duration: 800,
        easing: 'ease-out-cubic',
    });
});

// Menu Mobile (Simples e funcional)
const navbar = document.querySelector('#navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(2, 11, 22, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(2, 11, 22, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// Efeito Glitch no Título (Opcional, dá um toque Cyberpunk)
const title = document.querySelector('h1');
// Você pode adicionar lógica de glitch aqui se quiser algo mais avançado,
// mas o CSS já cuida da maior parte do visual.

// Form Submission Mockup (Para testar o botão)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Enviado com Sucesso!';
        btn.style.background = '#00ff88';
        btn.style.color = '#000';
        form.reset();
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.color = '';
            btn.style.opacity = '1';
        }, 3000);
    }, 2000);
});