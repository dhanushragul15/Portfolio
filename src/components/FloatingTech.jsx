import React from 'react';
import { motion } from 'framer-motion';

// Positions are percentage-based so the layout scales with the container.
const DEFAULT_BADGES = [
  { label: 'React',         top: '6%',  left: '8%',  depth: 1.2, floatDuration: 6.0, floatRange: 10 },
  { label: 'Node.js',       top: '14%', left: '84%', depth: 0.8, floatDuration: 7.2, floatRange: 8  },
  { label: 'Java',          top: '70%', left: '4%',  depth: 1.4, floatDuration: 8.0, floatRange: 12 },
  { label: 'Spring Boot',   top: '82%', left: '80%', depth: 1.0, floatDuration: 6.6, floatRange: 9  },
  { label: 'Tailwind CSS',  top: '2%',  left: '46%', depth: 0.6, floatDuration: 5.5, floatRange: 7  },
  { label: 'Git',           top: '48%', left: '1%',  depth: 1.3, floatDuration: 7.6, floatRange: 10 },
  { label: 'GitHub',        top: '56%', left: '93%', depth: 0.9, floatDuration: 6.9, floatRange: 8  },
  { label: 'REST API',      top: '28%', left: '95%', depth: 1.1, floatDuration: 9.0, floatRange: 11 },
  { label: 'SQL',           top: '92%', left: '38%', depth: 0.7, floatDuration: 7.3, floatRange: 8  },
  { label: 'MongoDB',       top: '0%',  left: '70%', depth: 1.4, floatDuration: 8.4, floatRange: 12 },
];

// mouseX / mouseY are normalized -1..1 relative to the parent container.
export default function FloatingTech({ mouseX = 0, mouseY = 0, badges = DEFAULT_BADGES }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {badges.map((badge, i) => (
        <div
          key={badge.label}
          className="pointer-events-auto absolute"
          style={{ top: badge.top, left: badge.left }}
        >
          {/* Slow ambient float */}
          <motion.div
            animate={{ y: [0, -badge.floatRange, 0] }}
            transition={{
              duration: badge.floatDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.35,
            }}
          >
            {/* Mouse parallax layer, eased separately from the float */}
            <motion.div
              animate={{ x: mouseX * 16 * badge.depth, y: mouseY * 16 * badge.depth }}
              transition={{ type: 'spring', stiffness: 55, damping: 14 }}
            >
              <motion.span
                whileHover={{
                  scale: 1.15,
                  borderColor: 'rgba(255,42,42,0.7)',
                  boxShadow: '0 0 18px rgba(255,42,42,0.35)',
                  color: '#F4F4F4',
                }}
                className="block px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest text-[#D4D4D4]/90 transition-colors cursor-default"
              >
                {badge.label}
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
