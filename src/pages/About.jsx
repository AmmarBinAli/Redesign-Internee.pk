import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white dark:bg-gray-900 p-10 md:p-16 rounded-3xl shadow-2xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-green-400 mb-6">
          About Internee.PK
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
          Internee.pk is Pakistan’s premier platform for remote internships,
          connecting talented students and fresh graduates with top tech
          companies. Our mission is to empower youth by providing real-world
          opportunities that build skills, portfolios, and successful careers.
        </p>
        <button className="bg-green-600 dark:bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition">
          Explore Internships
        </button>
      </motion.div>
    </div>
  );
}
