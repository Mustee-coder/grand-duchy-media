import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";

// Graphic design work — replace with your own files in assets/graphics/
import img1 from "../assets/images/design1.jpg";
import img2 from "../assets/images/design2.jpg";
import img3 from "../assets/images/design3.jpg";
import img4 from "../assets/images/design4.jpg";
import img5 from "../assets/images/design5.jpg";
import img6 from "../assets/images/design6.jpg";

const designs = [img1, img2, img3, img4, img5, img6];

// Single design card: shows a DESIGN badge, opens full view on click
const DesignCard = ({ src, onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    className="group relative shrink-0 w-[280px] sm:w-[340px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg ring-1 ring-black/5"
  >
    <img
      src={src}
      alt="Graphic design work"
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      draggable={false}
    />

    {/* Category badge */}
    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full opacity-90 group-hover:opacity-100 transition-opacity">
      <Palette size={13} />
      DESIGN
    </div>
  </button>
);

// Seamless CSS marquee row (matches Portfolio.jsx / Cinematography.jsx pattern)
const MarqueeRow = ({ items, direction = "left", duration = 30, onOpen }) => {
  const track = [...items, ...items];

  return (
    <div
      className="marquee-viewport overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`marquee-track flex gap-5 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {track.map((src, i) => (
          <DesignCard key={i} src={src} onOpen={() => onOpen(src)} />
        ))}
      </div>
    </div>
  );
};

// Full-view lightbox modal
const Lightbox = ({ src, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close full view"
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <X size={22} />
      </button>

      <motion.img
        initial={{ scale: 0.92 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.92 }}
        onClick={(e) => e.stopPropagation()}
        src={src}
        alt="Full view"
        className="max-w-full max-h-full rounded-xl object-contain"
      />
    </motion.div>
  );
};

const GraphicDesign = () => {
  const [openImage, setOpenImage] = useState(null);

  const topRow = designs.filter((_, i) => i % 2 === 0);
  const bottomRow = designs.filter((_, i) => i % 2 !== 0);

  return (
    <section id="graphic-design" className="py-24 bg-[#eef6fb] overflow-hidden">
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
          <div className="inline-flex items-center gap-2 text-blue-600 uppercase tracking-[4px] font-semibold text-sm">
  <span className="w-6 h-px bg-blue-600" />
  <Palette size={16} />
  Graphics Design
</div>

<h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
  Graphics <span className="text-amber-500">Design</span>
</h2>

<p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
  Creative graphics design for branding, social media, marketing materials, and digital campaigns. Click any image to view it in full size.
</p>
        </motion.div>
      </div>

      {/* Two marquee rows of design work */}
      <div className="space-y-6">
        <MarqueeRow items={topRow} direction="left" duration={30} onOpen={setOpenImage} />
        <MarqueeRow items={bottomRow} direction="right" duration={30} onOpen={setOpenImage} />
      </div>

      {/* Full-view lightbox */}
      <AnimatePresence>
        {openImage && <Lightbox src={openImage} onClose={() => setOpenImage(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default GraphicDesign;
