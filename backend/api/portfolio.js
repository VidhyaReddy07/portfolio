export default function handler(req, res) {
  // Allow CORS from configured frontend or all during development
  const FRONTEND = process.env.FRONTEND_URL || '*';
  res.setHeader('Access-Control-Allow-Origin', FRONTEND);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const host = process.env.BACKEND_URL || `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`;

  res.status(200).json({
    profile: {
      name: "Junnuthula Vidhya Reddy",
      short_name: "Vidhya Reddy",
      title: "Fresher • Software Developer",
      email: "vidhyareddy.j@gmail.com",
      phone: "+91 8897096901",
      location: "India",
      bio: "Enthusiastic and motivated aspiring full-stack developer with a strong foundation in Python, JavaScript, React, and Express. Passionate about learning modern web technologies and building meaningful applications.",
      // Ensure the image is placed in backend/public/img/vvv.jpg on Vercel
      avatar: `${host.replace(/\/$/, '')}/img/vvv.jpg`,
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
        liveUrl: "https://portfolio-demo.com",
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
        year: "2025"
      }
    ]
  });
}
