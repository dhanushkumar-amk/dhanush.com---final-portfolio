import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Brush,
  Cpu,
  Layout,
  Lightbulb,
  Type,
  Globe,
  Server,
  Database,
  Package,
  Boxes,
  Settings,
  HardDrive,
  Zap,
  Cloud,
  GitBranch,
  GitPullRequest,
  Bot,
  Network,
  Workflow,
  BrainCircuit,
  CloudCog,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Colors for each category
const categoryColors = [
  "bg-orange-100 text-orange-600", // Front-End
  "bg-blue-100 text-blue-600",     // Back-End
  "bg-green-100 text-green-600",   // Database
  "bg-purple-100 text-purple-600", // DevOps
  "bg-pink-100 text-pink-600",     // Others
  "bg-yellow-100 text-yellow-600", // AI & Automation
];

// Skills by category (matching resume)
const skillsByCategory = [
  {
    title: "Front-End Development",
    color: categoryColors[0],
    skills: [
      { name: "HTML", icon: <Code2 /> },
      { name: "CSS", icon: <Brush /> },
      { name: "JavaScript", icon: <Type /> },
      { name: "React.js", icon: <Cpu /> },
      { name: "Next.js", icon: <Globe /> },
      { name: "TailwindCSS", icon: <Layout /> },
    ],
  },
  {
    title: "Back-End Development",
    color: categoryColors[1],
    skills: [
      { name: "Node.js", icon: <Server /> },
      { name: "Express.js", icon: <Server /> },
      { name: "TypeScript", icon: <Type /> },
      { name: "Socket.IO", icon: <Zap /> },
      { name: "RESTful APIs", icon: <Globe /> },
    ],
  },
  {
    title: "Database & ORM",
    color: categoryColors[2],
    skills: [
      { name: "MongoDB", icon: <Database /> },
      { name: "PostgreSQL", icon: <Database /> },
      { name: "Redis", icon: <HardDrive /> },
      { name: "Mongoose", icon: <Boxes /> },
      { name: "Supabase", icon: <Boxes /> },
    ],
  },
  {
    title: "DevOps & Tools",
    color: categoryColors[3],
    skills: [
      { name: "Git", icon: <GitBranch /> },
      { name: "GitHub", icon: <GitPullRequest /> },
      { name: "Docker", icon: <Package /> },
      { name: "AWS", icon: <Cloud /> },
      { name: "Postman", icon: <Package /> },
    ],
  },
  {
    title: "AI Automation & Emerging Technologies",
    color: categoryColors[5],
    skills: [
      { name: "Python", icon: <Cpu /> },
      { name: "n8n", icon: <Workflow /> },
      { name: "Make.com", icon: <Workflow /> },
      { name: "AI Agents", icon: <Bot /> },
      { name: "RAG (Retrieval-Augmented Generation)", icon: <Network /> },
      { name: "Vector Databases", icon: <Database /> },
      { name: "Model Context Protocol (MCP)", icon: <CloudCog /> },
      { name: "Prompt Engineering", icon: <Lightbulb /> },
    ],
  },
  {
    title: "Other Skills",
    color: categoryColors[4],
    skills: [
      { name: "Data Structures & Algorithms (Java)", icon: <Lightbulb /> },
      { name: "System Design (LLD & HLD)", icon: <Cpu /> },
      { name: "Microservices Architecture", icon: <Server /> },
    ],
  },
];

const Skills = () => {
  const topCategories = skillsByCategory.slice(0, 3);
  const bottomCategories = skillsByCategory.slice(3, skillsByCategory.length);

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 py-20 lg:py-24 font-outfit"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-bold text-center pb-4 text-gray-900 mb-2 font-mochiy"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-base lg:text-lg text-gray-600 text-center mb-12 pb-5 font-outfit"
      >
        Here are some of my skills on which I have been working and exploring across
        Full Stack Development, AI Automation, and Emerging Technologies.
      </motion.p>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {topCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={catIdx}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-mochiy pb-3">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, skillIdx) => (
                <motion.li
                  key={skillIdx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={skillIdx + 1}
                  className="flex items-center text-base text-gray-700"
                >
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    className={`p-2 rounded-lg flex items-center justify-center mr-3 ${category.color}`}
                  >
                    {React.cloneElement(skill.icon, { className: "w-5 h-5" })}
                  </motion.span>
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {bottomCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx + 3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={catIdx + 3}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 w-full md:w-96"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-mochiy pb-3">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, skillIdx) => (
                <motion.li
                  key={skillIdx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={skillIdx + 1}
                  className="flex items-center text-base text-gray-700"
                >
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    className={`p-2 rounded-lg flex items-center justify-center mr-3 ${category.color}`}
                  >
                    {React.cloneElement(skill.icon, { className: "w-5 h-5" })}
                  </motion.span>
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
