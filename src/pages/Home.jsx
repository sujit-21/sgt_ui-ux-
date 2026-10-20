import React from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Code2, 
  Globe, 
  Layout, 
  Smartphone, 
  Sparkles, 
  Cloud, 
  Layers, 
  Settings, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Activity, 
  ArrowUpRight,
  Cpu,
  Lock,
  Workflow
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { companyData } from '../data/companyData';
import './Home.css';

const serviceIconMap = {
  Globe: Globe,
  Code2: Code2,
  Layout: Layout,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  Cloud: Cloud,
  Layers: Layers,
  Settings: Settings
};

export default function Home({ onNavigatePage, onSelectService, onOpenProjectModal }) {
  const featuredProjects = projectsData.slice(0, 3);

  const handleServiceClick = (serviceId) => {
    if (onSelectService) {
      onSelectService(serviceId);
    } else if (onNavigatePage) {
      onNavigatePage('services');
    }
  };

  return (
    <div className="sgt-home">
      {/* 1. Hero Section */}
      <section className="sgt-hero-section">
        <div className="sgt-hero-glow-top"></div>
        <div className="sgt-hero-container">
          <div className="sgt-hero-badge">
            <span className="sgt-badge-gold-dot"></span>
            <span className="sgt-badge-text">Enterprise Software & IT Solutions</span>
          </div>

          <h1 className="sgt-hero-headline">
            Build Beyond Limits.
          </h1>

          <p className="sgt-hero-subtext">
            We engineer modern digital experiences, intelligent software, and scalable technology solutions that help businesses innovate, operate smarter, and grow.
          </p>

          <div className="sgt-hero-cta-group">
            <button 
              className="btn-sgt-gold"
              onClick={() => onNavigatePage('contact')}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={17} />
            </button>
            <button 
              className="btn-sgt-outline"
              onClick={() => onNavigatePage('services')}
            >
              <span>Explore Our Services</span>
              <ChevronRight size={17} />
            </button>
          </div>

          {/* Interactive Technology Architecture Showcase Mockup */}
          <div className="sgt-hero-visual-card">
            <div className="sgt-hero-visual-header">
              <div className="sgt-hero-visual-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="sgt-hero-visual-title">
                SGT System Architecture & Engineering Stack
              </div>
              <div className="sgt-hero-visual-status">
                <span className="pulse-dot"></span> Production Ready
              </div>
            </div>

            <div className="sgt-hero-visual-body">
              <div className="sgt-tech-matrix-grid">
                <div className="sgt-tech-matrix-item">
                  <div className="matrix-icon"><Globe size={20} /></div>
                  <div className="matrix-content">
                    <span className="matrix-layer">Frontend & Client Layer</span>
                    <h4>Modern Web & Mobile UI</h4>
                    <p>React • Next.js • React Native • TypeScript</p>
                  </div>
                </div>

                <div className="sgt-tech-matrix-item">
                  <div className="matrix-icon"><Cpu size={20} /></div>
                  <div className="matrix-content">
                    <span className="matrix-layer">Core Application Backend</span>
                    <h4>Custom Microservices & APIs</h4>
                    <p>Node.js • Go • Python • REST / GraphQL / gRPC</p>
                  </div>
                </div>

                <div className="sgt-tech-matrix-item">
                  <div className="matrix-icon"><Sparkles size={20} /></div>
                  <div className="matrix-content">
                    <span className="matrix-layer">Intelligence & Automation</span>
                    <h4>AI Integration & Workflows</h4>
                    <p>PyTorch • Vector Embeddings • LLM Pipelines</p>
                  </div>
                </div>

                <div className="sgt-tech-matrix-item">
                  <div className="matrix-icon"><Cloud size={20} /></div>
                  <div className="matrix-content">
                    <span className="matrix-layer">Cloud & Deployment Mesh</span>
                    <h4>High Availability Infrastructure</h4>
                    <p>AWS • GCP • Kubernetes • Docker • CI/CD Pipelines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Overview Section */}
      <section className="sgt-services-section">
        <div className="sgt-section-container">
          <div className="sgt-section-header">
            <span className="sgt-section-eyebrow">Our Capabilities</span>
            <h2 className="sgt-section-title">End-to-End Technology Services</h2>
            <p className="sgt-section-subtitle">
              We provide comprehensive engineering, modern architectural design, and reliable technical consulting tailored to your exact business requirements.
            </p>
          </div>

          <div className="sgt-services-grid">
            {servicesData.map((service) => {
              const IconComponent = serviceIconMap[service.icon] || Code2;
              return (
                <div 
                  key={service.id} 
                  className="sgt-service-card"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="sgt-service-card-top">
                    <div className="sgt-service-icon-box">
                      <IconComponent size={24} />
                    </div>
                    <span className="sgt-service-card-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <h3 className="sgt-service-card-title">{service.title}</h3>
                  <p className="sgt-service-card-desc">{service.shortDesc}</p>

                  <div className="sgt-service-card-footer">
                    <span className="sgt-service-link-text">
                      Learn More Details
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sgt-services-section-cta">
            <button 
              className="btn-sgt-outline"
              onClick={() => onNavigatePage('services')}
            >
              <span>Explore All 8 Specialized Services</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Why Choose SGT Technologies */}
      <section className="sgt-why-section">
        <div className="sgt-section-container">
          <div className="sgt-section-header">
            <span className="sgt-section-eyebrow">Why Choose SGT Technologies</span>
            <h2 className="sgt-section-title">Built On Discipline, Quality, and Partnership</h2>
            <p className="sgt-section-subtitle">
              We focus on what genuinely drives technological success: sound architecture, disciplined development, and direct, transparent collaboration.
            </p>
          </div>

          <div className="sgt-why-grid">
            {companyData.coreValues.map((value, idx) => (
              <div key={idx} className="sgt-why-card">
                <div className="sgt-why-card-number">0{idx + 1}</div>
                <h3 className="sgt-why-card-title">{value.title}</h3>
                <p className="sgt-why-card-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects */}
      <section className="sgt-projects-section">
        <div className="sgt-section-container">
          <div className="sgt-projects-section-header">
            <div>
              <span className="sgt-section-eyebrow">Featured Work</span>
              <h2 className="sgt-section-title">Illustrative Solutions & Case Studies</h2>
              <p className="sgt-section-subtitle">
                A selection of representative architectures and software solutions demonstrating our technical depth across industries.
              </p>
            </div>
            <button 
              className="btn-sgt-outline"
              onClick={() => onNavigatePage('projects')}
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="sgt-projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="sgt-project-card">
                <div className="sgt-project-badge-bar">
                  <span className="sgt-project-category-badge">{project.category}</span>
                  <span className="sgt-project-illustrative-tag">{project.badge}</span>
                </div>

                <h3 className="sgt-project-title">{project.title}</h3>
                <p className="sgt-project-overview">{project.overview}</p>

                <div className="sgt-project-tech-stack">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="sgt-tech-pill">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="sgt-tech-pill-more">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="sgt-project-card-action">
                  <button 
                    className="sgt-project-view-btn"
                    onClick={() => onOpenProjectModal(project)}
                  >
                    <span>Read Case Study Details</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="sgt-process-section">
        <div className="sgt-section-container">
          <div className="sgt-section-header">
            <span className="sgt-section-eyebrow">Our Methodology</span>
            <h2 className="sgt-section-title">How We Turn Ideas Into Production Reality</h2>
            <p className="sgt-section-subtitle">
              A structured, transparent 5-step engineering lifecycle engineered to mitigate risk, maintain velocity, and ensure exceptional delivery.
            </p>
          </div>

          <div className="sgt-process-steps-grid">
            {companyData.ourProcess.map((step) => (
              <div key={step.step} className="sgt-process-step-card">
                <div className="sgt-process-step-number">{step.step}</div>
                <h3 className="sgt-process-step-title">{step.title}</h3>
                <p className="sgt-process-step-desc">{step.desc}</p>
                <div className="sgt-process-step-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action (CTA) */}
      <section className="sgt-cta-section">
        <div className="sgt-section-container">
          <div className="sgt-cta-box">
            <div className="sgt-cta-glow"></div>
            <span className="sgt-badge-luxury">Start A Partnership</span>
            <h2 className="sgt-cta-title">Have an Idea? Let's Build It.</h2>
            <p className="sgt-cta-text">
              Tell us about your business goals, and let's explore the right technology solution for your needs.
            </p>
            <div className="sgt-cta-actions">
              <button 
                className="btn-sgt-gold btn-large"
                onClick={() => onNavigatePage('contact')}
              >
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
