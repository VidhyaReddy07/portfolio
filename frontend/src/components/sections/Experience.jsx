import React from 'react';

const Experience = ({ experience = [] }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-16">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((e, i) => (
            <div key={i} className="p-4 border rounded-md card-3d">
              <div className="font-medium text-lg">{e.role || e.title} {e.company ? `— ${e.company}` : ''}</div>
              {e.duration && <div className="text-sm text-gray-600">{e.duration}</div>}
              {e.description && <div className="text-gray-700 mt-2">{e.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
