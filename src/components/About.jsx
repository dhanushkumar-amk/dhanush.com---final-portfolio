import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/dhanushkumar1.png";
import {
  Award,
  Briefcase,
  Headphones,
  Code2,
  Cpu,
  Layout,
  Lightbulb,
} from "lucide-react";

const stats = [
  {
    icon: <Award className="w-6 h-6 text-black" />,
    title: "Experience",
    desc: "2+ Years",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-black" />,
    title: "Projects",
    desc: "50+ Completed",
  },
  {
    icon: <Headphones className="w-6 h-6 text-black" />,
    title: "Support",
    desc: "Online 24/7",
  },
];

const focusAreas = [
  {
    icon: <Code2 className="w-4 h-4 text-black" />,
    text: "Full-Stack Web Development",
  },
  {
    icon: <Cpu className="w-4 h-4 text-black" />,
    text: "MERN Stack Applications",
  },
  {
    icon: <Layout className="w-4 h-4 text-black" />,
    text: "User Experience Design",
  },
  {
    icon: <Lightbulb className="w-4 h-4 text-black" />,
    text: "Problem Solving & Innovation",
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

const About = () => (
  <section
    className="max-w-6xl mx-auto px-4 py-20 lg:py-24 font-outfit"
    id="about"
  >
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl lg:text-5xl font-bold text-center pb-2 text-gray-900 font-mochiy"
    >
      About Me
    </motion.h1>
      <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-base lg:text-lg text-gray-600 text-center mb-12 md:pb-20"
        >
         My Introduction
        </motion.p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Left - Content */}
      <div className="space-y-8">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium"
        >
          I’m a software developer passionate about crafting innovative and
          user-friendly web applications. My main focus is the MERN stack,
          building seamless and dynamic experiences for the web.
        </motion.p>

        {/* Focus Areas */}
        <div>
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6 font-mochiy"
          >
            Focus Areas
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={idx + 2}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.03] transition-all cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-100">
                    {React.cloneElement(item.icon, {
                      className: "w-4 h-4 text-black",
                    })}
                  </div>
                  <span className="text-base font-medium text-gray-800">
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        <div className="relative group">
          <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 bg-white mx-auto transition-transform duration-300 group-hover:scale-105">
            <img
              src={profileImage}
              alt="Dhanush Kumar"
              className="w-full h-full object-cover object-center rounded-2xl"
              style={{ objectPosition: "center top" }}
            />
          </div>
          {/* Decorative border */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute -z-10 -top-6 -left-6 w-80 h-80 lg:w-[420px] lg:h-[420px] border-2 border-indigo-100 rounded-3xl"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
