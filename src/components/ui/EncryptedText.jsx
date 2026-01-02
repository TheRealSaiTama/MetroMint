import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

export default function EncryptedText({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  

  const elementRef = useRef(null);

  useEffect(() => {
    if (!isInView || !elementRef.current) return;

    const element = elementRef.current;
    const originalText = text;
    let startTime = 0;
    let lastFlipTime = 0;
    let animationFrameId;

    const revealDelayMs = 50;
    const flipDelayMs = 50;
    
    let scrambleChars = originalText.split('').map(char => 
        char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
    );

    const animate = (now) => {
        if (!startTime) startTime = now;
        
        const elapsed = now - startTime;
        const revealCount = Math.floor(elapsed / revealDelayMs);
        const totalLength = originalText.length;

        if (revealCount >= totalLength) {
            element.textContent = originalText;
            return;
        }

        if (now - lastFlipTime >= flipDelayMs) {
           for (let i = revealCount; i < totalLength; i++) {
               if (originalText[i] !== ' ') {
                   scrambleChars[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
               }
           }
           lastFlipTime = now;
        }

        let result = "";
        for (let i = 0; i < totalLength; i++) {
            if (i < revealCount) {
                result += originalText[i];
            } else {
                result += scrambleChars[i];
            }
        }

        element.textContent = result;
        animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, text]);

  return (
    <span ref={ref} className={className}>
      <span ref={elementRef}>{text}</span>
    </span>
  );
}
