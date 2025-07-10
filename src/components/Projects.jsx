function Projects() {
  const projects = [
    {
      title: "Fake News Classifier",
      tech: "Python, NLTK, Scikit-learn, TF-IDF",
      description:
        "Binary classification model trained on real-world news datasets to detect fake articles. Achieved 98.85% accuracy using Logistic Regression with balanced precision and recall. Used NLTK preprocessing and TF-IDF vectorization."
    },
    {
    title: "Movie Recommendation System",
    tech: "Python, Pandas, Scikit-learn, NLP, TF-IDF",
    description:
      "Content-based recommendation system that suggests movies based on user input using cosine similarity. Combined multiple features like genres, cast, keywords, and director using NLP techniques. Used TF-IDF vectorization and difflib for close match detection."
  }
    // You can add more projects below in same format
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-300 transition-colors duration-300">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
                {project.title}
              </h3>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {project.tech}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              {/* You can add GitHub/Live buttons here if you deploy later */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
