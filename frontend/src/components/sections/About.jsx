import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const About = ({ profile }) => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {profile.bio}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 mr-3 text-primary-600" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-primary-600" />
                  <span>{profile.email}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Build beginner-friendly full-stack projects using Python, Express, and basic React
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Create responsive web pages using HTML, CSS, and JavaScript
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Write efficient SQL queries and work with relational databases
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Develop simple REST APIs using Express and integrate them with frontend apps
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Solve programming problems and automate tasks using Python
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
