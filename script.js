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

    class EncryptedText {
        constructor(element) {
            this.element = element;
            this.originalText = element.textContent.trim();
            this.charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";
            this.revealDelayMs = 50;
            this.flipDelayMs = 50;
            this.startTime = 0;
            this.lastFlipTime = 0;
            this.scrambleChars = [];
            this.isAnimating = false;
            this.animationFrameId = null;
        }

        generateRandomCharacter() {
            return this.charset[Math.floor(Math.random() * this.charset.length)];
        }

        generateGibberish(text) {
            return text.split('').map(char => 
                char === ' ' ? ' ' : this.generateRandomCharacter()
            ).join('');
        }

        stop() {
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId);
                this.animationFrameId = null;
            }
            this.isAnimating = false;
        }

        start() {
            this.stop(); 
            this.isAnimating = true;
            this.startTime = performance.now();
            this.lastFlipTime = this.startTime;
            this.scrambleChars = this.generateGibberish(this.originalText).split('');
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }

        animate(now) {
            if (!this.isAnimating) return;

            const elapsed = now - this.startTime;
            const revealCount = Math.floor(elapsed / this.revealDelayMs);
            const totalLength = this.originalText.length;

            if (revealCount >= totalLength) {
                this.element.textContent = this.originalText;
                this.isAnimating = false;
                this.animationFrameId = null;
                return;
            }

            if (now - this.lastFlipTime >= this.flipDelayMs) {
               for (let i = revealCount; i < totalLength; i++) {
                   if (this.originalText[i] !== ' ') {
                       this.scrambleChars[i] = this.generateRandomCharacter();
                   }
               }
               this.lastFlipTime = now;
            }

            let result = "";
            for (let i = 0; i < totalLength; i++) {
                if (i < revealCount) {
                    result += this.originalText[i];
                } else {
                    result += this.scrambleChars[i];
                }
            }

            this.element.textContent = result;
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }
    }

    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!entry.target.__encryptedEffect) {
                    entry.target.__encryptedEffect = new EncryptedText(entry.target);
                }
                entry.target.__encryptedEffect.start();
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.value-word').forEach(el => {
        textObserver.observe(el);
    });
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
