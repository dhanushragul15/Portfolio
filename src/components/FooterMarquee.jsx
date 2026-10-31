import React from 'react';

const ROW_1_ITEMS = [
  'React', 'Node.js', 'Java', 'Spring Boot', 'Python', 'SQL', 'MongoDB',
  'Express', 'REST API', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript',
  'Git', 'GitHub', 'Responsive Design', 'MERN', 'Open To Work',
];

const ROW_2_ITEMS = [
  'Creative Developer', 'Full Stack Developer', 'Clean Code', 'Performance',
  'UI/UX', 'APIs', 'Problem Solver', 'Continuous Learner',
];

function MarqueeRow({ items, direction = 'left', speed = 40 }) {
  // Duplicate content so the loop is seamless.
  const trackItems = [...items, ...items];
  const animationClass = direction === 'left' ? 'footer-marquee-left' : 'footer-marquee-right';

  return (
    <div  className="footer-marquee-row relative overflow-hidden py-3">
      <div
        className={`flex w-max gap-0 whitespace-nowrap ${animationClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {trackItems.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center text-xs md:text-sm font-mono uppercase tracking-widest text-[#D4D4D4]/90 hover:text-[#FF2A2A]/80 transition-colors duration-300"
          >
            {item}
            <span className="text-[#FF2A2A]/30 mx-4 md:mx-6">•</span>
          </span>
        ))}
      </div>
      {/* Edge fade so the loop feels intentional, not clipped */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111111] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111111] to-transparent" />
    </div>
  );
}

export default function FooterMarquee() {
  return (
    <div id="skills" className="w-full space-y-1 border-b border-white/5 pb-3 scroll-mt-24">
      <style>{`
        @keyframes footer-marquee-left-kf {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes footer-marquee-right-kf {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .footer-marquee-left {
          animation-name: footer-marquee-left-kf;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .footer-marquee-right {
          animation-name: footer-marquee-right-kf;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .footer-marquee-row:hover .footer-marquee-left,
        .footer-marquee-row:hover .footer-marquee-right {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-marquee-left,
          .footer-marquee-right {
            animation: none;
          }
        }
      `}</style>
      <MarqueeRow items={ROW_1_ITEMS} direction="left" speed={48} />
      <MarqueeRow items={ROW_2_ITEMS} direction="right" speed={36} />
    </div>
  );
}
