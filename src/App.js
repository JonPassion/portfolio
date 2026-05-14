import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load saved dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    if (newMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  const renderSection = () => {
    switch (activePage) {
      case 'home': return <HeroSection />;
      case 'about': return <AboutSection />;
      case 'projects': return <ProjectsSection />;
      case 'contact': return <ContactSection />;
      default: return <HeroSection />;
    }
  };

  const pages = ['home', 'about', 'projects', 'contact'];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col transition-colors duration-300 overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6">
          <h1 className="text-lg sm:text-xl font-bold text-indigo-500 dark:text-indigo-400">
            PASSION JONI
          </h1>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-3 py-1 text-sm sm:text-base transition"
            >
              {isDarkMode ? 'Light' : 'Dark'}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-gray-900 dark:text-white text-2xl focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-200 dark:bg-gray-800 flex flex-col items-center gap-3 py-4 transition-colors duration-300">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => {
                  setActivePage(page);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-4 w-11/12 max-w-xs text-center rounded-md font-medium text-base transition-colors ${
                  activePage === page
                    ? 'bg-indigo-500 text-white'
                    : 'hover:bg-indigo-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full p-4 sm:p-6 lg:p-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto w-full">{renderSection()}</div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
