import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = ({ profile }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'twitter': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white section-padding">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src={profile.avatar} 
            alt={profile.name}
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary-600 mb-8">
            {profile.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {profile.bio}
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            {profile.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:text-primary-600"
              >
                {getIcon(social.icon)}
              </a>
            ))}
          </div>

          <div className="animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-primary-600 transition-colors">
              <ArrowDown className="w-8 h-8 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;