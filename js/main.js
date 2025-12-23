/* ===================================
   NaviSolution Website JavaScript
   Interactive Features & Animations
   =================================== */

// === DOM Elements ===
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const canvas = document.getElementById('particles');
const ctx = canvas ? canvas.getContext('2d') : null;

// === Navbar Scroll Effect ===
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// === Mobile Menu Toggle ===
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// === Smooth Scrolling ===
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// === Active Link Highlighting ===
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// === Particle Animation ===
if (canvas && ctx) {
    let particles = [];
    let animationId;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 217, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initParticles() {
        particles = [];
        const particleCount = window.innerWidth > 768 ? 80 : 40;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.3;
                    ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        animationId = requestAnimationFrame(animate);
    }
    
    initParticles();
    animate();
}

// === Typing Effect for Hero Subtitle ===
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const texts = [
        'Developing Apps for the Future',
        'Creating Innovative Solutions',
        'Building Tomorrow\'s Technology',
        'Transforming Ideas into Reality'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 1000);
}

// === Animated Counters ===
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Trigger counters when visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => {
    counterObserver.observe(stat);
});

// === Scroll Animations ===
const fadeElements = document.querySelectorAll('.service-card, .timeline-item, .portfolio-card, .feature-card, .value-card, .tech-item');

fadeElements.forEach(el => {
    el.classList.add('fade-in');
});

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    scrollObserver.observe(el);
});

// === Portfolio Filtering ===
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        portfolioCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// === Testimonials Carousel ===
const testimonials = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    if (index >= testimonials.length) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = testimonials.length - 1;
    } else {
        currentTestimonial = index;
    }
    
    testimonials[currentTestimonial].classList.add('active');
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        showTestimonial(currentTestimonial - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showTestimonial(currentTestimonial + 1);
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        showTestimonial(currentTestimonial + 1);
    }, 5000);
}

// === Contact Form Validation ===
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Basic validation
        if (!name.value.trim()) {
            isValid = false;
            alert('Please enter your name');
            name.focus();
            e.preventDefault();
            return;
        }
        
        if (!email.value.trim() || !isValidEmail(email.value)) {
            isValid = false;
            alert('Please enter a valid email address');
            email.focus();
            e.preventDefault();
            return;
        }
        
        if (!subject.value.trim()) {
            isValid = false;
            alert('Please enter a subject');
            subject.focus();
            e.preventDefault();
            return;
        }
        
        if (!message.value.trim()) {
            isValid = false;
            alert('Please enter your message');
            message.focus();
            e.preventDefault();
            return;
        }
        
        // If form is valid, it will submit to Formspree
        // You can add a loading state here
        if (isValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        }
    });
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// === Lazy Loading Images ===
const images = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// === Performance Optimization: Debounce Scroll Events ===
let scrollTimeout;
function debounce(func, wait) {
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(scrollTimeout);
            func(...args);
        };
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(later, wait);
    };
}

// === Initialize on DOM Load ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('NaviSolution Website Loaded Successfully! 🚀');
    
    // Add entrance animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
});

// === Easter Egg: Konami Code ===
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 You found the secret! Welcome to the NaviSolution team! 🚀');
        }, 2000);
    }
});

// CSS for rainbow animation (added dynamically)
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
