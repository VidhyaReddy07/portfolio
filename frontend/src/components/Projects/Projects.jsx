import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import './Projects.css';

const Projects = ({ projects }) => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects-section-3d">
      <div className="projects-bg-particles">
        <div className="particle-3d particle-1"></div>
        <div className="particle-3d particle-2"></div>
        <div className="particle-3d particle-3"></div>
      </div>
      
      <div className="container-custom">
        <h2 className="projects-title-3d">Featured Projects</h2>
        
        <div className="project-grid-3d">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card-3d">
              <div className="project-image-container-3d">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image-3d"
                />
                {project.featured && (
                  <div className="featured-badge-3d">
                    <Star className="badge-icon-3d" />
                    Featured
                  </div>
                )}
              </div>
              
              <div className="project-content-3d">
                <h3 className="project-title-3d">{project.title}</h3>
                <p className="project-description-3d">{project.description}</p>
                
                <div className="project-technologies-3d">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="technology-tag-3d"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links-3d">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-3d"
                    >
                      <Github className="link-icon-3d" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-3d"
                    >
                      <ExternalLink className="link-icon-3d" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;