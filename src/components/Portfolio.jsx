import { motion } from "framer-motion";

// Website Screenshots
import web1 from "../assets/websites/kodingtree.jpg";
import web2 from "../assets/websites/zawajon.jpg";
import web3 from "../assets/websites/vpcstaffing.jpg";
import web4 from "../assets/websites/toothfit.jpg";
import web5 from "../assets/websites/barickadvisors.jpg";
import web6 from "../assets/websites/sapmotors.jpg";

// Videos
import video1 from "../assets/videos/web.mp4";
import video2 from "../assets/videos/graphic.mp4";
import video3 from "../assets/videos/social.mp4";
import video4 from "../assets/videos/editing.mp4";

// Thumbnail Images
import thumb1 from "../assets/images/image1.jpg";
import thumb2 from "../assets/images/image2.jpg";
import thumb3 from "../assets/images/image3.jpg";
import thumb4 from "../assets/images/image4.jpg";
import thumb5 from "../assets/images/image5.jpg";
import thumb6 from "../assets/images/image6.jpg";

const websites = [
  {
    title: "KodingTree",
    image: web1,
    url: "https://kodingtree.com",
  },
  {
    title: "Zawajon",
    image: web2,
    url: "https://zawajon.com",
  },
  {
    title: "VPC Staffing",
    image: web3,
    url: "https://www.vpcstaffing.com",
  },
  {
    title: "ToothFit",
    image: web4,
    url: "https://toothfit.in",
  },
  {
    title: "Barick Advisors",
    image: web5,
    url: "https://www.barickadvisors.com",
  },
  {
    title: "SAP Motors",
    image: web6,
    url: "https://www.sapmotors.com",
  },
];

const videos = [
  {
    title: "Website Development",
    src: video1,
    description:
      "Responsive business website built with modern UI, fast performance, and mobile-friendly design.",
  },
  {
    title: "Graphic Design Showcase",
    src: video2,
    description:
      "Creative branding, posters, and motion graphics designed to strengthen brand identity.",
  },
  {
    title: "Social Media Marketing",
    src: video3,
    description:
      "Short-form promotional content created to increase engagement across social media platforms.",
  },
  {
    title: "Commercial Video Editing",
    src: video4,
    description:
      "Professional editing with smooth transitions, color grading, and cinematic storytelling.",
  },
];
const thumbnails = [
  {
    title: "Stop Chasing Money",
    image: thumb1,
    description:
      "High-impact YouTube thumbnail designed to attract more clicks and engagement.",
  },
  {
    title: "Master Anything",
    image: thumb2,
    description:
      "Educational thumbnail with bold typography and eye-catching visuals.",
  },
  {
    title: "Break the Rules",
    image: thumb3,
    description:
      "Creative thumbnail focused on increasing viewer curiosity and click-through rate.",
  },
  {
    title: "Never Use This Hand Gesture",
    image: thumb4,
    description:
      "Attention-grabbing thumbnail designed for educational and awareness content.",
  },
  {
    title: "$60K Per Month",
    image: thumb5,
    description:
      "Business-focused thumbnail highlighting income and entrepreneurship content.",
  },
  {
    title: "Just Copy Me eBook",
    image: thumb6,
    description:
      "Professional promotional thumbnail created for digital product marketing.",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
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
            Explore our latest work in website development, video editing,
            graphic design and social media marketing.
          </p>
        </motion.div>

        {/* Website Development */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900">
            Website Development
          </h3>

          <p className="text-center text-gray-600 mt-3 mb-10">
            Professional websites designed to help businesses grow online.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {websites.map((site, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {site.title}
                  </h3>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Visit Website →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
                {/* Video Editing */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-gray-900">
            Video Editing
          </h3>

          <p className="text-center text-gray-600 mt-3 mb-10">
            Engaging and high-quality videos crafted for brands, businesses,
            and social media.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
           {videos.map((video, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
  >
    <video
      src={video.src}
      controls
      preload="metadata"
      playsInline
      className="w-full h-72 object-cover"
    />

    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">
        {video.title}
      </h3>

      <p className="mt-3 text-gray-600">
        {video.description}
      </p>
    </div>
  </motion.div>
))}
          </div>
        </div>
                {/* Thumbnail Designs */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-gray-900">
            Thumbnail Designs
          </h3>

          <p className="text-center text-gray-600 mt-3 mb-10">
            Eye-catching thumbnails designed to increase clicks, engagement,
            and brand visibility.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {thumbnails.map((thumb, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
  >
    <img
  src={thumb.image}
  alt={thumb.title}
  className="w-full h-72 object-contain bg-white"
/>

    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">
        {thumb.title}
      </h3>

      <p className="mt-3 text-gray-600">
        {thumb.description}
      </p>
    </div>
  </motion.div>
))}
          </div>
        </div>
                {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Next Project?
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-blue-100">
            Whether you need a professional website, engaging videos, creative
            thumbnails, or social media marketing, our team is ready to help
            bring your ideas to life.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;