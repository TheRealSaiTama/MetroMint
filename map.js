class DotMap {
    constructor() {
        this.canvas = document.getElementById('map-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.dots = [];
        this.width = 0;
        this.height = 0;
        this.image = new Image();
        this.image.src = 'map-mask.png';
        
        this.spacing = 14; 
        this.dotSize = 1.5;
        this.globalScrollX = 0;
        this.scrollSpeed = 0.5;
        
        this.targetWidth = 0;
        this.targetHeight = 0;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => {
             this.resize();
             if (this.imageData) this.createDots(this.imageData, this.targetWidth);
        });
        
        this.image.onload = () => {
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            
            const aspect = this.image.width / this.image.height;
            
            this.targetWidth = window.innerWidth;
            this.targetHeight = this.targetWidth / aspect;
            
            tempCanvas.width = this.targetWidth;
            tempCanvas.height = this.targetHeight;
            
            tempCtx.drawImage(this.image, 0, 0, this.targetWidth, this.targetHeight);
            
            this.imageData = tempCtx.getImageData(0, 0, this.targetWidth, this.targetHeight).data;
            this.createDots(this.imageData, this.targetWidth);
            
            this.animate();
        };
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    createDots(data, width) {
        this.dots = [];
        const h = Math.floor(data.length / (width * 4));
        
        let minY = Infinity;
        let tempDots = [];

        for (let y = 0; y < h; y += this.spacing) {
            for (let x = 0; x < width; x += this.spacing) {
                const index = (Math.floor(y) * Math.floor(width) + Math.floor(x)) * 4;
                if (data[index] > 100) {
                    tempDots.push({
                        x: x,
                        y: y,
                        originalX: x,
                        size: this.dotSize,
                        time: Math.random() * 100,
                        speed: 0.02 + Math.random() * 0.03
                    });
                    if (y < minY) minY = y;
                }
            }
        }
        
        const shiftY = (minY === Infinity) ? 0 : minY;

        this.dots = tempDots.map(dot => ({
            ...dot,
            y: dot.y - shiftY
        }));
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        this.globalScrollX += this.scrollSpeed;
        
        const gap = this.width * 0.25;
        const loopWidth = this.targetWidth + gap; 
        
        this.dots.forEach(dot => {
            dot.time += dot.speed;
            
            let currentX = dot.x - this.globalScrollX;
            currentX = ((currentX % loopWidth) + loopWidth) % loopWidth;
            
            const size = dot.size * (0.8 + Math.sin(dot.time) * 0.4);
            const alpha = 0.3 + Math.sin(dot.time) * 0.2;
            this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            
            for (let k = -1; k <= 1; k++) {
                const drawX = currentX + (k * loopWidth);
                if (drawX > -10 && drawX < this.width + 10) {
                    this.ctx.beginPath();
                    this.ctx.arc(drawX, dot.y, Math.max(0, size), 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DotMap();
});
