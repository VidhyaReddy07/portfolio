import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ projects }) => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
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