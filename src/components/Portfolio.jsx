import { motion } from "framer-motion";

import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";
import img4 from "../assets/images/image4.jpg";
import img5 from "../assets/images/image5.jpg";
import img6 from "../assets/images/image6.jpg";

import video1 from "../assets/videos/web.mp4";
import video2 from "../assets/videos/graphic.mp4";
import video3 from "../assets/videos/social.mp4";
import video4 from "../assets/videos/editing.mp4";

const portfolioItems = [
  {
    type: "video",
    title: "Website Development",
    src: video1,
    description:
      "Modern, responsive websites built for speed, performance, and business growth.",
  },
  {
    type: "image",
    title: "Graphic Design",
    src: img1,
    description:
      "Creative branding, posters, flyers, and social media graphics that stand out.",
  },
  {
    type: "video",
    title: "Graphic Design",
    src: video2,
    description:
      "Professional motion graphics and visual designs tailored to your brand identity.",
  },
  {
    type: "image",
    title: "Video Editing",
    src: img2,
    description:
      "High-quality video editing with cinematic transitions, effects, and color grading.",
  },
  {
    type: "image",
    title: "Social Media Management",
    src: img3,
    description:
      "Managing business social media accounts to increase engagement and reach.",
  },
  {
    type: "video",
    title: "Social Media Content",
    src: video3,
    description:
      "Short-form promotional content designed for Instagram, Facebook, and TikTok.",
  },
  {
    type: "image",
    title: "Website Development",
    src: img4,
    description:
      "Custom web applications with responsive layouts and seamless user experience.",
  },
  {
    type: "video",
    title: "Video Editing",
    src: video4,
    description:
      "Professional editing for commercials, YouTube videos, and promotional campaigns.",
  },
  {
    type: "image",
    title: "Creative Team",
    src: img5,
    description:
      "Our talented team collaborates to deliver innovative digital solutions.",
  },
  {
    type: "image",
    title: "Office Workspace",
    src: img6,
    description:
      "A modern workspace where creativity, technology, and innovation come together.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Portfolio
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            Explore some of our creative work in video editing, graphic
            design, website development, and social media management.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  preload="metadata"
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

               <p className="mt-2 text-gray-600 text-sm">
  {item.description}
</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;