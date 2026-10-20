import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Code2, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Sparkles,
  Layers
} from 'lucide-react';
import { companyData } from '../data/companyData';
import './About.css';

export default function About({ onContactClick }) {
  return (
    <div className="sgt-about-page">
      {/* 1. Hero Header */}
      <section className="sgt-about-hero">
        <div className="sgt-about-hero-container">
          <span className="sgt-badge-luxury">Enterprise Identity & Philosophy</span>
          <h1 className="sgt-about-headline">
            Engineering Precision. Built For The Long Run.
          </h1>
          <p className="sgt-about-subtext">
            SGT Technologies is an enterprise software development and technology services consultancy. We help modern organizations navigate complexity through disciplined engineering and enduring digital architecture.
          </p>
        </div>
      </section>

      {/* 2. Official Brand Message Callout */}
      <section className="sgt-about-message-section">
        <div className="sgt-about-container">
          <div className="sgt-brand-message-card">
            <div className="sgt-message-quote-mark">“</div>
            <blockquote className="sgt-brand-quote">
              {companyData.brandMessage}
            </blockquote>
            <div className="sgt-brand-signature">
              <span className="brand-author">— SGT Technologies</span>
              <span className="brand-credo">Build Beyond Limits.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="sgt-about-mission-section">
        <div className="sgt-about-container">
          <div className="sgt-mv-grid">
            <div className="sgt-mv-card mission">
              <div className="sgt-mv-icon">
                <Target size={28} />
              </div>
              <span className="sgt-mv-label">OUR MISSION</span>
              <h2 className="sgt-mv-title">Architecting Resilient Capability</h2>
              <p className="sgt-mv-text">{companyData.mission}</p>
            </div>

            <div className="sgt-mv-card vision">
              <div className="sgt-mv-icon">
                <Compass size={28} />
              </div>
              <span className="sgt-mv-label">OUR VISION</span>
              <h2 className="sgt-mv-title">The Standard in Software Craftsmanship</h2>
              <p className="sgt-mv-text">{companyData.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technology Philosophy */}
      <section className="sgt-about-philosophy-section">
        <div className="sgt-about-container">
          <div className="sgt-philosophy-box">
            <div className="sgt-philosophy-header">
              <span className="sgt-section-eyebrow">Technology Philosophy</span>
              <h2 className="sgt-philosophy-title">{companyData.technologyPhilosophy.heading}</h2>
            </div>

            <div className="sgt-philosophy-content">
              <p>{companyData.technologyPhilosophy.p1}</p>
              <p>{companyData.technologyPhilosophy.p2}</p>
            </div>

            <div className="sgt-philosophy-pillars">
              <div className="philo-pill">
                <CheckCircle2 size={18} color="var(--champagne-gold)" />
                <span>Zero Fragile Shortcuts</span>
              </div>
              <div className="philo-pill">
                <CheckCircle2 size={18} color="var(--champagne-gold)" />
                <span>Maintainable & Modular Code</span>
              </div>
              <div className="philo-pill">
                <CheckCircle2 size={18} color="var(--champagne-gold)" />
                <span>Enterprise Security Boundaries</span>
              </div>
              <div className="philo-pill">
                <CheckCircle2 size={18} color="var(--champagne-gold)" />
                <span>Measurable Business ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="sgt-about-values-section">
        <div className="sgt-about-container">
          <div className="sgt-section-header">
            <span className="sgt-section-eyebrow">Core Principles</span>
            <h2 className="sgt-section-title">The Foundation of Every Engagement</h2>
            <p className="sgt-section-subtitle">
              Six uncompromising tenets guiding our engineering teams, client interactions, and technical architectures.
            </p>
          </div>

          <div className="sgt-about-values-grid">
            {companyData.coreValues.map((val, idx) => (
              <div key={idx} className="sgt-about-value-card">
                <div className="sgt-value-num">0{idx + 1}</div>
                <h3 className="sgt-value-title">{val.title}</h3>
                <p className="sgt-value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Commitment to Quality & Client Relationships */}
      <section className="sgt-about-commitment-section">
        <div className="sgt-about-container">
          <div className="sgt-commitment-card">
            <div className="sgt-commitment-content">
              <span className="sgt-badge-luxury">Our Client Commitment</span>
              <h2 className="sgt-commitment-title">High Craft, Total Transparency, and Direct Partnership</h2>
              <p className="sgt-commitment-desc">
                When you partner with SGT Technologies, you work directly with experienced software engineers and architects who are invested in your long-term success. We do not pass you off to junior layers or obscure progress behind technical jargon.
              </p>
              <div className="sgt-commitment-bullets">
                <div className="commitment-bullet">
                  <div className="bullet-dot"></div>
                  <div>
                    <strong>Direct Architectural Access:</strong> Communicate directly with lead engineers and technical architects throughout the engagement.
                  </div>
                </div>
                <div className="commitment-bullet">
                  <div className="bullet-dot"></div>
                  <div>
                    <strong>Disciplined Code Standards:</strong> Strict code reviews, comprehensive automated testing, and clean documentation with full IP handover.
                  </div>
                </div>
                <div className="commitment-bullet">
                  <div className="bullet-dot"></div>
                  <div>
                    <strong>Long-Term Reliability:</strong> Post-deployment stability, proactive monitoring, and smooth scaling as your user base expands.
                  </div>
                </div>
              </div>

              <div className="sgt-commitment-actions">
                <button className="btn-sgt-gold" onClick={onContactClick}>
                  <span>Discuss Your Project With Our Team</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
