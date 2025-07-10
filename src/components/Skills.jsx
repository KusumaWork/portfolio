function Skills() {
  const skills = [
    { group: "Languages", items: ["JavaScript", "HTML", "CSS"] },
    { group: "Frameworks", items: ["React", "Tailwind CSS"] },
    { group: "Tools", items: ["VS Code", "Git", "GitHub"] }
  ];

  return (
    <section id="skills" className="py-16 px-4 transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-300 transition-colors duration-300">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.group}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">
                {skillGroup.group}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-gray-700 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
