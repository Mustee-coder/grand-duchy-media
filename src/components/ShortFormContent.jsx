import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Volume2, VolumeX, Play, Pause } from "lucide-react";

// Short form clips (reels/shorts style) — replace with your own files in assets/videos/
import short1 from "../assets/videos/short1.mp4";
import short2 from "../assets/videos/short2.mp4";
import short3 from "../assets/videos/short3.mp4";
import short4 from "../assets/videos/short4.mp4";
import short5 from "../assets/videos/short5.mp4";
import short6 from "../assets/videos/short6.mp4";

const clips = [short1, short2, short3, short4, short5, short6];

// Single vertical video card: plays only while visible on screen, muted by default
const VideoCard = ({ src }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
          setPlaying(true);
        } else {
          el.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Toggles audio only — does not affect play state
  const toggleSound = (e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    const isMuted = !muted;
    el.muted = isMuted;
    setMuted(isMuted);
  };

  // Toggles play/pause only — does not affect mute state
  const togglePlay = (e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative shrink-0 w-[220px] sm:w-[260px] h-[260px] sm:h-[260px] rounded-2xl overflow-hidden bg-black shadow-lg ring-1 ring-black/5">
      <video
        ref={videoRef}
        src={src}
        loop
        muted={muted}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Play / Pause — bottom left */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition"
      >
        {playing ? <Pause size={18} /> : <Play size={18} fill="white" />}
      </button>

      {/* Mute / Unmute — bottom right */}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
};

// Seamless CSS marquee row (shared pattern)
const MarqueeRow = ({ items, direction = "left", duration = 34 }) => {
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
          <VideoCard key={i} src={src} />
        ))}
      </div>
    </div>
  );
};

const ShortFormContent = () => {
  const topRow = clips.filter((_, i) => i % 2 === 0);
  const bottomRow = clips.filter((_, i) => i % 2 !== 0);

  return (
    <section id="short-form" className="py-24 bg-[#eef6fb] overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-blue-600 uppercase tracking-[4px] font-semibold text-sm">
            <span className="w-6 h-px bg-blue-600" />
            <PlayCircle size={16} />
            Video Production
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Short-Form <span className="text-amber-500">Content</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
            Engaging short-form videos for TikTok, Instagram Reels, YouTube
            Shorts, Facebook, and social media campaigns.
          </p>
        </motion.div>
      </div>

      <div className="space-y-6">
        <MarqueeRow items={topRow} direction="left" duration={34} />
        <MarqueeRow items={bottomRow} direction="right" duration={34} />
      </div>
    </section>
  );
};

export default ShortFormContent;
