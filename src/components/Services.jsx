import { motion } from "framer-motion";
import {
  FaVideo,
  FaPaintBrush,
  FaBullhorn,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaVideo size={35} />,
    title: "Video Editing",
    description:
      "Professional editing for YouTube videos, Reels, Ads, and Corporate videos.",
  },
  {
    icon: <FaPaintBrush size={35} />,
    title: "Graphic Design",
    description:
      "Creative logos, social media posts, brochures, and branding materials.",
  },
  {
    icon: <FaBullhorn size={35} />,
    title: "Social Media Management",
    description:
      "Grow your online presence with strategic content and account management.",
  },
  {
    icon: <FaCode size={35} />,
    title: "Website Development",
    description:
      "Modern WordPress, Shopify, and custom websites tailored to your business.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide creative digital solutions that help businesses
            stand out and grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-blue-600 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;