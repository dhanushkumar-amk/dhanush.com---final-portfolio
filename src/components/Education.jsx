import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  { title: "Master of Science in IT", institute: "India - HICAS", years: "2025 - present", grade: "CGPA: 0.0" },
  { title: "Bachelor of Computer Applications", institute: "India - NGMC", years: "2022 - 2025", grade: "CGPA: 7.8" },
  { title: "Higher Secondary Education", institute: "India - PTP", years: "2020 - 2022", grade: "Percentage: 89.9%" },
  { title: "School Education", institute: "India - JKP", years: "2012 - 2019", grade: "Percentage: 70.0%" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Education = () => (
  <section className="max-w-5xl mx-auto px-4 py-16" id="education">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-center text-gray-900 font-mochiy mb-4"
    >
      Education
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      viewport={{ once: true }}
      className="text-center text-gray-600 text-base mb-12 font-outfit"
    >
      My academic journey and achievements
    </motion.p>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

      <div className="flex flex-col gap-12">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex justify-center relative"
          >
            {/* Dot */}
            <span className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></span>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-md px-6 py-5 w-full max-w-md text-center relative z-10 hover:shadow-lg transition-shadow duration-300">
              <GraduationCap className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">{edu.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{edu.institute}</p>
              <p className="text-gray-500 text-xs mt-2">{edu.years}</p>
              <p className="text-indigo-600 text-sm mt-1 font-medium">{edu.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
