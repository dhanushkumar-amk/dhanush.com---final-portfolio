import React from "react";
import { motion } from "framer-motion";
import { Cloud, BookOpen, Cpu, Code2 } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    year: "2024",
    icon: <Cloud className="w-5 h-5 text-black" />,
    desc: "Foundational cloud knowledge on AWS services.",
    link: "#"
  },
  {
    title: "Google Data Analytics Certificate",
    provider: "Google",
    year: "2024",
    icon: <BookOpen className="w-5 h-5 text-black" />,
    desc: "Data cleaning, analysis, and visualization.",
    link: "#"
  },
  {
    title: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    year: "2023",
    icon: <Cloud className="w-5 h-5 text-black" />,
    desc: "Core Azure concepts and services.",
    link: "#"
  },
  {
    title: "Certified Kubernetes Administrator",
    provider: "The Linux Foundation",
    year: "2023",
    icon: <Cpu className="w-5 h-5 text-black" />,
    desc: "Cluster management and container orchestration.",
    link: "#"
  },
  {
    title: "React Frontend Developer",
    provider: "Meta (Coursera)",
    year: "2023",
    icon: <Code2 className="w-5 h-5 text-black" />,
    desc: "Building dynamic UIs with React & Redux.",
    link: "#"
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Certification = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-4 py-20 lg:py-24 font-outfit"
      id="certifications"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-5xl font-bold text-center pb-2 text-gray-900 font-mochiy"
      >
        Certifications
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-base lg:text-lg text-gray-600 text-center mb-12 md:pb-20"
      >
        Industry-recognized credentials that validate my expertise.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={idx}
            className={`bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.03] transition-all cursor-default
              ${idx >= 3 && idx <= 4 ? "sm:col-span-1 sm:mx-auto" : ""}`}
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                {React.cloneElement(cert.icon, { className: "w-5 h-5 text-black" })}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>

              {/* Provider & Year */}
              <p className="text-sm text-gray-700 font-medium mt-1">{cert.provider}</p>
              <p className="text-xs text-gray-500">{cert.year}</p>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-3">{cert.desc}</p>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-black text-xs font-semibold underline opacity-80 hover:opacity-100 transition"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
