import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [data-cursor], input, textarea, select');
      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer precision ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border flex items-center justify-center transition-colors duration-200"
        animate={{
          x: mousePos.x - (isHovered ? 24 : 14),
          y: mousePos.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          borderColor: isHovered ? '#C8FF00' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(200, 255, 0, 0.08)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-wider text-[#C8FF00] uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center solid precision dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#C8FF00] pointer-events-none"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 800,
        }}
      />
    </div>
  );
};
