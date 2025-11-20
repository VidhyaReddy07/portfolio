import React, { useState } from 'react';
import { usePortfolio } from '../../hooks/usePortfolio';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { sendContactMessage } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    const result = await sendContactMessage(formData);
    
    if (result.success) {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus({ type: 'error', message: result.error });
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's talk about your project</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary-600 mr-4" />
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-600">vidhyareddy.j@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary-600 mr-4" />
                  <div>
                    <p className="text-gray-900 font-medium">Phone</p>
                    <p className="text-gray-600">+91 8897096901</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary-600 mr-4" />
                  <div>
                    <p className="text-gray-900 font-medium">Location</p>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                
                {status.message && (
                  <div className={`p-4 rounded-lg ${
                    status.type === 'success' ? 'bg-green-50 text-green-700' : 
                    status.type === 'error' ? 'bg-red-50 text-red-700' : 
                    'bg-blue-50 text-blue-700'
                  }`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;