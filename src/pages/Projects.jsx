import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  ExternalLink, 
  Filter, 
  Code2, 
  Cpu, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './Projects.css';

export default function Projects({ onOpenCaseStudy, onDiscussProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Application Development',
    'AI Integration & Automation',
    'Mobile & Web Application',
    'Cloud Solutions & Infrastructure',
    'Website Design & Architecture',
    'API & Integration Engineering'
  ];

  const filteredProjects = projectsData.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="sgt-projects-page">
      {/* Hero Banner */}
      <section className="sgt-projects-hero">
        <div className="sgt-projects-hero-container">
          <span className="sgt-badge-luxury">Portfolio & Architectures</span>
          <h1 className="sgt-projects-headline">
            Featured Projects & Engineering Solutions
          </h1>
          <p className="sgt-projects-subtext">
            Explore illustrative architectures and software case studies engineered across our core domains. All showcase projects reflect modern code standards, robust scalability, and enterprise design patterns.
          </p>

          <div className="sgt-projects-notice-badge">
            <span className="notice-dot"></span>
            <span>Illustrative Project Portfolio — Configured for Enterprise Demonstration</span>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="sgt-projects-content-section">
        <div className="sgt-projects-container">
          {/* Category Filter Pills */}
          <div className="sgt-projects-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`sgt-project-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Projects */}
          <div className="sgt-projects-grid-full">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="sgt-project-portfolio-card">
                {/* Visual Header / Mockup Header */}
                <div className="sgt-portfolio-card-visual">
                  <div className="sgt-portfolio-visual-badge">
                    <span>{project.category}</span>
                  </div>
                  <div className="sgt-portfolio-sample-tag">
                    {project.badge}
                  </div>
                  <div className="sgt-portfolio-schematic-bg">
                    <div className="schematic-line"></div>
                    <div className="schematic-node node-1"></div>
                    <div className="schematic-node node-2"></div>
                    <div className="schematic-node node-3"></div>
                    <div className="schematic-center-icon">
                      <Code2 size={32} />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="sgt-portfolio-card-body">
                  <div className="sgt-portfolio-meta-row">
                    <span className="sgt-portfolio-num">PROJECT // 0{idx + 1}</span>
                    <span className="sgt-portfolio-type">{project.projectType}</span>
                  </div>

                  <h2 className="sgt-portfolio-title">{project.title}</h2>
                  <p className="sgt-portfolio-overview">{project.overview}</p>

                  {/* Highlights */}
                  <div className="sgt-portfolio-highlights">
                    <div className="highlight-item">
                      <strong>Challenge:</strong> {project.challenge}
                    </div>
                    <div className="highlight-item">
                      <strong>Solution:</strong> {project.solution}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="sgt-portfolio-tech-list">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="sgt-tech-chip">{tech}</span>
                    ))}
                  </div>

                  {/* Card Action */}
                  <div className="sgt-portfolio-action-row">
                    <button 
                      className="btn-sgt-gold-sm"
                      onClick={() => onOpenCaseStudy(project)}
                    >
                      <FileText size={15} />
                      <span>Read Case Study</span>
                    </button>
                    <button 
                      className="btn-sgt-outline-sm"
                      onClick={() => onDiscussProject(project.title)}
                    >
                      <span>Discuss Similar</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="sgt-projects-bottom-cta">
        <div className="sgt-projects-container">
          <div className="sgt-projects-cta-box">
            <span className="sgt-badge-luxury">Custom Engineering</span>
            <h2 className="sgt-projects-cta-title">Have a specific architectural challenge?</h2>
            <p className="sgt-projects-cta-text">
              We design and construct tailored digital systems built from the ground up to solve your exact business constraints.
            </p>
            <button 
              className="btn-sgt-gold"
              onClick={() => onDiscussProject()}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
