import React from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import './About.css';

const About = ({ profile }) => {
  return (
    <section id="about" className="about-section-3d">
      <div className="about-bg-pattern"></div>
      
      <div className="container-custom">
        <div className="about-content-wrapper-3d">
          <h2 className="about-title-3d">About Me</h2>
          
          <div className="about-grid-3d">
            <div className="about-text-3d">
              <div className="about-bio-3d">
                <p>{profile.bio}</p>
                
                {profile.additionalBio && (
                  <p className="about-bio-additional-3d">{profile.additionalBio}</p>
                )}
              </div>
              
              <div className="contact-info-3d">
                <div className="contact-item-3d">
                  <div className="contact-icon-3d">
                    <MapPin className="icon-3d" />
                  </div>
                  <div className="contact-details-3d">
                    <span className="contact-label-3d">Location</span>
                    <span className="contact-value-3d">{profile.location}</span>
                  </div>
                </div>
                
                <div className="contact-item-3d">
                  <div className="contact-icon-3d">
                    <Phone className="icon-3d" />
                  </div>
                  <div className="contact-details-3d">
                    <span className="contact-label-3d">Phone</span>
                    <span className="contact-value-3d">{profile.phone}</span>
                  </div>
                </div>
                
                <div className="contact-item-3d">
                  <div className="contact-icon-3d">
                    <Mail className="icon-3d" />
                  </div>
                  <div className="contact-details-3d">
                    <span className="contact-label-3d">Email</span>
                    <span className="contact-value-3d">{profile.email}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skills-highlight-3d">
              <h3 className="skills-highlight-title-3d">What I Do</h3>
              <div className="skills-list-3d">
                <div className="skill-item-3d">
                  Build beginner-friendly full-stack projects using Python, Express, and basic React
                </div>
                <div className="skill-item-3d">
                  Create responsive web pages using HTML, CSS, and JavaScript
                </div>
                <div className="skill-item-3d">
                  Write efficient SQL queries and work with relational databases
                </div>
                <div className="skill-item-3d">
                  Develop simple REST APIs using Express and integrate them with frontend apps
                </div>
                <div className="skill-item-3d">
                  Solve programming problems and automate tasks using Python
                </div>
                <div className="skill-item-3d">
                  Collaborate using Git and GitHub for version control
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;