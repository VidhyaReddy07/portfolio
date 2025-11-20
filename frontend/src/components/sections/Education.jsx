import React from 'react';

const Education = ({ education = [], certifications = [] }) => {
  return (
    <section id="education" className="py-16">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-6">
              {education.length ? (
                education.map((ed, i) => (
                  <div key={i} className="p-4 border rounded-md card-3d">
                    <div className="font-medium text-lg">{ed.degree || ed.title} {ed.institution ? `— ${ed.institution}` : ''}</div>
                    {ed.period && <div className="text-sm text-gray-600">{ed.period}</div>}
                    {ed.description && <div className="text-gray-700 mt-2">{ed.description}</div>}
                  </div>
                ))
              ) : (
                <div className="text-gray-600">No education listed</div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="space-y-6">
              {certifications.length ? (
                certifications.map((c, i) => (
                  <div key={i} className="p-4 border rounded-md card-3d">
                    <div className="font-medium">{c.title}</div>
                    <div className="text-sm text-gray-600">{c.provider} • {c.year}</div>
                    {c.certificateUrl && (
                      <a href={c.certificateUrl} target="_blank" rel="noreferrer" className="text-primary-600 hover:underline mt-2 inline-block">View Certificate</a>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-gray-600">No certifications listed</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
