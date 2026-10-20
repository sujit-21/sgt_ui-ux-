import React, { useState } from 'react';
import { 
  Globe, 
  Code2, 
  Layout, 
  Smartphone, 
  Sparkles, 
  Cloud, 
  Layers, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  AlertCircle,
  Cpu
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './Services.css';

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

export default function Services({ onSelectServiceForContact }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services (8)' },
    { id: 'dev', label: 'Software & Web Dev' },
    { id: 'ai-cloud', label: 'AI, Cloud & Infrastructure' },
    { id: 'systems', label: 'Integration & Support' }
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'dev') {
      return ['website-design-development', 'custom-software-development', 'web-application-development', 'mobile-app-development'].includes(service.id);
    }
    if (activeCategory === 'ai-cloud') {
      return ['ai-integration-automation', 'cloud-solutions-infrastructure'].includes(service.id);
    }
    if (activeCategory === 'systems') {
      return ['api-development-integration', 'maintenance-technical-support'].includes(service.id);
    }
    return true;
  });

  return (
    <div className="sgt-services-page">
      {/* Header Banner */}
      <section className="sgt-services-hero">
        <div className="sgt-services-hero-container">
          <span className="sgt-badge-luxury">Service Portfolio</span>
          <h1 className="sgt-services-headline">
            Specialized Software & Technology Services
          </h1>
          <p className="sgt-services-subtext">
            Enterprise-grade digital solutions tailored to modern businesses, funded startups, and industry leaders. We deliver custom architecture, intelligent engineering, and reliable long-term technical execution.
          </p>

          {/* Filter Pills */}
          <div className="sgt-services-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`sgt-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List / Cards */}
      <section className="sgt-services-content-section">
        <div className="sgt-services-container">
          <div className="sgt-services-stack">
            {filteredServices.map((service, index) => {
              const IconComp = serviceIconMap[service.icon] || Code2;
              return (
                <div key={service.id} id={service.id} className="sgt-service-detail-card">
                  {/* Service Header */}
                  <div className="sgt-service-detail-header">
                    <div className="sgt-service-detail-icon-wrap">
                      <IconComp size={30} />
                    </div>
                    <div className="sgt-service-detail-title-wrap">
                      <div className="sgt-service-index-tag">SERVICE 0{index + 1}</div>
                      <h2 className="sgt-service-detail-name">{service.title}</h2>
                      <p className="sgt-service-detail-lead">{service.fullDesc}</p>
                    </div>
                  </div>

                  {/* 3 Pillars: Problems Solved, Business Benefits, Typical Use Cases */}
                  <div className="sgt-service-pillars-grid">
                    {/* Problems It Solves */}
                    <div className="sgt-pillar-box problems">
                      <div className="sgt-pillar-title">
                        <AlertCircle size={16} className="pillar-icon problems" />
                        <span>Problems It Solves</span>
                      </div>
                      <ul className="sgt-pillar-list">
                        {service.problemsSolved.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Benefits */}
                    <div className="sgt-pillar-box benefits">
                      <div className="sgt-pillar-title">
                        <CheckCircle2 size={16} className="pillar-icon benefits" />
                        <span>Business Benefits</span>
                      </div>
                      <ul className="sgt-pillar-list">
                        {service.businessBenefits.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Typical Use Cases */}
                    <div className="sgt-pillar-box usecases">
                      <div className="sgt-pillar-title">
                        <Target size={16} className="pillar-icon usecases" />
                        <span>Typical Use Cases</span>
                      </div>
                      <ul className="sgt-pillar-list">
                        {service.typicalUseCases.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Bar: Tech Stack & CTA */}
                  <div className="sgt-service-detail-footer">
                    <div className="sgt-service-tech-group">
                      <span className="sgt-tech-label">Core Technologies:</span>
                      <div className="sgt-service-tech-tags">
                        {service.technologies.map((t, i) => (
                          <span key={i} className="sgt-tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="sgt-service-cta-wrap">
                      <button 
                        className="btn-sgt-gold"
                        onClick={() => onSelectServiceForContact(service.title)}
                      >
                        <span>Discuss This Service</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Global CTA */}
      <section className="sgt-services-bottom-cta">
        <div className="sgt-services-container">
          <div className="sgt-services-cta-inner">
            <span className="sgt-badge-luxury">Custom Consultation</span>
            <h2 className="sgt-services-cta-heading">Need a custom technology solution?</h2>
            <p className="sgt-services-cta-text">
              We specialize in complex, tailored engineering requirements that don't fit into cookie-cutter boxes. Talk to our technical team today.
            </p>
            <button 
              className="btn-sgt-gold"
              onClick={() => onSelectServiceForContact('')}
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
