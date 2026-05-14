// Dashboard.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// ---------------------------
// Data
// ---------------------------
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

// ---------------------------
// Dashboard Component
// ---------------------------
const Dashboard = () => {
  const tabs = ["projects", "about", "contact"];
  const [activeTab, setActiveTab] = useState("projects");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Auto-hide sidebar on mobile
  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slide animation for content
  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  // ---------------- Sidebar ----------------
  const Sidebar = () => (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: sidebarOpen ? 0 : -300 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 h-full w-64 bg-gray-800 flex flex-col items-center py-6 px-4 shadow-lg z-50"
    >
      <button
        className="self-end mb-4 text-gray-400 hover:text-white focus:outline-none md:hidden"
        onClick={() => setSidebarOpen(false)}
      >
        ✕
      </button>

      <div className="w-28 h-28 rounded-full overflow-hidden mb-3 border-4 border-indigo-500 shadow-xl">
        <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-xl font-bold mb-1 text-center">Passion Joni</h2>
      <p className="text-gray-400 mb-3 text-center text-sm">Full-Stack Developer</p>

      <div className="flex gap-4 mb-4 text-xl text-gray-400">
        <FaReact className="hover:text-blue-400 transition" title="React" />
        <FaNodeJs className="hover:text-green-400 transition" title="Node.js" />
        <FaPython className="hover:text-yellow-400 transition" title="Python" />
      </div>

      <nav className="flex flex-col gap-3 w-full mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full py-2 rounded-lg font-medium text-left px-4 transition-colors duration-300 ${
              activeTab === tab ? "bg-indigo-500 text-white" : "hover:bg-indigo-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <div className="flex gap-4 mt-auto">
        <FaGithub className="hover:text-indigo-500 transition cursor-pointer" />
        <FaLinkedin className="hover:text-indigo-500 transition cursor-pointer" />
        <FaTwitter className="hover:text-indigo-500 transition cursor-pointer" />
        <FaEnvelope className="hover:text-indigo-500 transition cursor-pointer" />
      </div>
    </motion.aside>
  );

  // ---------------- Content ----------------
  const Projects = () => (
    <motion.div
      key="projects"
      initial="enter"
      animate="center"
      exit="exit"
      variants={slideVariants}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
    >
      {projectStats.map((proj) => (
        <div key={proj.title} className="bg-gray-700 rounded-2xl p-4 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-indigo-400 mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-2 text-sm md:text-base">
              Stars: {proj.stars} | Contributors: {proj.contributors}
            </p>
          </div>
          <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline text-sm md:text-base mt-2">
            View Repo
          </a>
        </div>
      ))}
    </motion.div>
  );

  const About = () => (
    <motion.div
      key="about"
      initial="enter"
      animate="center"
      exit="exit"
      variants={slideVariants}
      transition={{ duration: 0.3 }}
      className="bg-gray-700 rounded-2xl shadow-lg p-4 sm:p-6 w-full flex flex-col"
    >
      <h3 className="text-xl md:text-2xl font-bold text-indigo-400 mb-4">About Me</h3>
      <p className="text-gray-300 mb-4 text-sm md:text-base">
        I’m Passion Joni, a full-stack developer skilled in React, Django, Node.js, and Tailwind CSS. I create modern, responsive, and high-performance web applications.
      </p>
      <h4 className="text-base md:text-lg font-semibold text-indigo-400 mb-2">Skills</h4>
      <div className="w-full flex-1 min-h-[250px]">
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
  );

  const Contact = () => (
    <motion.div
      key="contact"
      initial="enter"
      animate="center"
      exit="exit"
      variants={slideVariants}
      transition={{ duration: 0.3 }}
      className="bg-gray-700 rounded-2xl shadow-lg p-4 sm:p-6 w-full flex flex-col"
    >
      <h3 className="text-xl md:text-2xl font-bold text-indigo-400 mb-4">Contact Me</h3>
      <p className="text-gray-300 mb-3 text-sm md:text-base">
        Let’s collaborate or chat about tech opportunities. Reach out via email or connect on social platforms.
      </p>
      <a href="mailto:your@email.com" className="text-indigo-500 hover:underline text-sm md:text-base">
        your@email.com
      </a>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Hamburger Button */}
      {!sidebarOpen && (
        <button
          className="fixed top-6 left-4 z-50 bg-indigo-500 p-2 rounded-lg shadow-lg hover:bg-indigo-600 transition md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Main Content */}
      <main className={`flex-1 p-4 sm:p-6 md:p-10 transition-all ${sidebarOpen ? "ml-64" : "ml-0"}`}>
        <AnimatePresence exitBeforeEnter>
          {activeTab === "projects" && <Projects />}
          {activeTab === "about" && <About />}
          {activeTab === "contact" && <Contact />}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
