import { motion } from "framer-motion";
import {
  FaVideo,
  FaPalette,
  FaHashtag,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaVideo className="text-3xl" />,
    title: "Video Editing",
    description:
      "Professional editing for YouTube, social media, commercials, and promotional videos with smooth transitions, color grading, and premium quality.",
    featured: true,
  },
  {
    icon: <FaPalette className="text-3xl" />,
    title: "Graphic Design",
    description:
      "Creative social media graphics, flyers, brochures, banners, thumbnails, and marketing materials designed to strengthen your brand.",
  },
  {
    icon: <FaHashtag className="text-3xl" />,
    title: "Social Media Management",
    description:
      "Content creation, scheduling, audience engagement, and account management to grow your business across social platforms.",
  },
  {
    icon: <FaLaptopCode className="text-3xl" />,
    title: "Website Development",
    description:
      "Modern, responsive business websites built for speed, performance, SEO, and an outstanding user experience.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            What We Do
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>

          <p className="text-gray-600 text-lg">
            We help businesses grow with professional website development,
            creative graphic design, high-quality video editing, and effective
            social media management.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                service.featured
                  ? "bg-gray-900 text-white shadow-2xl"
                  : "bg-gray-50 text-gray-900 shadow-md hover:shadow-xl"
              }`}
            >
              {service.featured && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  service.featured
                    ? "bg-white/10 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>

              <p
                className={`leading-7 ${
                  service.featured
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;