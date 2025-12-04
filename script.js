// 1. Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });
});

// 2. Menu Mobile
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Abrir/Fechar ao clicar no ícone
mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileBtn.classList.toggle('active-icon');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 3. Efeito Navbar ao Scrollar
const navbar = document.querySelector('#navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(2, 11, 22, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        navbar.style.padding = '15px 0';
    } else {
        navbar.style.background = 'rgba(2, 11, 22, 0.85)';
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '20px 0';
    }
});

// 4. Form Mockup
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
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