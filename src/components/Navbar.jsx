import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentPage, setCurrentPage, onDiscussProject }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page) => {
    setCurrentPage(page);
    setMobileOpen(false);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About Us' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`sgt-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="sgt-navbar">
        {/* SGT Monogram & Wordmark Logo */}
        <div className="sgt-brand" onClick={() => handleNav('home')}>
          <div className="sgt-brand-monogram">
            {/* Elegant SGT Minimalist Monogram */}
            <svg width="26" height="26" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer Minimalist Geometric Frame */}
              <rect x="12" y="12" width="76" height="76" rx="16" stroke="#C8A96B" strokeWidth="6" fill="none"/>
              {/* Stylized SGT Monogram Paths */}
              <path d="M35 34 C35 30, 42 28, 50 28 C58 28, 65 31, 65 37 C65 44, 45 46, 45 53 C45 58, 52 60, 58 60 C64 60, 65 57, 65 57" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none"/>
              <path d="M28 72 L72 72" stroke="#C8A96B" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="sgt-brand-text">
            <span className="sgt-brand-name">
              SGT <span>Technologies</span>
            </span>
            <span className="sgt-brand-tagline">Build Beyond Limits.</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="sgt-nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`sgt-nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button: Discuss Your Project */}
        <div className="sgt-nav-actions">
          <button 
            className="btn-sgt-gold d-none d-md-inline-flex"
            onClick={() => {
              if (onDiscussProject) onDiscussProject();
              else handleNav('contact');
            }}
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="sgt-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Toggle navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`sgt-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="sgt-mobile-drawer-content">
          <div className="sgt-mobile-drawer-header">
            <div className="sgt-brand" onClick={() => handleNav('home')}>
              <div className="sgt-brand-monogram" style={{ width: 36, height: 36 }}>
                <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                  <rect x="12" y="12" width="76" height="76" rx="16" stroke="#C8A96B" strokeWidth="7" fill="none"/>
                  <path d="M35 34 C35 30, 42 28, 50 28 C58 28, 65 31, 65 37 C65 44, 45 46, 45 53 C45 58, 52 60, 58 60" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <span style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1.15rem' }}>
                SGT Technologies
              </span>
            </div>
            <button 
              onClick={() => setMobileOpen(false)}
              style={{ background: 'none', border: 'none', color: '#8E8E93', cursor: 'pointer' }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="sgt-mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`sgt-mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => handleNav(item.id)}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} color="var(--gold-primary)" />
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 'auto' }}>
            <button 
              className="btn-sgt-gold w-100"
              onClick={() => {
                setMobileOpen(false);
                if (onDiscussProject) onDiscussProject();
                else handleNav('contact');
              }}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
