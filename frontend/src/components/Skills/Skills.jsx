import React from 'react';
import './Skills.css';

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
    <section id="skills" className="skills-section-3d">
      <div className="skills-bg-grid"></div>
      
      <div className="container-custom">
        <h2 className="skills-title-3d">Skills & Technologies</h2>
        
        <div className="skills-grid-3d">
          {Object.entries(skillCategories).map(([key, title]) => {
            const skillsInCategory = getSkillsByCategory(key);
            if (skillsInCategory.length === 0) return null;

            return (
              <div key={key} className="skills-category-3d">
                <div className="category-header-3d">
                  <h3 className="category-title-3d">{title}</h3>
                </div>

                <div className="skills-list-3d">
                  {skillsInCategory.map((skill, index) => (
                    <div key={skill.id || index} className="skill-item-3d">
                      <div className="skill-header-3d">
                        <span className="skill-name-3d">{skill.name}</span>
                        <span className="skill-percentage-3d">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="skill-bar-container-3d">
                        <div
                          className="skill-bar-3d"
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, 
                              rgb(59, 130, 246) 0%,
                              rgb(139, 92, 246) 100%)`
                          }}
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