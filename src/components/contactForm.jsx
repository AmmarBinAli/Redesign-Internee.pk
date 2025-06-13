import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.div
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-10 md:py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-700 dark:text-green-400 mb-10"
      >
        Contact Us
      </motion.h1>

      {/* Form Card */}
      <motion.div
        variants={fadeInUp}
        className="w-full max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-3xl shadow-2xl"
      >
        {submitted ? (
          <p className="text-green-600 dark:text-green-400 text-center text-lg font-medium">
            ✅ Message sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-900 dark:border-gray-700"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-900 dark:border-gray-700"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Message Field */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-900 dark:border-gray-700"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-3 rounded-md text-base sm:text-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
