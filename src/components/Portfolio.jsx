import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const categories = ["All", "Frontend", "MERN", "Next JS"];

const projects = [
  {
    title: "AI Image Generation SASS Application",
    category: "MERN",
    skills: ["React Js", "MongoDb", "Node Js", "Express Js", "Tailwind CSS", "Razor Pay"],
    // Using Picsum Photos with a seed for consistent, working images
    img: "https://picsum.photos/seed/ai/600/400",
    viewLink: "#",
    codeLink: "#",
    desc: "Generate high-quality AI images instantly using advanced models."
  },
  {
    title: "CryptoCurrency Tracking Website",
    category: "Frontend",
    skills: ["React", "CSS", "Hooks", "Crypto-API"],
    img: "https://picsum.photos/seed/crypto/600/400",
    viewLink: "#",
    codeLink: "#",
    desc: "Track live cryptocurrency prices and market trends."
  },
  {
    title: "E-Commerce Store",
    category: "MERN",
    skills: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    img: "https://picsum.photos/seed/ecommerce/600/400",
    viewLink: "#",
    codeLink: "#",
    desc: "Full-stack online shopping platform with cart & payment."
  },
  {
    title: "Portfolio Website",
    category: "Next JS",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion"],
    img: "https://picsum.photos/seed/portfolio/600/400",
    viewLink: "#",
    codeLink: "#",
    desc: "Personal developer portfolio with animations."
  },
  {
    title: "Weather Forecast App",
    category: "Frontend",
    skills: ["React", "API", "CSS"],
    img: "https://picsum.photos/seed/weather/600/400",
    viewLink: "#",
    codeLink: "#",
    desc: "Check real-time weather updates with API integration."
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

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 lg:py-24 font-outfit" id="portfolio">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-5xl font-bold text-center pb-2 text-gray-900 font-mochiy"
      >
        Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-base lg:text-lg text-gray-600 text-center mb-12 md:pb-20"
      >
        I have worked on a wide range of projects. From web apps to Web3 apps.
      </motion.p>

      {/* Category Filter */}
      <div className="flex justify-center gap-3 flex-wrap mt-6 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium text-sm shadow-sm border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={idx}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.03] transition-all flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink size={22} />
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <Code size={22} />
                </a>
              </div>
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col flex-1 text-center">
              <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-500 mt-2 mb-4">{project.desc}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {project.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-xs font-semibold"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
