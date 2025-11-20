import React from 'react';

const Certificates = ({ certifications = [] }) => {
  return (
    <section id="certificates" className="py-16">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.length ? (
            certifications.map((c, i) => (
              <div key={i} className="p-4 border rounded-md">
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
    </section>
  );
};

export default Certificates;
