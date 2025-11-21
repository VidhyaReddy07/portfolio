import React from 'react';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import './Education.css';

const Education = ({ education = [], certifications = [] }) => {
  return (
    <section id="education" className="education-section-3d">
      <div className="education-bg-shapes"></div>
      
      <div className="container-custom">
        <h2 className="education-title-3d">Education & Certifications</h2>
        
        <div className="education-grid-3d">
          {/* Education */}
          <div className="education-column-3d">
            <h3 className="education-column-title-3d">
              <Award className="column-icon-3d" />
              Education
            </h3>
            
            <div className="education-cards-3d">
              {education.length > 0 ? (
                education.map((edu, index) => (
                  <div key={edu.id || index} className="education-card-3d">
                    <div className="education-card-header-3d">
                      <h4 className="education-degree-3d">{edu.degree || edu.title}</h4>
                      {edu.institution && (
                        <span className="education-institution-3d">{edu.institution}</span>
                      )}
                    </div>
                    
                    {edu.period && (
                      <div className="education-period-3d">
                        <Calendar className="period-icon-3d" />
                        <span>{edu.period}</span>
                      </div>
                    )}
                    
                    {edu.description && (
                      <p className="education-description-3d">{edu.description}</p>
                    )}
                    
                    {edu.grade && (
                      <div className="education-grade-3d">
                        <span className="grade-label-3d">Grade:</span>
                        <span className="grade-value-3d">{edu.grade}</span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="education-empty-3d">
                  No education information available
                </div>
              )}
            </div>
          </div>

          {/* Certifications */}
          <div className="education-column-3d">
            <h3 className="education-column-title-3d">
              <Award className="column-icon-3d" />
              Certifications
            </h3>
            
            <div className="education-cards-3d">
              {certifications.length > 0 ? (
                certifications.map((cert, index) => (
                  <div key={cert.id || index} className="education-card-3d">
                    <div className="education-card-header-3d">
                      <h4 className="education-degree-3d">{cert.title}</h4>
                      {cert.provider && (
                        <span className="education-institution-3d">{cert.provider}</span>
                      )}
                    </div>
                    
                    <div className="education-period-3d">
                      <Calendar className="period-icon-3d" />
                      <span>{cert.year}</span>
                    </div>
                    
                    {cert.description && (
                      <p className="education-description-3d">{cert.description}</p>
                    )}
                    
                    {cert.certificateUrl && (
                      <a 
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education-certificate-link-3d"
                      >
                        <ExternalLink className="certificate-icon-3d" />
                        View Certificate
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <div className="education-empty-3d">
                  No certifications available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;