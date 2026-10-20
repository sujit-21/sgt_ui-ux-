import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  Send, 
  Mail, 
  Briefcase, 
  Compass, 
  Terminal, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { companyData } from '../data/companyData';
import './Careers.css';

export default function Careers() {
  const [candidateForm, setCandidateForm] = useState({
    name: '',
    email: '',
    roleInterest: 'Senior Software Engineer',
    linkedinOrPortfolio: '',
    introMessage: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const culturePillars = [
    {
      title: "Engineering Autonomy & Ownership",
      desc: "We trust talented engineers with high degrees of ownership over architecture and problem-solving, without excessive layers of micromanagement."
    },
    {
      title: "Obsession With Craftsmanship",
      desc: "We take immense pride in clean architectures, readable codebases, comprehensive testing, and systems that stand the test of time."
    },
    {
      title: "Continuous Technical Growth",
      desc: "Work with modern technology stacks: TypeScript, Go, Python, distributed systems, vector AI pipelines, and cloud meshes."
    },
    {
      title: "Transparent, Respectful Culture",
      desc: "Honest communication, direct feedback, and deep respect for individual balance and sustainable development practices."
    }
  ];

  return (
    <div className="sgt-careers-page">
      {/* 1. Hero Header */}
      <section className="sgt-careers-hero">
        <div className="sgt-careers-hero-container">
          <span className="sgt-badge-luxury">Careers & Culture</span>
          <h1 className="sgt-careers-headline">
            Build Meaningful Software With Us
          </h1>
          <p className="sgt-careers-subtext">
            Join an engineering-driven culture committed to technical excellence, intellectual curiosity, and building software that moves modern enterprises forward.
          </p>
        </div>
      </section>

      {/* 2. Company Culture */}
      <section className="sgt-careers-culture-section">
        <div className="sgt-careers-container">
          <div className="sgt-section-header">
            <span className="sgt-section-eyebrow">Our Culture</span>
            <h2 className="sgt-section-title">The Engineering Environment at SGT</h2>
            <p className="sgt-section-subtitle">
              We cultivate a workplace where deep technical rigor and intellectual honesty thrive.
            </p>
          </div>

          <div className="sgt-culture-grid">
            {culturePillars.map((pillar, i) => (
              <div key={i} className="sgt-culture-card">
                <div className="sgt-culture-num">0{i + 1}</div>
                <h3 className="sgt-culture-title">{pillar.title}</h3>
                <p className="sgt-culture-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Positions Notice & General Inquiry */}
      <section className="sgt-careers-inquiry-section">
        <div className="sgt-careers-container">
          <div className="sgt-openings-notice-card">
            <div className="sgt-openings-notice-content">
              <span className="sgt-badge-luxury">Talent Network</span>
              <h2 className="sgt-openings-headline">Interested in Working With Us?</h2>
              <p className="sgt-openings-text">
                We do not currently have published open vacancies, but we are always eager to connect with exceptional engineers, software architects, and technical product designers who share our commitment to craftsmanship.
              </p>
              <p className="sgt-openings-sub">
                If you believe your technical philosophy aligns with SGT Technologies, introduce yourself below or email our talent desk directly.
              </p>

              <div className="sgt-talent-direct">
                <Mail size={18} className="talent-mail-icon" />
                <span>Direct inquiries: <strong>{companyData.contactInfo.email}</strong></span>
              </div>
            </div>

            {/* Candidate General Inquiry Form */}
            <div className="sgt-candidate-form-box">
              <h3 className="sgt-form-box-title">General Candidate Introduction</h3>
              <p className="sgt-form-box-sub">Share your background and tell us what you love to build.</p>

              {submitted ? (
                <div className="sgt-candidate-success">
                  <CheckCircle2 size={36} color="#10b981" />
                  <h4>Thank You for Connecting</h4>
                  <p>
                    Your introduction has been recorded. When technical opportunities matching your background emerge, our engineering team will reach out directly.
                  </p>
                  <button 
                    className="btn-sgt-outline-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setCandidateForm({
                        name: '',
                        email: '',
                        roleInterest: 'Senior Software Engineer',
                        linkedinOrPortfolio: '',
                        introMessage: ''
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="sgt-candidate-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Alex Mercer"
                      value={candidateForm.name}
                      onChange={(e) => setCandidateForm({...candidateForm, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="alex@domain.com"
                      value={candidateForm.email}
                      onChange={(e) => setCandidateForm({...candidateForm, email: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Primary Discipline / Role Interest *</label>
                    <select 
                      value={candidateForm.roleInterest}
                      onChange={(e) => setCandidateForm({...candidateForm, roleInterest: e.target.value})}
                    >
                      <option value="Senior Software Engineer">Full-Stack / Software Engineering</option>
                      <option value="Cloud & Systems Architect">Cloud Architecture & DevOps</option>
                      <option value="AI / ML Engineer">AI Integration & Automation</option>
                      <option value="Mobile Application Developer">Mobile Application Development</option>
                      <option value="UI/UX Product Designer">UI / UX Product Design</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Portfolio / GitHub / LinkedIn URL *</label>
                    <input 
                      type="url" 
                      required 
                      placeholder="https://github.com/... or https://linkedin.com/in/..."
                      value={candidateForm.linkedinOrPortfolio}
                      onChange={(e) => setCandidateForm({...candidateForm, linkedinOrPortfolio: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Brief Introduction / Technical Stack</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us about the engineering challenges you enjoy solving..."
                      value={candidateForm.introMessage}
                      onChange={(e) => setCandidateForm({...candidateForm, introMessage: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-sgt-gold btn-full"
                    disabled={submitting}
                  >
                    {submitting ? <span>Submitting...</span> : (
                      <>
                        <span>Submit Introduction</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
