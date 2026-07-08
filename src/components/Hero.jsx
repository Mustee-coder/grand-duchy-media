
 
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-8"
        >
          Luxembourg Digital Media Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
        >
          Creative.
          <br />
          Strategic.
          <br />
          <span className="text-blue-600">Impactful.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8"
        >
          Helping businesses grow with professional Video Editing,
          Graphic Design, Social Media Management and Premium
          Website Development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="flex flex-wrap justify-center gap-5 mt-10"
        >
          <a
            href="#services"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Get Started
            <FaArrowRight />
          </a>

          <a
            href="https://wa.me/918398095525"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full font-semibold transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;