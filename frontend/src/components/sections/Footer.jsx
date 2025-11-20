import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">{profile.name}</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Thank you for visiting my portfolio. Let's create something amazing together!
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {profile.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {social.icon === 'github' && <Github className="w-6 h-6" />}
                {social.icon === 'linkedin' && <Linkedin className="w-6 h-6" />}
                {social.icon === 'twitter' && <Mail className="w-6 h-6" />}
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by {profile.name} • {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;