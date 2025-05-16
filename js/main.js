// Инициализация приложения DOM
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    
    initMusicPlayer();
    
    initBackToTop();
    
    initPreloader();
    
    initModals();
    
    initSectionAnimations();
    
    initRequestForm();
});

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
        
        updateThreeJSBackground();
    });
}

function initMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const volumeSlider = document.getElementById('volumeSlider');
    
    bgMusic.volume = volumeSlider.value / 100;
    
    volumeSlider.addEventListener('input', function() {
        bgMusic.volume = this.value / 100;
    });
    
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            }).catch(error => {
                console.error("Audio playback failed:", error);
            });
        } else {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        }
    });
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const preloaderProgress = document.querySelector('.preloader-progress');
    const preloaderText = document.querySelector('.preloader-text');
    const welcomeIntro = document.querySelector('.welcome-intro');
    const nameIntro = document.querySelector('.name-intro');
    const content = document.querySelector('.content');

    const loadingTexts = [
        "Загрузка ресурсов...",
        "Оптимизация анимаций...",
        "Подготовка 3D моделей...",
        "Инициализация интерфейса...",
        "Почти готово..."
    ];

    let progress = 0;
    let textIndex = 0;

    const loadInterval = setInterval(() => {
        progress += 2;
        preloaderProgress.style.width = `${progress}%`;

        if (progress % 20 === 0 && textIndex < loadingTexts.length) {
            preloaderText.style.opacity = 0;
            setTimeout(() => {
                preloaderText.textContent = loadingTexts[textIndex];
                preloaderText.style.opacity = 1;
                textIndex++;
            }, 300);
        }

        if (progress >= 100) {
            clearInterval(loadInterval);
            preloader.classList.add('fade-out');
            
            setTimeout(() => {
                welcomeIntro.classList.add('active');
                const welcomeTexts = document.querySelectorAll('.welcome-text');
                
                welcomeTexts.forEach((text, index) => {
                    setTimeout(() => {
                        text.classList.add('active');
                    }, index * 500);
                });

                setTimeout(() => {
                    welcomeIntro.classList.add('fade-out');
                    
                    setTimeout(() => {
                        nameIntro.classList.add('active');
                        
                        setTimeout(() => {
                            nameIntro.classList.add('fade-out');
                            
                            setTimeout(() => {
                                content.classList.add('active');
                                
                                setTimeout(() => {
                                    initParticles();
                                    manageParticles();
                                }, 1000);
                                
                            }, 1500);
                        }, 2500);
                    }, 500);
                }, 3000);
            }, 1000);
        }
    }, 50);
}

function initModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    modalOverlays.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

function initSectionAnimations() {
    const sections = document.querySelectorAll('.portfolio-section, .requests-section, .about-photo-section, .gallery-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                if (section.id === 'about') {
                    animateAboutSection();
                }
                else if (section.id === 'projects') {
                    animateProjectsSection();
                }
                else if (section.id === 'photo') {
                    animatePhotoSection();
                }
                else if (section.id === 'gallery') {
                    animateGallerySection();
                }
                else if (section.id === 'requests') {
                    animateRequestsSection();
                }
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

function animateAboutSection() {
    const aboutTexts = document.querySelectorAll('.about-text');
    const skills = document.querySelector('.skills');
    
    aboutTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('active');
        }, index * 300);
    });
    
    setTimeout(() => {
        skills.classList.add('active');
    }, aboutTexts.length * 300);
}

function animateProjectsSection() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('active');
        }, index * 200);
    });
}

function animatePhotoSection() {
    const photoContent = document.querySelector('.photo-content');
    photoContent.classList.add('active');
}

function animateGallerySection() {
    const modelViewer = document.querySelector('.model-viewer');
    modelViewer.classList.add('active');
    init3DModel();
}

function animateRequestsSection() {
    const requestContainer = document.querySelector('.request-container');
    requestContainer.classList.add('active');
}

function initRequestForm() {
    const requestForm = document.getElementById('requestForm');
    
    if (requestForm) {
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('request-name').value;
            const email = document.getElementById('request-email').value;
            const service = document.getElementById('request-service').value;
            const message = document.getElementById('request-message').value;
            const budget = document.getElementById('request-budget').value;
            
            // Здесь можно добавить отправку данных на сервер
            console.log('Форма отправлена:', { name, email, service, message, budget });
            

            alert(`Спасибо, ${name}! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.`);
            
            // Сбрасываем форму
            requestForm.reset();
        });
    }
}

function updateThreeJSBackground() {
    const scene = window.threeJSScene;
    
    if (scene) {
        scene.background = new THREE.Color(
            document.body.classList.contains('dark-mode') ? 0x1a1a1a : 0xf0f0f0
        );
    }
}

window.scrollToSection = function(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};