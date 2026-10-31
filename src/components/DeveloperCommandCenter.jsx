import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import FloatingTech from './FloatingTech';

export default function DeveloperCommandCenter() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMouse({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => setMouse({ x: 0, y: 0 }), []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[420px] md:min-h-[430px] flex items-center justify-center py-10 overflow-hidden select-none"
    >
      {/* Subtle dev-grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(244,244,244,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,244,0.6) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />
      {/* Faint red glow anchored behind the card */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(255,42,42,0.08), transparent 60%)',
        }}
      />

      {/* Floating technology badges (desktop/tablet only, stacked below on mobile) */}
      <FloatingTech mouseX={mouse.x} mouseY={mouse.y} />

      {/* Glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        animate={{ x: mouse.x * -8, y: mouse.y * -8 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ borderColor: 'rgba(255,42,42,0.35)' }}
        className="relative z-10 -translate-y-3 w-[88%] sm:w-[420px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-8 py-10 text-center shadow-[0_0_60px_rgba(0,0,0,0.5)]"
      >
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF2A2A]/80 mb-4">
          Developer Command Center
        </p>

        <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-[#F4F4F4] mb-1">
          Dhanush Ragul
        </h3>
        <p className="text-xs font-mono uppercase tracking-widest text-[#D4D4D4]/50 mb-6">
          Full Stack Developer
        </p>

        <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest">
          <motion.span
            animate={{ opacity: hovered ? [1, 0.35, 1] : 1 }}
            transition={{ duration: 1.2, repeat: hovered ? Infinity : 0 }}
            className="h-2 w-2 rounded-full bg-[#FF2A2A]"
          />
          <motion.span
            key={hovered ? 'building' : 'available'}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#D4D4D4]"
          >
            {hovered ? "Let's Build Together" : 'Available for Hire'}
          </motion.span>
        </div>
      </motion.div>

      {/* Mobile fallback: stacked badges under the card since the floating layout is desktop-only */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-2 px-6 pb-2">
        {['React', 'Node.js', 'Java', 'Spring Boot', 'Tailwind CSS', 'Git', 'GitHub', 'REST API', 'SQL', 'MongoDB'].map((label) => (
          <span
            key={label}
            className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[9px] font-mono uppercase tracking-widest text-[#D4D4D4]/50"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
