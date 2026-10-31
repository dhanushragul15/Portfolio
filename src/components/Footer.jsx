import React from 'react';
import { motion } from 'framer-motion';
import FooterMarquee from './FooterMarquee';
import DeveloperCommandCenter from './DeveloperCommandCenter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111111] text-[#F4F4F4] pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[50vh] space-y-6">
        
        {/* Infinite Marquee */}
        <FooterMarquee />

        {/* Developer Command Center — replaces the previous Giant Branding Centerpiece */}
        <DeveloperCommandCenter />

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm border-b border-white/5 pb-12">
          {/* Left Column: Creative Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-[#D4D4D4]">
              <li>Cinematic Production</li>
              <li>Motion Graphics</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Center Column: Experience */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase">
              EXPERIENCE
            </h4>
            <div className="space-y-2">
              <p className="text-[#D4D4D4]"> Fresher </p>
              <a 
                href="#process" 
                className="inline-block text-xs font-mono uppercase tracking-wider underline underline-offset-4 decoration-[#FF2A2A] hover:text-white transition-colors"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Right Column: Availability */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase">
              AVAILABILITY
            </h4>
            <div className="space-y-2 text-xs font-mono uppercase tracking-wider text-[#D4D4D4]">
              <p>Available Worldwide</p>
              <p>Currently in Bangalore</p>
            </div>
          </div>

          {/* Contact */}
          <div
                id="contact"
                className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase">
              CONTACT
            </h4>
            <div className="space-y-3 text-xs font-mono text-[#D4D4D4]">

            {/* Email */}
            <a
             href="mailto:raguldhanush03@gmail.com"
             className="block hover:text-[#FF2A2A] transition-colors"
           >
            📧 raguldhanush03@gmail.com
            </a>

            {/* Phone */}
             <a
             href="tel:+916374483873"
             className="block hover:text-[#FF2A2A] transition-colors"
             >
             📞 +91 6374483873
             </a>

            {/* Location */}
            <p>📍 Bangalore, India</p>
  

            {/* LinkedIn */}
             <a
             href="https://www.linkedin.com/in/your-linkedin-username/"
             target="_blank"
             rel="noopener noreferrer"
             className="block hover:text-[#FF2A2A] transition-colors"
             >
             💼 LinkedIn Profile
             </a>
            </div>
           </div>
        </div>

      </div>
    </footer>
  );
}
