import React from "react";

const projects = [
  { name: "HealTogether", stars: 120, contributors: 5, link: "#" },
  { name: "MindTrack", stars: 85, contributors: 3, link: "#" },
  { name: "WellnessAI", stars: 95, contributors: 4, link: "#" },
];

// ProjectCard Component
const ProjectCard = ({ project }) => (
  <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
    <h3 className="text-indigo-600 dark:text-indigo-400 text-lg sm:text-xl font-semibold">
      {project.name}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mt-2">
      Stars: {project.stars} | Contributors: {project.contributors}
    </p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View repository for ${project.name}`}
      className="text-indigo-500 dark:text-indigo-300 text-sm mt-3 inline-block hover:underline"
    >
      View Repo
    </a>
  </div>
);

const ProjectsSection = () => {
  console.log("✅ ProjectsSection rendered!");

  return (
    <section className="min-h-screen bg-red-500 dark:bg-red-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-12 text-center">
          Projects
        </h2>

        {/* Responsive Grid with spacing fixes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
