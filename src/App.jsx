import { useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 z-50 bg-indigo-600 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition"
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>

        {/* Hero Section */}
        <section className="h-screen bg-gradient-to-br from-indigo-100 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6 transition-colors duration-300">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-indigo-700 dark:text-indigo-300 transition-colors duration-300">Kusuma Kumari</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 transition-colors duration-300">Frontend Developer</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto transition-colors duration-300">
              I create responsive web applications using React, Tailwind CSS, and JavaScript.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/resume.pdf"
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
                download
              >
                Download Resume
              </a>
              <a
                href="#skills"
                className="border border-indigo-600 text-indigo-600 dark:border-indigo-300 dark:text-indigo-300 px-6 py-2 rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                View Skills
              </a>
            </div>
          </div>
        </section>

        {/* Sections */}
        <div className="transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
          <section className="transition-colors duration-300">
            <About />
          </section>
          <section className="transition-colors duration-300">
            <Skills />
          </section>
          <section className="transition-colors duration-300">
            <Projects />
          </section>
          <section className="transition-colors duration-300">
            <Contact />
          </section>
          <section className="transition-colors duration-300">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

// Edited by Kusuma Kumari
