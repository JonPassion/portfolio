import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h3
        className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h3>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m a passionate <span className="font-semibold text-blue-500">Full-Stack Developer</span> with experience in{" "}
        <span className="font-medium">React, Node.js, Django, and Tailwind CSS</span>.  
        I love crafting clean, responsive, and high-performance web applications that create meaningful user experiences.  
        When I’m not coding, I enjoy learning new tech stacks and contributing to open-source projects.
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
