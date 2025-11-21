import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = ({ experience = [] }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="experience-section-3d">
      <div className="experience-bg-lines"></div>
      
      <div className="container-custom">
        <h2 className="experience-title-3d">Work Experience</h2>
        
        <div className="experience-timeline-3d">
          {experience.map((exp, index) => (
            <div key={exp.id || index} className="experience-item-3d">
              <div className="experience-timeline-marker-3d">
                <div className="timeline-dot-3d"></div>
                {index < experience.length - 1 && (
                  <div className="timeline-line-3d"></div>
                )}
              </div>
              
              <div className="experience-content-3d">
                <div className="experience-header-3d">
                  <h3 className="experience-role-3d">{exp.role || exp.title}</h3>
                  {exp.company && (
                    <span className="experience-company-3d">{exp.company}</span>
                  )}
                </div>
                
                <div className="experience-meta-3d">
                  {exp.duration && (
                    <div className="experience-duration-3d">
                      <Calendar className="meta-icon-3d" />
                      <span>{exp.duration}</span>
                    </div>
                  )}
                  
                  {exp.location && (
                    <div className="experience-location-3d">
                      <MapPin className="meta-icon-3d" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
                
                {exp.description && (
                  <p className="experience-description-3d">{exp.description}</p>
                )}
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="experience-technologies-3d">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="technology-badge-3d">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {exp.website && (
                  <a 
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-website-3d"
                  >
                    <ExternalLink className="website-icon-3d" />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;