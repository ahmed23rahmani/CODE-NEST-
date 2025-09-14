// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
});

// ===== FORMULAIRE CONTACT WHATSAPP =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Créer le message WhatsApp
            const whatsappMessage = `Bonjour CODE NEST,

Nouveau message de contact :

👤 Nom : ${name}
📧 Email : ${email}
📱 Téléphone : ${phone || 'Non renseigné'}
🔧 Service : ${service}
💬 Message : ${message}

Merci de me recontacter rapidement.`;

            // Encoder le message pour l'URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Numéro WhatsApp
            const whatsappNumber = '213658546209';
            
            // Créer l'URL WhatsApp
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Ouvrir WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Afficher un message de confirmation
            showNotification('Message envoyé ! Redirection vers WhatsApp...', 'success');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
});

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Ajouter les styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2EA6FF' : '#1f3b55'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Fonction de fermeture
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-fermeture après 5 secondes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ===== BOUTONS DE NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Bouton "Voir nos services"
    const servicesBtn = document.querySelector('.hero-cta .btn-primary');
    if (servicesBtn) {
        servicesBtn.addEventListener('click', function() {
            document.getElementById('formations').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Bouton "Nos réalisations"
    const realisationsBtn = document.querySelector('.hero-cta .btn-secondary');
    if (realisationsBtn) {
        realisationsBtn.addEventListener('click', function() {
            document.getElementById('realisations').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Bouton "Demander un devis" dans le header
    const devisBtn = document.querySelector('.header .btn-primary');
    if (devisBtn) {
        devisBtn.addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Boutons "S'inscrire" dans les formations
    const inscriptionBtns = document.querySelectorAll('.formation-card .btn-primary');
    inscriptionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Les boutons "Consulter" dans les travaux ouvrent maintenant directement les sites
    // via onclick="window.open()" dans le HTML - pas besoin de JavaScript supplémentaire
});

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== PARALLAX EFFECT FOR TECH BACKGROUND =====
window.addEventListener('scroll', function() {
    const techBackground = document.querySelector('.tech-background');
    if (techBackground) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        techBackground.style.transform = `translateY(${rate}px)`;
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.hero-text, .hero-visual, .feature-item');
    animateElements.forEach(el => observer.observe(el));
});

// ===== BUTTON HOVER EFFECTS =====
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== DEVICE MOCKUP INTERACTIONS =====
document.addEventListener('DOMContentLoaded', function() {
    const mockups = document.querySelectorAll('.desktop-mockup, .mobile-mockup, .tablet-mockup');
    
    mockups.forEach(mockup => {
        mockup.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '10';
        });
        
        mockup.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '';
        });
    });
});

// ===== TYPING EFFECT FOR HERO TITLE (OPTIONAL) =====
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 30);
//     }
// });

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations here
}, 16)); // ~60fps

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Skip to main content functionality
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' && !e.shiftKey) {
        const focusableElements = document.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero elements in sequence
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-cta, .hero-features');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Graceful degradation - ensure basic functionality still works
});

// ===== RESPONSIVE IMAGE LOADING =====
function loadResponsiveImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize responsive image loading
document.addEventListener('DOMContentLoaded', loadResponsiveImages);
