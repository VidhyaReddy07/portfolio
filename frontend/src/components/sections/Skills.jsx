import React from 'react';

const Skills = ({ skills }) => {
  const skillCategories = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'DevOps & Tools',
  };

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([key, title]) => {
            const skillsInCategory = getSkillsByCategory(key);
            if (skillsInCategory.length === 0) return null;

            return (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {title}
                </h3>

                <div className="space-y-4">
                  {skillsInCategory.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-primary-600 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
