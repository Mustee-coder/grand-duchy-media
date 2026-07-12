import { motion } from "framer-motion";
import { Link2 } from "lucide-react";




import GraphicDesign from "./GraphicDesign"
import Cinematography from "./Cinematography"
import LongFormContent from "./LongFormContent"
import ShortFormContent from "./ShortFormContent"




// Website Images
import web1 from "../assets/websites/kodingtree.jpg";
import web2 from "../assets/websites/zawajon.jpg";
import web3 from "../assets/websites/vpcstaffing.jpg";
import web4 from "../assets/websites/toothfit.jpg";
import web5 from "../assets/websites/barickadvisors.jpg";
import web6 from "../assets/websites/sapmotors.jpg";

const websites = [
  { title: "KodingTree", image: web1, url: "https://kodingtree.com" },
  { title: "Zawajon", image: web2, url: "https://zawajon.com" },
  { title: "VPC Staffing", image: web3, url: "https://www.vpcstaffing.com" },
  { title: "ToothFit", image: web4, url: "https://toothfit.in" },
  { title: "Barick Advisors", image: web5, url: "https://www.barickadvisors.com" },
  { title: "SAP Motors", image: web6, url: "https://www.sapmotors.com" },
];

// Split into two rows so each marquee has its own set of cards
const topRow = websites.filter((_, i) => i % 2 === 0);
const bottomRow = websites.filter((_, i) => i % 2 !== 0);

// Single browser-preview card used inside the marquee
const SiteCard = ({ site }) => (
  <a
    href={site.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block w-[280px] sm:w-[220px] shrink-0 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white hover:shadow-2xl transition-shadow duration-300"
  >
    {/* Browser chrome */}
    <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
    </div>

    {/* Site preview */}
    <div className="relative h-52 overflow-hidden bg-gray-50">
      <img
        src={site.image}
        alt={site.title}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        draggable={false}
      />

      {/* LIVE SITE badge */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
        <Link2 size={13} />
        LIVE SITE
      </div>
    </div>

    {/* Title strip */}
    <div className="px-4 py-3 bg-white">
      <h4 className="font-bold text-gray-900 text-base truncate">{site.title}</h4>
    </div>
  </a>
);

// Continuous, seamless CSS-driven marquee row (no slide-based delay/jerk)
const MarqueeRow = ({ items, direction = "left", duration = 30 }) => {
  // Duplicate the set so the loop from -50% back to 0% is invisible
  const track = [...items, ...items];

  return (
  
  
  
  
    <div className="marquee-viewport overflow-hidden">
      <div
        className={`marquee-track flex gap-5 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {track.map((site, i) => (
          <SiteCard key={`${site.title}-${i}`} site={site} />
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
  <>
  
    
    <section id="portfolio" className="py-24 bg-[#eef6fb] overflow-hidden">
        
       <div className="text-center mb-16">
  <span className="text-blue-600 uppercase tracking-[5px] font-semibold text-sm">
    Our Work
  </span>

  <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
    Our <span className="text-amber-500">Portfolio</span>
  </h2>

  <p className="mt-4 max-w-2xl mx-auto text-gray-600">
    Explore our creative services, including video production, social media marketing,
    graphic design, and website development.
  </p>
</div>

<LongFormContent />
<ShortFormContent />
<Cinematography />
<GraphicDesign />
        
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left var(--marquee-duration) linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right var(--marquee-duration) linear infinite;
        }
        .marquee-viewport:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left, .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <span className="inline-block text-blue-600 uppercase tracking-[5px] font-semibold text-sm">
  Website Development
</span>

<h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
  Website <span className="text-amber-500">Development</span>
</h2>

<div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6" />

<p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
  Modern, responsive, and high-performance websites built for businesses, startups, and brands. Click any project below to explore the live website.
</p>
        </motion.div>
      </div>

      {/* Two marquee rows, scrolling in opposite directions, full-bleed, no delay/jerk */}
      <div className="space-y-6">
        <MarqueeRow items={topRow} direction="left" duration={28} />
        <MarqueeRow items={bottomRow} direction="right" duration={28} />
      </div>
    </section>
    </>
  );
};

export default Portfolio;
