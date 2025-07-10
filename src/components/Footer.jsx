function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <p>&copy; {new Date().getFullYear()} Kusuma Kumari. All rights reserved.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
        <a
          href="https://github.com/yourusername"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform transform hover:scale-105"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform transform hover:scale-105"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
