// Funcionalidad de redirección a subdominios
document.addEventListener('DOMContentLoaded', function() {
    // Botones de selección de perfil
    const profileButtons = document.querySelectorAll('.profile-btn');
    
    profileButtons.forEach(button => {
        button.addEventListener('click', function() {
            const redirect = this.getAttribute('data-redirect');
            redirectToSubdomain(redirect);
        });
    });

    // Click en las tarjetas de perfil también redirige
    const profileCards = document.querySelectorAll('.profile-card');
    profileCards.forEach(card => {
        // Manejar click
        card.addEventListener('click', function(e) {
            // No redirigir si se hace click en el botón (ya tiene su propio handler)
            if (e.target.classList.contains('profile-btn') || e.target.closest('.profile-btn')) {
                return;
            }
            const profile = this.getAttribute('data-profile');
            if (profile === 'profesional') {
                redirectToSubdomain('profesionales');
            } else if (profile === 'empresa') {
                redirectToSubdomain('empresa');
            }
        });
        
        // Manejar tecla Enter para accesibilidad
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const profile = this.getAttribute('data-profile');
                if (profile === 'profesional') {
                    redirectToSubdomain('profesionales');
                } else if (profile === 'empresa') {
                    redirectToSubdomain('empresa');
                }
            }
        });
        
        // Cursor pointer en las tarjetas
        card.style.cursor = 'pointer';
    });

    // Función de redirección
    function redirectToSubdomain(subdomain) {
        // Mostrar estado de carga
        const cards = document.querySelectorAll('.profile-card');
        cards.forEach(card => {
            card.classList.add('loading');
        });

        // Redirigir después de un breve delay para mejor UX
        setTimeout(() => {
            window.location.href = `https://${subdomain}.boletapro.cl`;
        }, 300);
    }

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Aquí puedes agregar la lógica para enviar el formulario
            // Por ejemplo, una llamada a una API
            console.log('Formulario enviado:', formData);
            
            // Mostrar mensaje de éxito (puedes personalizar esto)
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            
            // Limpiar el formulario
            contactForm.reset();
        });
    }

    // Smooth scroll para enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // No hacer scroll si es #seleccion-perfil o #contacto (ya tienen funcionalidad)
            if (href === '#seleccion-perfil' || href === '#contacto') {
                return;
            }
            
            const target = document.querySelector(href);
            if (target && href !== '#') {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Toggle menú móvil
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = nav.classList.toggle('mobile-menu-active');
            this.classList.toggle('active');
            this.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
    }

    // Botones de header
    const loginBtn = document.getElementById('loginBtn');
    const startBtn = document.getElementById('startBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Aquí puedes redirigir a la página de login o mostrar un modal
            // Por ahora, redirige a la sección de selección de perfil
            document.getElementById('seleccion-perfil').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('seleccion-perfil').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Animación de entrada para las tarjetas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a las tarjetas
    const animatedElements = document.querySelectorAll('.profile-card, .feature-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

