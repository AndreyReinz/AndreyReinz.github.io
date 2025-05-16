
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 50, 
                    density: { 
                        enable: true, 
                        value_area: 1000 
                    } 
                },
                color: { 
                    value: getComputedStyle(document.documentElement)
                        .getPropertyValue('--particle-color')
                        .trim() 
                },
                shape: { 
                    type: "circle", 
                    stroke: { 
                        width: 0, 
                        color: "#000000" 
                    }, 
                    polygon: { 
                        nb_sides: 5 
                    } 
                },
                opacity: { 
                    value: 0.5, 
                    random: false, 
                    anim: { 
                        enable: false, 
                        speed: 1, 
                        opacity_min: 0.1, 
                        sync: false 
                    } 
                },
                size: { 
                    value: 3, 
                    random: true, 
                    anim: { 
                        enable: false, 
                        speed: 40, 
                        size_min: 0.1, 
                        sync: false 
                    } 
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: getComputedStyle(document.documentElement)
                        .getPropertyValue('--particle-color')
                        .trim(),
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { 
                        enable: false, 
                        rotateX: 600, 
                        rotateY: 1200 
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { 
                        enable: true, 
                        mode: "grab" 
                    },
                    onclick: { 
                        enable: true, 
                        mode: "push" 
                    },
                    resize: true
                },
                modes: {
                    grab: { 
                        distance: 140, 
                        line_linked: { 
                            opacity: 1 
                        } 
                    },
                    bubble: { 
                        distance: 400, 
                        size: 40, 
                        duration: 2, 
                        opacity: 8, 
                        speed: 3 
                    },
                    repulse: { 
                        distance: 200, 
                        duration: 0.4 
                    },
                    push: { 
                        particles_nb: 4 
                    },
                    remove: { 
                        particles_nb: 2 
                    }
                }
            },
            retina_detect: true
        });
        
        const particles = document.getElementById('particles-js');
        particles.style.opacity = '0.6';
    } else {
        console.error('Particles.js library not loaded');
    }
}

function manageParticles() {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    
    const homeRect = homeSection.getBoundingClientRect();
    const particles = document.getElementById('particles-js');
    
    if (window.pageYOffset > homeRect.height * 0.8) {
        particles.style.opacity = '0.6';
    } else {
        particles.style.opacity = '0';
    }
}

window.addEventListener('scroll', manageParticles);
window.addEventListener('resize', manageParticles);