import { useEffect, useRef } from 'react';

export default function DotMap() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let dots = [];
    let width = 0;
    let height = 0;
    let animationFrameId;
    let globalScrollX = 0;
    

    const spacing = 14;
    const dotSize = 1.5;
    const scrollSpeed = 0.5;
    
    const image = new Image();
    image.src = '/map-mask.png';
    let targetWidth = 0;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const createDots = (data, w) => {
      dots = [];
      const h = Math.floor(data.length / (w * 4));
      
      let minY = Infinity;
      let tempDots = [];

      for (let y = 0; y < h; y += spacing) {
        for (let x = 0; x < w; x += spacing) {
          const index = (Math.floor(y) * Math.floor(w) + Math.floor(x)) * 4;
          if (data[index] > 100) {
            tempDots.push({
              x: x,
              y: y,
              originalX: x,
              size: dotSize,
              time: Math.random() * 100,
              speed: 0.02 + Math.random() * 0.03
            });
            if (y < minY) minY = y;
          }
        }
      }
      
      const shiftY = (minY === Infinity) ? 0 : minY;
      
      dots = tempDots.map(dot => ({
        ...dot,
        y: dot.y - shiftY
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      globalScrollX += scrollSpeed;
      
      const gap = width * 0.25;
      const loopWidth = targetWidth + gap;
      
      dots.forEach(dot => {
        dot.time += dot.speed;
        
        let currentX = dot.x - globalScrollX;
        const size = dot.size * (0.8 + Math.sin(dot.time) * 0.4);
        const alpha = 0.3 + Math.sin(dot.time) * 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        
        for (let k = -1; k <= 1; k++) {
          const drawX = currentX + (k * loopWidth);
          if (drawX > -10 && drawX < width + 10) {
            ctx.beginPath();
            ctx.arc(drawX, dot.y, Math.max(0, size), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const init = () => {
      resize();
      
      image.onload = () => {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        
        const aspect = image.width / image.height;
        
        targetWidth = window.innerWidth;
        const targetHeight = targetWidth / aspect;
        
        tempCanvas.width = targetWidth;
        tempCanvas.height = targetHeight;
        
        tempCtx.drawImage(image, 0, 0, targetWidth, targetHeight);
        
        const imageData = tempCtx.getImageData(0, 0, targetWidth, targetHeight).data;
        createDots(imageData, targetWidth);
        
        animate();
      };
    };

    init();

    window.addEventListener('resize', resize);
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full" />;
}
