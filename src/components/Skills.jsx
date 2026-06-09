function Skills() {
  const skills = [
    { name: 'React', level: 'Intermediate', icon: '⚛️' },
    { name: 'Tailwind CSS', level: 'Intermediate', icon: '🎨' },
    { name: 'JavaScript', level: 'Intermediate', icon: '🟨' },
    { name: 'React Router', level: 'Intermediate', icon: '🔀' },
    { name: 'Git & GitHub', level: 'Intermediate', icon: '🐙' },
    { name: 'Netlify', level: 'Intermediate', icon: '🚀' },
    { name: 'SEO Basics', level: 'Intermediate', icon: '🔍' },
    { name: 'Google Analytics', level: 'Intermediate', icon: '📊' },
    { name: 'Formspree', level: 'Intermediate', icon: '📧' },
  ];

  return (
    <section id="skills" className="bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">
            What I Know
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            My Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything I need to build you a fast, modern, professional website.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-xl p-6 transition-all"
            >
              <div className="text-3xl mb-3">{skill.icon}</div>
              <div className="text-white font-semibold mb-1">{skill.name}</div>
              <div className="text-green-400 text-xs font-semibold">{skill.level}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;