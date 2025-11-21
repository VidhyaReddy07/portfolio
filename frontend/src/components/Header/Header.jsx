import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Header.css';

const Header = ({ profile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <header className={`header-3d ${scrolled ? 'header-scrolled' : ''}`}>
      <nav className="container-custom">
        <div className="nav-container-3d">
          <a href="#home" className="logo-3d">
            <div className="logo-icon-3d">
              {profile.short_name?.charAt(0) || 'V'}
            </div>
            <span className="logo-text-3d">{profile.short_name}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav-3d">
            <div className="nav-links-3d">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-item-3d"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="theme-toggle-3d"
            >
              {theme === 'dark' ? <Sun className="icon-3d" /> : <Moon className="icon-3d" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-controls-3d">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="theme-toggle-3d mobile"
            >
              {theme === 'dark' ? <Sun className="icon-3d" /> : <Moon className="icon-3d" />}
            </button>

            <button
              className="menu-toggle-3d"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="icon-3d" /> : <Menu className="icon-3d" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu" 
          className={`mobile-menu-3d ${isMenuOpen ? 'mobile-menu-open' : ''}`}
        >
          <div className="mobile-nav-links-3d">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-item-3d"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;