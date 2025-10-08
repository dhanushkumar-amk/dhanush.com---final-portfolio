import React from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-0 lg:py-5 font-outfit" id="contact">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center pb-3 text-gray-900 font-mochiy"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg text-gray-600 text-center mb-12 md:pb-16"
      >
        I’d love to hear from you! Fill out the form below and I’ll get back to you.
      </motion.p>

      {/* Form */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all max-w-2xl mx-auto"
      >
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">Name</label>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg border border-gray-200 focus-within:ring-2 transition-all">
              {/* <User className="w-5 h-5 text-black ml-3" strokeWidth={2} /> */}
              <input type="text" placeholder="Enter your name" className="flex-1 p-4 bg-transparent rounded-lg outline-none" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">Email</label>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg border border-gray-200 focus-within:ring-2 transition-all">
              {/* <Mail className="w-5 h-5 text-black ml-3" strokeWidth={2} /> */}
              <input type="email" placeholder="Enter your email" className="flex-1 p-4 bg-transparent rounded-lg outline-none" />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">Message</label>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg border border-gray-200 focus-within:ring-2 transition-all">
              {/* <MessageSquare className="w-5 h-5 text-black mt-4 ml-3" strokeWidth={2} /> */}
              <textarea placeholder="Write your message..." rows="4" className="flex-1 p-4 bg-transparent rounded-lg outline-none resize-none"></textarea>
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-4 bg-black text-white font-semibold rounded-lg shadow-md transition"
          >
            Send Message 🚀
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
