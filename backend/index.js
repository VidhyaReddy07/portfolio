import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// compute __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve image assets from /img
app.use('/img', express.static(path.join(__dirname, 'images')));

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Email transporter
const createTransport = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio backend is running' });
});

// Get portfolio data (Fresher Version)
app.get('/api/portfolio', (req, res) => {
  const backendBase = process.env.BACKEND_URL || `http://localhost:${PORT}`;

  res.json({
    profile: {
      name: "Junnuthula Vidhya Reddy",
      short_name: "Vidhya Reddy",
      title: "Fresher • Software Developer",
      email: "vidhyareddy.j@gmail.com",
      phone: "+91 8897096901",
      location: "India",
      bio: "Enthusiastic and motivated aspiring full-stack developer with a strong foundation in Python, JavaScript, React, and Express. Passionate about learning modern web technologies and building meaningful applications.",
      avatar: `${backendBase}/img/vvv.jpg`,
      social: [
        { name: "GitHub", url: "https://github.com/VidhyaReddy07", icon: "github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/junnuthula-vidhya-reddy-1a0070263/", icon: "linkedin" }
      ]
    },

     skills: [
  { name: "Python", level: 60, category: "backend" },
  { name: "JavaScript", level: 55, category: "frontend" },
  { name: "React (Basics)", level: 50, category: "frontend" },
  { name: "Express.js (Basics)", level: 45, category: "backend" },
  { name: "HTML/CSS", level: 70, category: "frontend" },
  { name: "MySQL", level: 50, category: "database" },
  { name: "Git/GitHub", level: 60, category: "tools" }
],



    projects: [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A full-stack personal portfolio website built using React and Express.js. It features smooth UI/UX, project showcases, skills sections, and a working contact form powered by NodeMailer for email notifications.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Express.js", "NodeMailer", "JavaScript", "CSS"],
    githubUrl: "https://github.com/VidhyaReddy07/portfolio",
    liveUrl: "https://portfolio-one-gilt-rxoqiv59dn.vercel.app/",
    featured: true
  }
],


    education: [
      {
        id: 1,
        institution: "Sumathi Reddy Institute of Technology for Women",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        period: "2021 - 2025",
        cgpa: "7 CGPA"
      }
    ],

    certifications: [
      {
        id: 1,
        title: "Building Modern Web Applications with MERN Stack",
        provider: "Next Gen Employability Program in 2024-25",
        year: "2025",
      }
    ]
  });
});


// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body; 

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    const transporter = createTransport();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    res.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend URL: ${process.env.FRONTEND_URL}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});