import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Let's Build Something Amazing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-blue-100"
        >
          Ready to grow your business? Contact us today and let's discuss your
          next project.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/918398095525"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-10 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow-lg"
        >
          <FaWhatsapp size={22} />
          Chat on WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;