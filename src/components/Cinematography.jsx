import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Film, Volume2, VolumeX, Play, Pause } from "lucide-react";

// Video editing reel clips — replace these with your own files in assets/videos/
import video1 from "../assets/videos/edit1.mp4";
import video2 from "../assets/videos/edit2.mp4";
import video3 from "../assets/videos/edit3.mp4";
import video4 from "../assets/videos/edit4.mp4";
import video5 from "../assets/videos/edit5.mp4";
import video6 from "../assets/videos/edit6.mp4";

const clips = [video1, video2, video3, video4, video5, video6];


// Single vertical video card: plays only while visible on screen, muted by default
const VideoCard = ({ src }) => {
  const videoRef = useRef(null);

  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setPlaying(true);
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  const toggleSound = (e) => {
    e.stopPropagation();

    setMuted((prev) => !prev);
  };

  const togglePlay = (e) => {
    e.stopPropagation();

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative shrink-0 w-[220px] sm:w-[260px] h-[260px] sm:h-[320px] rounded-2xl overflow-hidden bg-black shadow-lg">

      <video
        ref={videoRef}
        src={src}
        loop
        muted={muted}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Sound Button */}
      <button
        onClick={toggleSound}
        className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Play / Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="w-14 h-14 rounded-full bg-black/60 text-white flex items-center justify-center hover:scale-110 transition">
          {playing ? (
            <Pause size={24} />
          ) : (
            <Play size={24} fill="white" />
          )}
        </div>
      </button>
    </div>
  );
};
// Seamless CSS marquee row (matches Portfolio.jsx pattern)
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

const Cinematography = () => {
  const topRow = clips.filter((_, i) => i % 2 === 0);
  const bottomRow = clips.filter((_, i) => i % 2 !== 0);

  return (
    <section id="cinematography" className="py-24 bg-[#eef6fb] overflow-hidden">
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
  <Film size={16} />
  Social Media Marketing
</div>

<h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
  Social Media <span className="text-amber-500">Marketing</span>
</h2>

<p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
  High-performing social media marketing campaigns designed to increase engagement, grow your audience, and boost your brand across all major platforms.
</p>
        </motion.div>
      </div>

      {/* Two marquee rows of vertical video clips */}
      <div className="space-y-6">
        <MarqueeRow items={topRow} direction="left" duration={34} />
        <MarqueeRow items={bottomRow} direction="right" duration={34} />
      </div>
    </section>
  );
};

export default Cinematography;
