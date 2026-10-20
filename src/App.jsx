import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

// 6 Core Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState(null);
  const [preselectedService, setPreselectedService] = useState('');

  // Synchronize URL Hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#\/?/, '');
      const validPages = ['home', 'services', 'projects', 'about', 'careers', 'contact'];
      if (rawHash && validPages.includes(rawHash)) {
        setCurrentPage(rawHash);
      } else if (!rawHash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check on load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiscussProject = (serviceOrProjectTitle = '') => {
    if (serviceOrProjectTitle) {
      setPreselectedService(serviceOrProjectTitle);
    }
    navigateTo('contact');
  };

  const handleSelectServiceFromAnywhere = (serviceId) => {
    navigateTo('services');
    setTimeout(() => {
      if (serviceId) {
        const el = document.getElementById(serviceId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  };

  const handleOpenProjectModal = (project) => {
    setSelectedProjectForModal(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProjectForModal(null);
  };

  return (
    <div className="sgt-app-wrapper">
      {/* Global Navigation */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        onDiscussProject={() => handleDiscussProject()}
      />

      {/* Main Routed Page Content */}
      <main className="sgt-main-content">
        {currentPage === 'home' && (
          <Home 
            onNavigatePage={navigateTo}
            onSelectService={handleSelectServiceFromAnywhere}
            onOpenProjectModal={handleOpenProjectModal}
          />
        )}

        {currentPage === 'services' && (
          <Services 
            onSelectServiceForContact={(serviceTitle) => handleDiscussProject(serviceTitle)}
          />
        )}

        {currentPage === 'projects' && (
          <Projects 
            onOpenCaseStudy={handleOpenProjectModal}
            onDiscussProject={(title) => handleDiscussProject(title)}
          />
        )}

        {currentPage === 'about' && (
          <About 
            onContactClick={() => handleDiscussProject()}
          />
        )}

        {currentPage === 'careers' && (
          <Careers />
        )}

        {currentPage === 'contact' && (
          <Contact 
            preselectedService={preselectedService}
          />
        )}
      </main>

      {/* Project Case Study Detail Modal */}
      <ProjectModal 
        project={selectedProjectForModal}
        onClose={handleCloseProjectModal}
        onDiscussProject={() => {
          const title = selectedProjectForModal?.title || '';
          handleDiscussProject(title);
        }}
      />

      {/* Global Luxury Enterprise Footer */}
      <Footer 
        setCurrentPage={navigateTo}
        onSelectService={handleSelectServiceFromAnywhere}
      />
    </div>
  );
}
