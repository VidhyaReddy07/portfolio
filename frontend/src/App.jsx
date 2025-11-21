import React from 'react';
import { usePortfolio } from './hooks/usePortfolio';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loading from './components/ui/Loading';
import './App.css';

function App() {
  const { portfolioData, loading, error } = usePortfolio();

  if (loading) return <Loading />;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;
  if (!portfolioData) return <div className="min-h-screen flex items-center justify-center">No data found</div>;

  return (
    <div className="app-3d">
      <Header profile={portfolioData.profile} />
      <Hero profile={portfolioData.profile} />
      <About profile={portfolioData.profile} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} />
      <Education 
        education={portfolioData.education} 
        certifications={portfolioData.certifications} 
      />
      <Contact />
      <Footer profile={portfolioData.profile} />
    </div>
  );
}

export default App;