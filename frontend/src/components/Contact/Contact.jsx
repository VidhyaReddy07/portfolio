import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: 'loading', message: 'Sending message...' });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section-3d">
      <div className="contact-bg-waves"></div>
      
      <div className="container-custom">
        <h2 className="contact-title-3d">Get In Touch</h2>
        
        <div className="contact-grid-3d">
          {/* Contact Information */}
          <div className="contact-info-3d">
            <h3 className="contact-info-title-3d">Let's talk about your project</h3>
            <p className="contact-info-description-3d">
              I'm always interested in hearing about new opportunities and projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details-3d">
              <div className="contact-detail-item-3d">
                <div className="contact-detail-icon-3d">
                  <Mail className="detail-icon-3d" />
                </div>
                <div className="contact-detail-content-3d">
                  <span className="contact-detail-label-3d">Email</span>
                  <span className="contact-detail-value-3d">vidhyareddy.j@gmail.com</span>
                </div>
              </div>
              
              <div className="contact-detail-item-3d">
                <div className="contact-detail-icon-3d">
                  <Phone className="detail-icon-3d" />
                </div>
                <div className="contact-detail-content-3d">
                  <span className="contact-detail-label-3d">Phone</span>
                  <span className="contact-detail-value-3d">+91 8897096901</span>
                </div>
              </div>
              
              <div className="contact-detail-item-3d">
                <div className="contact-detail-icon-3d">
                  <MapPin className="detail-icon-3d" />
                </div>
                <div className="contact-detail-content-3d">
                  <span className="contact-detail-label-3d">Location</span>
                  <span className="contact-detail-value-3d">India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container-3d">
            <form onSubmit={handleSubmit} className="contact-form-3d">
              <div className="form-grid-3d">
                <div className="form-group-3d">
                  <label htmlFor="name" className="form-label-3d">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input-3d"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="form-group-3d">
                  <label htmlFor="email" className="form-label-3d">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input-3d"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-group-3d">
                <label htmlFor="subject" className="form-label-3d">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input-3d"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group-3d">
                <label htmlFor="message" className="form-label-3d">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea-3d"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="submit-button-3d"
              >
                {isLoading ? (
                  <>
                    <Loader className="button-icon-3d spinning" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="button-icon-3d" />
                    Send Message
                  </>
                )}
              </button>
              
              {status.message && (
                <div className={`form-status-3d ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;