import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-3d">
      <div className="footer-content-3d">
        <div className="container-custom">
          <div className="footer-grid-3d">
            <div className="footer-info-3d">
              <h3 className="footer-name-3d">{profile.name}</h3>
              <p className="footer-bio-3d">
                Thank you for visiting my portfolio. Let's create something amazing together!
              </p>
              
              <div className="footer-social-3d">
                {profile.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link-3d"
                    aria-label={social.name}
                  >
                    {social.icon === 'github' && <Github className="social-icon-3d" />}
                    {social.icon === 'linkedin' && <Linkedin className="social-icon-3d" />}
                    {social.icon === 'mail' && <Mail className="social-icon-3d" />}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-links-3d">
              <h4 className="footer-links-title-3d">Quick Links</h4>
              <div className="footer-nav-3d">
                <a href="#home" className="footer-nav-link-3d">Home</a>
                <a href="#about" className="footer-nav-link-3d">About</a>
                <a href="#skills" className="footer-nav-link-3d">Skills</a>
                <a href="#projects" className="footer-nav-link-3d">Projects</a>
                <a href="#experience" className="footer-nav-link-3d">Experience</a>
                <a href="#education" className="footer-nav-link-3d">Education</a>
                <a href="#contact" className="footer-nav-link-3d">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom-3d">
            <div className="footer-copyright-3d">
              <p className="copyright-text-3d">
                Made with <Heart className="heart-icon-3d" /> by {profile.name} • {currentYear}
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="back-to-top-3d"
              aria-label="Back to top"
            >
              <ArrowUp className="back-to-top-icon-3d" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;