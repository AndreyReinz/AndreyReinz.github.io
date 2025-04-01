// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Background triangles animation
const trianglesBg = document.getElementById('trianglesBg');
const colors = ['rgba(255, 90, 95, 0.2)', 'rgba(255, 90, 95, 0.15)', 'rgba(255, 90, 95, 0.1)'];

for (let i = 0; i < 30; i++) {
    const triangle = document.createElement('div');
    triangle.className = 'triangle';
    
    // Random parameters
    const size = Math.random() * 20 + 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.borderLeft = `${size/2}px solid transparent`;
    triangle.style.borderRight = `${size/2}px solid transparent`;
    triangle.style.borderBottom = `${size * 0.866}px solid ${color}`;
    
    // Positioning
    triangle.style.left = `${Math.random() * 100}%`;
    triangle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    triangle.style.animationDelay = `${Math.random() * 5}s`;
    
    trianglesBg.appendChild(triangle);
}

// Gallery slider
const gallerySlider = document.getElementById('gallerySlider');
const gallerySlides = document.querySelectorAll('.gallery-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const galleryDots = document.getElementById('galleryDots');

let currentSlide = 0;
let slideInterval;
const slideTime = 5000; // 5 seconds

// Create navigation dots
gallerySlides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.className = 'gallery-dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
    galleryDots.appendChild(dot);
});

// Go to specific slide
function goToSlide(n) {
    currentSlide = (n + gallerySlides.length) % gallerySlides.length;
    gallerySlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Reset auto-slide timer
    resetInterval();
}

// Next slide
function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Previous slide
function prevSlide() {
    goToSlide(currentSlide - 1);
}

// Reset interval
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideTime);
}

// Button event listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
});

// Start auto-sliding
resetInterval();

// Pause on hover
gallerySlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

gallerySlider.addEventListener('mouseleave', resetInterval);

// Subscription modals
const plusModal = document.getElementById('plusModal');
const premiumModal = document.getElementById('premiumModal');
const planDetailsBtns = document.querySelectorAll('.plan-details-btn');
const modalCloseBtns = document.querySelectorAll('.modal-close');

planDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const plan = btn.getAttribute('data-plan');
        if (plan === 'plus') {
            plusModal.classList.add('active');
        } else if (plan === 'premium') {
            premiumModal.classList.add('active');
        }
    });
});

modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        plusModal.classList.remove('active');
        premiumModal.classList.remove('active');
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === plusModal) {
        plusModal.classList.remove('active');
    }
    if (e.target === premiumModal) {
        premiumModal.classList.remove('active');
    }
});

// Scroll animations for steps
const steps = document.querySelectorAll('.step');

function checkVisibility() {
    steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
        
        if (isVisible) {
            setTimeout(() => {
                step.classList.add('visible');
            }, index * 200);
        }
    });
}

// Check on load and scroll
window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);

// Check first step if already visible
if (steps.length > 0) {
    const firstStep = steps[0];
    const rect = firstStep.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        checkVisibility();
    }
}

// Server status check
function checkServerStatus() {
    // For demo purposes - in a real project this would be an API call
    
    // Russia
    const russiaStatus = document.getElementById('russia-status');
    const russiaStatusText = document.getElementById('russia-status-text');
    const russiaPlayers = document.getElementById('russia-players');
    
    russiaStatusText.textContent = 'Онлайн';
    russiaPlayers.textContent = '78/128';
    
    // USA
    const usaStatus = document.getElementById('usa-status');
    const usaStatusText = document.getElementById('usa-status-text');
    const usaPlayers = document.getElementById('usa-players');
    
    usaStatusText.textContent = 'Онлайн';
    usaPlayers.textContent = '64/128';
}

// Check server status on load and every 30 seconds
window.addEventListener('load', checkServerStatus);
setInterval(checkServerStatus, 30000);
