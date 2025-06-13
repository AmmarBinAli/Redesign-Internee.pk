import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Slider from "../components/Slider";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const subtleZoomVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="min-h-screen px-4 py-10 md:py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      {/* ✅ Slider Section */}
      <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
        <Slider />
      </div>

      {/* ✅ Hero Section */}
      <motion.section
        variants={fadeUpVariants}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <motion.h1
          variants={subtleZoomVariants}
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight "
        >
          Welcome to <span className="text-green-600 dark:text-green-400 ">Internee.PK</span>
        </motion.h1>
        <motion.p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
          Pakistan’s trusted platform connecting students with quality internships for career growth.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium shadow-md transition "
        >
          Browse Internships
        </motion.button>
      </motion.section>

      {/* ✅ Features Grid */}
      <motion.section
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto"
      >
        {[
          {
            icon: "📈",
            title: "Career Growth",
            desc: "Accelerate your career with hands-on industry experience.",
          },
          {
            icon: "🤝",
            title: "Professional Network",
            desc: "Connect with top companies and mentors.",
          },
          {
            icon: "🎖️",
            title: "Verified Internships",
            desc: "Only authentic, quality internships listed.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            variants={fadeUpVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 24px rgba(79, 70, 229, 0.3)",
            }}
            className="bg-white dark:bg-gray-800 rounded-xl p-7 shadow-lg cursor-pointer transition"
          >
            <div className="text-4xl mb-4 text-green-600 dark:text-green-400">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* ✅ Call To Action */}
      <motion.section
        variants={fadeUpVariants}
        className="mt-24 max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 rounded-xl p-12 shadow-2xl"
      >
        <motion.h2
          variants={subtleZoomVariants}
          className="text-3xl font-semibold mb-6"
        >
          Ready to take the next step in your career?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-700 dark:bg-green-500 hover:bg-green-800 dark:hover:bg-green-600 text-white px-10 py-4 rounded-md font-semibold shadow-md transition"
        >
          Get Started
        </motion.button>
      </motion.section>
    </motion.div>
  );
}
