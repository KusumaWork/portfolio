function Contact() {
  return (
    <section id="contact" className="py-16 px-4 transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-3xl mx-auto text-center space-y-6 transition-all duration-500 transform hover:scale-[1.01] hover:-translate-y-1">
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 transition-colors duration-300">
          Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Let's connect! You can reach me at:
        </p>
        <div className="space-y-2">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            📧 Email: <a href="mailto:kusuma6b@gmail.com" className="text-indigo-600 dark:text-indigo-300 hover:underline">your.email@example.com</a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            🔗 LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-indigo-600 dark:text-indigo-300 hover:underline">linkedin.com/in/yourprofile</a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            💻 GitHub: <a href="https://github.com/yourusername" className="text-indigo-600 dark:text-indigo-300 hover:underline">github.com/yourusername</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
