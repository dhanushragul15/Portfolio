import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronDown } from 'lucide-react';
import reelVideo from "../assets/videos/reel.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Video play failed: ", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center pt-15 overflow-hidden bg-black text-white">
      {/* Video Background */}
      <video
       ref={videoRef}
       className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-130 transition-opacity duration-1000"
       src={reelVideo}
       autoPlay
       playsInline
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="flex flex-col space-y-6 text-left"
        >

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-5xl font-black tracking-tight leading-none uppercase font-display select-none"
          >
            <span className="block text-white">Dhanush Ragul</span>
          </motion.h1>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-2xl md:text-3xl lg:text-5xl text-outline-white uppercase font-displa"
          >
            <span className="block text-outline-white">Full Stack Dev</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="max-w-md text-sm md:text-base text-white/70 font-light leading-relaxed tracking-wide drop-shadow-md"
          >
            Building high-performance, beautifully interactive web applications. Focused on React.js, Node.js, Tailwind CSS, performance optimization, and premium user experience engineering.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex items-center space-x-6 pt-4"
          >
            <a
              href="#process"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-white text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-100"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Content (Play Reel Button) */}
        <div className="flex flex-col items-center justify-center">
          <motion.button
            onClick={togglePlay}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 35px rgba(255,42,42,0.6)',
              borderColor: '#FF2A2A'
            }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center transition-all duration-500 cursor-pointer group"
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-white group-hover:text-[#FF2A2A] transition-colors" />
            ) : (
              <Play className="w-10 h-10 text-white fill-white translate-x-1 group-hover:text-[#FF2A2A] group-hover:fill-[#FF2A2A] transition-colors" />
            )}
          </motion.button>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-xs font-bold tracking-widest text-white/50 uppercase select-none font-mono"
          >
            {isPlaying ? 'PAUSE' : 'PLAY REEL'}
          </motion.span>
        </div>
      </div>

      {/* Scroll Indicator (Desktop Only) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-white hover:text-[#FF2A2A] transition-colors cursor-pointer"
        >
          <a href="#about" aria-label="Scroll Down">
            <ChevronDown size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
