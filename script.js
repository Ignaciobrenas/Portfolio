// Navegación suave y efectos de scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // Efecto de header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Animación de secciones al entrar en viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition > sectionTop + 100) {
                section.classList.add('visible');
            }
        });
    });

    // Menú móvil
    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú móvil al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Animación inicial de la primera sección
    setTimeout(() => {
        sections[0].classList.add('visible');
    }, 500);

    // Efecto de escritura para el título principal
    const heroTitle = document.querySelector('.hero-content h1');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);

    // Parallax suave para elementos decorativos
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const decoration = document.querySelector('.bg-decoration');
        if (decoration) {
            decoration.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Smooth scrolling para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});