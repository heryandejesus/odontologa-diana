document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SELECCIÓN DE ELEMENTOS ---
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    // Definimos navLinks que faltaba:
    const navLinks = document.querySelectorAll('.nav-links a');
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-item');
    const serviceCards = document.querySelectorAll('.service-card');

    // --- 2. LÓGICA DEL MENÚ HAMBURGUESA ---
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark'); 
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars'); 
            }
        });
    }

    // Cerrar menú al tocar un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            const icon = hamburger ? hamburger.querySelector('i') : null;
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        });
    });

    // --- 3. CARRUSEL INFINITO (Una imagen por vez) ---
    let currentIndex = 0;

    if (track && slides.length > 0) {
        function updateCarousel() {
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            const offset = currentIndex * 100;
            track.style.transform = `translateX(-${offset}%)`;
        }
        // Movimiento automático
        setInterval(updateCarousel, 4000);
    }

    // --- 4. ANIMACIÓN DE REVELACIÓN (Scroll Reveal) ---
    const observerOptions = { threshold: 0.15 };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        revealObserver.observe(card);
    });

    console.log("Web de Od. Diana Blanco: JS Corregido y activo.");
});

document.getElementById("year").innerText = new Date().getFullYear();