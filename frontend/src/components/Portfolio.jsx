import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
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