const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener('DOMContentLoaded', () => {
    const mapBg = document.querySelector('.map-bg');
    
    if (mapBg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            mapBg.style.transform = `scale(1.1) translateY(${scrollY * 0.1}px)`;
            
            const opacity = Math.max(0, 0.6 - (scrollY / 1000));
            mapBg.style.opacity = opacity;
        });
    }
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
});

function updateFooterHeight() {
    const footer = document.querySelector('.footer');
    const wrapper = document.querySelector('.main-wrapper');
    if (footer && wrapper) {
        const height = footer.offsetHeight;
        wrapper.style.marginBottom = `${height}px`;
    }
}

window.addEventListener('resize', updateFooterHeight);
window.addEventListener('load', updateFooterHeight);
