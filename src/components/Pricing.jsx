import { motion } from "framer-motion";

const pricing = [
  {
    title: "Long Video Editing",
    price: "€49",
    description: "Professional editing for YouTube, corporate, and long-form videos.",
  },
  {
    title: "Short-form Reels",
    price: "€29",
    description: "High-quality editing for Reels, Shorts, and TikTok videos.",
  },
  {
    title: "Graphic Design",
    price: "€29",
    description: "Social media posts, brochures, banners, and creative designs.",
  },
  {
    title: "Logo Design",
    price: "€149",
    description: "Unique and professional logo designs for your brand.",
  },
  {
    title: "Social Media Management",
    price: "€400",
    description: "Complete management of your social media presence.",
  },
  {
    title: "Website Development",
    price: "€800",
    description: "Modern WordPress, Shopify, and custom websites.",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Pricing
          </h2>

          <p className="mt-4 text-gray-600">
            Transparent pricing with no hidden costs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricing.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-5xl font-bold text-blue-600 my-6">
                {item.price}
              </p>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>

              <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;