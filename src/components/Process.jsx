import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const processSteps = [
  {
    step: "01",
    title: "House Price Prediction",
    description: "Developed a machine learning-based web application for predicting house prices using property-related features.Implemented data preprocessing, model training, prediction, Flask integration, and responsive frontend development using HTML, CSS, and JavaScript.",
    rotation: "hover:rotate-[2deg] rotate-[1.5deg]",
    align: "right",
    positionClass: "lg:ml-[55%] lg:-translate-y-12"
  },
  {
    step: "02",
    title: "Food Ordering App",
    description: "Developed a food ordering application using Flutter with FastAPI backend and PostgreSQL database integration.relevant property features.Implemented REST APIs, CRUD operations, SQLAlchemy ORM, frontend-backend integration, restaurant man-agement, and order processing",
    rotation: "hover:rotate-[-2deg] rotate-[-2.5deg]",
    align: "left",
    positionClass: "lg:mr-[55%] lg:-translate-y-6"
  },
  {
    step: "03",
    title: "Travel Booking Web Application",
    description: "Developed a travel booking web application that allows users to browse travel packages, view package details, andmake bookings.Implemented a structured booking flow with user authentication, traveller details, package information, andbooking management.",
    rotation: "hover:rotate-[2deg] rotate-[2deg]",
    align: "right",
    positionClass: "lg:ml-[55%] lg:translate-y-6"
  },

];

// Reusable tag card component
const ProcessCard = ({ step, title, description, rotation, align, positionClass, index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      viewport={{ once: false, amount: 0.6 }}
      onViewportEnter={() => setIsActive(true)}
      onViewportLeave={() => setIsActive(false)}
      initial={{ opacity: 0, x: align === 'left' ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}
      className={`relative w-full max-w-md bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-neutral-100 flex flex-col items-start transition-all duration-700 cursor-default select-none ${rotation} ${positionClass} ${
        isActive 
          ? 'bg-[#FF2A2A]! text-white! border-[#FF2A2A] shadow-[0_30px_60px_rgba(255,42,42,0.3)] scale-[1.03] z-10' 
          : 'z-0'
      }`}
    >
      {/* Hole punch detail */}
      <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border shadow-inner ${
        isActive ? 'bg-[#9b1515] border-[#b01e1e]' : 'bg-neutral-100 border-neutral-300'
      }`} />

      {/* Step serifs number */}
      <span className={`font-serif italic text-4xl sm:text-5xl font-bold mb-4 block ${
        isActive ? 'text-white/40' : 'text-[#FF2A2A]'
      }`}>
        {step}
      </span>

      {/* Title */}
      <h3 className={`text-2xl font-black font-display tracking-tight uppercase mb-3 ${
        isActive ? 'text-white' : 'text-neutral-900'
      }`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-sm md:text-base leading-relaxed ${
        isActive ? 'text-white/80' : 'text-neutral-500'
      }`}>
        {description}
      </p>
    </motion.div>
  );
};

export default function Process() {
  const containerRef = useRef(null);
  
  // Track scroll inside container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth draw animation for path length
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <section 
      id="process" 
      ref={containerRef} 
      className="relative bg-white text-neutral-900 py-24 md:py-36 bg-grid-pattern overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto mb-20 md:mb-32">
          
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 tracking-tight leading-none">
              Projects
            </h2>
            
            {/* Sketch hand-drawn arrow (SVG) */}
            <svg 
              className="absolute right-[-40px] md:right-[-60px] top-[-30px] w-12 h-12 md:w-16 md:h-16 text-[#FF2A2A] transform rotate-[15deg] hidden sm:block pointer-events-none" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h13" />
            </svg>
          </div>


        </div>

        {/* Process Timeline Section */}
        <div className="relative min-h-[900px] flex flex-col items-center justify-between py-12">
          {/* Giant Curved Timeline Path (Desktop Only) */}
          <div className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 1200" fill="none" preserveAspectRatio="none">
              {/* Background Path (gray) */}
              <path 
                d="M 500 0 C 850 200, 850 400, 500 600 C 150 800, 150 1000, 500 1200" 
                stroke="#e5e5e5" 
                strokeWidth="4" 
                strokeDasharray="12 8" 
              />
              {/* Active Path (animated red) */}
              <motion.path 
                d="M 500 0 C 850 200, 850 400, 500 600 C 150 800, 150 1000, 500 1200" 
                stroke="#FF2A2A" 
                strokeWidth="4" 
                strokeDasharray="12 8"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Simple Vertical Timeline Path (Mobile Only) */}
          <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-1 h-full lg:hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 1200" fill="none" preserveAspectRatio="none">
              <line x1="50" y1="0" x2="50" y2="1200" stroke="#e5e5e5" strokeWidth="4" strokeDasharray="12 8" />
              <motion.line 
                x1="50" y1="0" x2="50" y2="1200" 
                stroke="#FF2A2A" 
                strokeWidth="4" 
                strokeDasharray="12 8"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Process Steps Cards */}
          <div className="w-full flex flex-col space-y-24 lg:space-y-0 relative z-10">
            {processSteps.map((stepData, index) => (
              <div key={index} className="flex justify-center w-full">
                <ProcessCard {...stepData} index={index} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
