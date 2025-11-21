import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Loading from './ui/Loading';

const Portfolio = () => {
  const { portfolioData, loading, error } = usePortfolio();

  if (loading) return <Loading />;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;
  if (!portfolioData) return <div className="min-h-screen flex items-center justify-center">No data found</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header profile={portfolioData.profile} />
      <Hero profile={portfolioData.profile} />
      <About profile={portfolioData.profile} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} />
      <Education education={portfolioData.education} certifications={portfolioData.certifications} />
      <Contact />
      <Footer profile={portfolioData.profile} />
    </div>
  );
};

export default Portfolio;