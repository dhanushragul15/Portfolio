import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.jpg';

// Floating star component for decoration
const FloatingStar = ({ className, delay = 0 }) => (
  <motion.svg
    className={`absolute text-black fill-black w-6 h-6 md:w-8 md:h-8 ${className}`}
    viewBox="0 0 24 24"
    animate={{
      opacity: [0.3, 0.8, 0.3],
      scale: [0.85, 1.15, 0.85],
      y: [0, -8, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </motion.svg>
);

export default function About() {
  return (
    <section id="about" className="relative bg-[#FF2A2A] text-white pt-10 pb-24 md:pt-14 md:pb-35 overflow-hidden">
      {/* Black stars decorations */}
      <FloatingStar className="top-12 left-10 md:left-24" delay={0} />
      <FloatingStar className="top-24 right-12 md:right-32" delay={1.5} />
      <FloatingStar className="bottom-32 left-8 md:left-40" delay={0.8} />
      <FloatingStar className="bottom-20 right-16 md:right-48" delay={2.3} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Lanyard & Developer ID Card */}
          <div className="flex flex-col items-center justify-center relative min-h-[500px]">
            {/* Lanyard Strap (hanging from top) */}
            <div className="absolute top-0 w-3 md:w-4 h-36 md:h-30 bg-neutral-900 rounded-b-md shadow-lg z-10 flex justify-center">
              {/* Metal clip detailing */}
              <div className="absolute bottom-[-15px] w-6 h-6 bg-neutral-700 border-2 border-neutral-800 rounded-md flex items-center justify-center">
                <div className="w-2 h-4 bg-neutral-400 rounded-sm"></div>
              </div>
            </div>

            {/* Suspended ID Card Container with Swinging Motion */}
            <motion.div
              initial={{ rotate: -8, y: 100, opacity: 0 }}
              whileInView={{ rotate: -3, y: 50, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              animate={{
                rotate: [-3, -1.5, -3],
                y: [50, 53, 50]
              }}
              transition={{
                rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                default: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                y: 40,
                transition: { duration: 0.4 } 
              }}
              className="relative w-[280px] sm:w-[320px] bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center z-0 cursor-pointer"
            >
              {/* Slot hole at the top of the card for lanyard clip */}
              <div className="w-12 h-3 bg-black rounded-full mb-6 border border-white/5" />

              {/* Avatar Image Frame */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-[#FF2A2A]/40 mb-6 bg-neutral-800 shadow-inner">
                <img 
                  src={avatar} 
                  alt="Dhanush Ragul" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Dev Pass Details */}
              <div className="w-full text-center space-y-2">
                <div className="text-[10px] font-mono tracking-widest text-[#FF2A2A] uppercase font-bold">
                  CREATIVE DEVELOPER PASS
                </div>
                <h3 className="text-xl font-black font-display tracking-tight text-white uppercase">
                  DHANUSH RAGUL
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  ROLE: FULL STACK DEV
                </p>
                <div className="pt-4 border-t border-neutral-800 flex justify-between items-center text-[9px] font-mono text-neutral-500">
                  <span>ID: DR-9082-SF</span>
                  <span>EXP: 2029</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title, Intro & Technologies */}
          <div className="flex flex-col space-y-8 lg:space-y-12 lg:-ml-12">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-7xl md:text-8xl font-black font-display text-black uppercase leading-none"
              >
                Hello!
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-base sm:text-lg md:text-xl font-light text-white leading-relaxed"
              >
                I am <strong className="font-black uppercase tracking-wide text-black bg-white px-2 py-0.5 rounded">DHANUSH RAGUL</strong>, a passionate creator engineering next-generation, high-performance web products.
                 I build modern, scalable web solutions that blend cutting-edge frontend animations with solid, robust backend architectures.
              </motion.p>
            </div>

            {/* Technology Skills Logos */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-black/60 uppercase font-mono">
                CORE TECHNOLOGY STACK
              </h4>
              
              <div className="flex flex-wrap items-center gap-8 md:gap-12">
                {/* React Icon */}
                <motion.div 
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-900/40 border border-white/10 p-3 shadow-xl backdrop-blur-sm cursor-pointer"
                >
                  <svg className="w-full h-full fill-none stroke-[#61DAFB] stroke-2 animate-spin-[20s]" viewBox="-11.5 -10.23174 23 20.46348">
                    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                    <g stroke="#61DAFB" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                  </svg>
                </motion.div>

                {/* Node.js Icon */}
                <motion.div 
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-900/40 border border-white/10 p-3.5 shadow-xl backdrop-blur-sm cursor-pointer"
                >
                  <svg className="w-full h-full viewBox=0 0 256 288" fill="none" viewBox="0 0 256 288">
                    <path d="M128 0L24 60v120l104 60 104-60V60L128 0z" fill="#333" opacity="0.3"/>
                    <path d="M128 26.5L38.5 78v103l89.5 51.5 89.5-51.5V78L128 26.5z" fill="#33cd56"/>
                    <path d="M128 26.5v206l89.5-51.5V78L128 26.5z" fill="#3e863d"/>
                  </svg>
                </motion.div>

                {/* MongoDB Icon */}
                <motion.div 
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-900/40 border border-white/10 p-3.5 shadow-xl backdrop-blur-sm cursor-pointer"
                >
                  <svg className="w-full h-full fill-[#47A248]" viewBox="0 0 24 24">
                    <path d="M12 0c0 0-4.5 4.5-4.5 8.5C7.5 13.5 12 24 12 24s4.5-10.5 4.5-15.5C16.5 4.5 12 0 12 0zm0 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Torn-paper SVG Divider */}
      <svg 
        viewBox="0 0 1440 120" 
        fill="#ffffff" 
        preserveAspectRatio="none" 
        className="absolute bottom-0 left-0 w-full h-[60px] md:h-[100px] z-20 pointer-events-none"
      >
        <path d="M0,45 L40,55 L85,38 L130,52 L170,35 L215,48 L260,33 L305,50 L350,38 L390,52 L435,42 L480,55 L525,35 L570,48 L615,38 L660,52 L705,33 L750,48 L795,35 L840,55 L885,38 L930,52 L975,35 L1020,48 L1065,33 L1110,50 L1155,38 L1200,52 L1245,35 L1290,48 L1335,33 L1380,50 L1440,38 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}
