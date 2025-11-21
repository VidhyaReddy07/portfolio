import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import './Hero.css';

const Hero = ({ profile }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github': return <Github className="icon-3d" />;
      case 'linkedin': return <Linkedin className="icon-3d" />;
      case 'mail': return <Mail className="icon-3d" />;
      default: return null;
    }
  };

  return (
    <section id="home" className="hero-section-3d">
      <div className="hero-bg-3d">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
      
      <div className="container-custom">
        <div className="hero-grid-3d">
          <div className="hero-content-3d">
            <h1 className="hero-title-3d">{profile.name}</h1>
            <p className="hero-subtitle-3d">{profile.title}</p>
            <p className="hero-bio-3d">{profile.bio}</p>

            <div className="hero-buttons-3d">
              <a href="#projects" className="btn-hero-primary-3d">
                View Projects
              </a>
              <a href="#contact" className="btn-hero-secondary-3d">
                Contact Me
              </a>
              {profile.resumeUrl && (
                <a 
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-outline-3d"
                >
                  <Download className="icon-3d" />
                  Download Resume
                </a>
              )}
            </div>

            <div className="social-links-3d">
              {profile.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-3d"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-profile-3d">
            <div className="profile-card-3d">
              <div className="profile-content-3d">
                <div className="avatar-container-3d">
                  <img 
                    src={profile.avatar} 
                    alt={profile.name}
                    className="avatar-3d"
                  />
                </div>
                <div className="profile-info-3d">
                  <h3 className="profile-name-3d">{profile.short_name}</h3>
                  <p className="profile-location-3d">{profile.location}</p>
                </div>
                <div className="profile-stats-3d">
                  <div className="stat-card-3d">
                    <div className="stat-number-3d">{profile.skillsCount || '3'}</div>
                    <div className="stat-label-3d">Skills</div>
                  </div>
                  <div className="stat-card-3d">
                    <div className="stat-number-3d">{profile.projectsCount || '1'}</div>
                    <div className="stat-label-3d">Projects</div>
                  </div>
                  <div className="stat-card-3d">
                    <div className="stat-number-3d">{profile.certificationsCount || '2  '}</div>
                    <div className="stat-label-3d">Certs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;