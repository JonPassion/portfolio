import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const skillsData = [
  { name: "React", value: 80, color: "#61dafb" },
  { name: "Node.js", value: 70, color: "#3c873a" },
  { name: "Python", value: 75, color: "#ffd43b" },
  { name: "Django", value: 65, color: "#092e20" },
];

const projectStats = [
  { title: "HealTogether", stars: 120, contributors: 5, url: "https://github.com/" },
  { title: "MindTrack", stars: 85, contributors: 3, url: "https://github.com/" },
  { title: "WellnessAI", stars: 95, contributors: 4, url: "https://github.com/" },
];

const ContentPanel = ({ activeTab }) => {
  return (
    <AnimatePresence mode="wait">
      {activeTab === "projects" && (
        <motion.div
          key="projects"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projectStats.map((proj) => (
            <motion.div key={proj.title} whileHover={{ scale: 1.03 }} className="bg-gray-700 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-indigo-400 mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-2">Stars: {proj.stars} | Contributors: {proj.contributors}</p>
              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                View Repo
              </a>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === "about" && (
        <motion.div
          key="about"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-700 rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-2xl font-bold text-indigo-400 mb-4">About Me</h3>
          <p className="text-gray-300 mb-4">
            I’m Passion Joni, a full-stack developer skilled in React, Django, Node.js, and Tailwind CSS. I create modern, responsive, and high-performance web applications.
          </p>

          <h4 className="text-lg font-semibold text-indigo-400 mb-2">Skills</h4>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={skillsData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={5}>
                  {skillsData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}

      {activeTab === "contact" && (
        <motion.div
          key="contact"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-700 rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-2xl font-bold text-indigo-400 mb-4">Contact Me</h3>
          <p className="text-gray-300 mb-3">
            Let’s collaborate or chat about tech opportunities. Reach out via email or connect on social platforms.
          </p>
          <a href="mailto:your@email.com" className="text-indigo-500 hover:underline">your@email.com</a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContentPanel;

