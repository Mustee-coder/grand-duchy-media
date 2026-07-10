import { motion } from "framer-motion";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

const plans = [
  {
    title: "Short-form Reels",
    price: "29",
    unit: "/ video",
    features: ["Fast turnaround", "Optimized for TikTok/Reels", "1 revision included"],
  },
  {
    title: "Long Video Editing",
    price: "49",
    unit: "/ video",
    features: ["YouTube & corporate videos", "Color grading & sound", "2 revisions included"],
  },
  {
    title: "Graphic Design",
    price: "29",
    unit: "/ design",
    features: ["Social media posts & brochures", "Clean, premium style", "Fast delivery"],
  },

  {
    title: "Social Management",
    price: "400",
    unit: "/ month",
    features: ["Content calendar", "Posting & engagement", "Monthly performance report"],
  },
  {
    title: "Website Development",
    price: "800",
    unit: "/ project",
    features: ["Custom, WordPress or Shopify", "Mobile-optimized", "1 month free support"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">
            No hidden fees. Pick a service and let's get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-2xl border flex flex-col ${
                p.featured
                  ? "bg-gray-900 text-white border-gray-900 shadow-xl scale-[1.03]"
                  : "bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-lg"
              }`}
            >
              {p.featured && (
                <span className="self-start bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Popular
                </span>
              )}

              <h3 className="text-lg font-bold mb-1">{p.title}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-extrabold">€{p.price}</span>
                <span
                  className={`text-sm mb-1 ${
                    p.featured ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {p.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <FaCheck
                      className={`mt-1 flex-shrink-0 ${
                        p.featured ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                    <span className={p.featured ? "text-gray-300" : "text-gray-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/918398095525"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3 rounded-full font-semibold transition ${
                  p.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                <FaWhatsapp />
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
