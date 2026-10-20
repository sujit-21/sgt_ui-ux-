import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';
import './Contact.css';

// SVG Brand Icons
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    phoneNumber: '',
    serviceRequired: preselectedService || 'Website Design & Development',
    estimatedBudget: 'Flexible / To Be Discussed',
    projectDetails: '',
    honeypot: '' // Spam protection trap
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Please provide a valid work email address.';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide details about your project or business goals.';
    } else if (formData.projectDetails.trim().length < 20) {
      errs.projectDetails = 'Please provide at least 20 characters describing your project requirements.';
    }
    // Spam trap: if honeypot is filled, silent reject
    if (formData.honeypot) {
      errs.honeypot = 'Spam detected.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    // Simulate reliable dispatch & prepare payload for backend endpoint
    setTimeout(() => {
      setSubmitting(false);
      setSubmittedData({
        ...formData,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 900);
  };

  return (
    <div className="sgt-contact-page">
      {/* Hero Header */}
      <section className="sgt-contact-hero">
        <div className="sgt-contact-hero-container">
          <span className="sgt-badge-luxury">Start A Partnership</span>
          <h1 className="sgt-contact-headline">
            Discuss Your Project With SGT
          </h1>
          <p className="sgt-contact-subtext">
            Tell us about your business goals, technical challenges, or upcoming software initiatives. Our senior architecture and technology team will review your specifications.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="sgt-contact-content-section">
        <div className="sgt-contact-container">
          <div className="sgt-contact-layout-grid">
            {/* Left: Contact Info & Reassurance */}
            <div className="sgt-contact-info-col">
              <div className="sgt-contact-info-box">
                <span className="sgt-section-eyebrow">Direct Contact</span>
                <h2 className="sgt-contact-info-title">Consultation & Office Details</h2>
                <p className="sgt-contact-info-desc">
                  We maintain strict client confidentiality. Initial consultations include architectural feasibility and transparent project scoping.
                </p>

                <div className="sgt-contact-items-list">
                  <div className="sgt-contact-item-row">
                    <div className="item-icon-box">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="item-label">Direct Email</div>
                      <div className="item-value">{companyData.contactInfo.email}</div>
                    </div>
                  </div>

                  <div className="sgt-contact-item-row">
                    <div className="item-icon-box">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="item-label">Telephone</div>
                      <div className="item-value">{companyData.contactInfo.phone}</div>
                    </div>
                  </div>

                  <div className="sgt-contact-item-row">
                    <div className="item-icon-box">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="item-label">Office Location</div>
                      <div className="item-value">{companyData.contactInfo.address}</div>
                    </div>
                  </div>

                  <div className="sgt-contact-item-row">
                    <div className="item-icon-box">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="item-label">Working Hours</div>
                      <div className="item-value">{companyData.contactInfo.businessHours}</div>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="sgt-contact-social-block">
                  <span className="social-block-label">Follow SGT Technologies</span>
                  <div className="sgt-contact-social-links">
                    <a href={companyData.contactInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn">
                      <LinkedInIcon />
                      <span>LinkedIn</span>
                    </a>
                    <a href={companyData.contactInfo.socialLinks.twitter} target="_blank" rel="noreferrer" className="social-pill" aria-label="Twitter">
                      <TwitterIcon />
                      <span>Twitter / X</span>
                    </a>
                    <a href={companyData.contactInfo.socialLinks.github} target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub">
                      <GitHubIcon />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Integration Notice */}
                <div className="sgt-form-integration-notice">
                  <ShieldCheck size={16} className="notice-icon" />
                  <span>
                    Enterprise Privacy: All submissions are treated under mutual NDA guidelines. We never share technical briefs with third parties.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: The Enquiry Form */}
            <div className="sgt-contact-form-col">
              <div className="sgt-form-card">
                {submittedData ? (
                  <div className="sgt-form-success-state">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={48} color="#10b981" />
                    </div>
                    <h3 className="success-title">Project Enquiry Received</h3>
                    <p className="success-lead">
                      Thank you, <strong>{submittedData.fullName}</strong>. Your project specification has been logged.
                    </p>

                    <div className="success-summary-box">
                      <div className="summary-row">
                        <span>Service Required:</span>
                        <strong>{submittedData.serviceRequired}</strong>
                      </div>
                      <div className="summary-row">
                        <span>Business Email:</span>
                        <strong>{submittedData.businessEmail}</strong>
                      </div>
                      {submittedData.companyName && (
                        <div className="summary-row">
                          <span>Company:</span>
                          <strong>{submittedData.companyName}</strong>
                        </div>
                      )}
                      <div className="summary-row">
                        <span>Estimated Budget:</span>
                        <strong>{submittedData.estimatedBudget}</strong>
                      </div>
                      <div className="summary-row">
                        <span>Submitted At:</span>
                        <strong>{submittedData.submittedAt}</strong>
                      </div>
                    </div>

                    <div className="success-next-steps">
                      <h4>What Happens Next?</h4>
                      <ol>
                        <li>Our technical team analyzes your project scope.</li>
                        <li>An architect will reach out within 1 business day with initial feedback.</li>
                        <li>We schedule an introductory discovery consultation to align on milestones.</li>
                      </ol>
                    </div>

                    <button 
                      className="btn-sgt-outline"
                      onClick={() => setSubmittedData(null)}
                    >
                      Submit Another Project Inquiry
                    </button>
                  </div>
                ) : (
                  <form className="sgt-enquiry-form" onSubmit={handleSubmit} noValidate>
                    <div className="sgt-form-header">
                      <h3 className="sgt-form-title">Project Details & Requirements</h3>
                      <p className="sgt-form-subtitle">Fields marked with an asterisk (*) are required.</p>
                    </div>

                    {/* Honeypot hidden input for spam bots */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                      <input 
                        type="text" 
                        name="sgt_honey_trap" 
                        tabIndex="-1" 
                        value={formData.honeypot} 
                        onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
                      />
                    </div>

                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="fullName">Full Name *</label>
                        <input 
                          id="fullName"
                          type="text" 
                          required 
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({...formData, fullName: e.target.value});
                            if (errors.fullName) setErrors({...errors, fullName: null});
                          }}
                          className={errors.fullName ? 'has-error' : ''}
                        />
                        {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                      </div>

                      <div className="form-field">
                        <label htmlFor="businessEmail">Business Email *</label>
                        <input 
                          id="businessEmail"
                          type="email" 
                          required 
                          placeholder="sarah@company.com"
                          value={formData.businessEmail}
                          onChange={(e) => {
                            setFormData({...formData, businessEmail: e.target.value});
                            if (errors.businessEmail) setErrors({...errors, businessEmail: null});
                          }}
                          className={errors.businessEmail ? 'has-error' : ''}
                        />
                        {errors.businessEmail && <span className="field-error">{errors.businessEmail}</span>}
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="companyName">Company Name (Optional)</label>
                        <input 
                          id="companyName"
                          type="text" 
                          placeholder="e.g. Acme Corp"
                          value={formData.companyName}
                          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="phoneNumber">Phone Number (Optional)</label>
                        <input 
                          id="phoneNumber"
                          type="tel" 
                          placeholder="+1 (555) 000-0000"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-field">
                        <label htmlFor="serviceRequired">Service Required *</label>
                        <select 
                          id="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({...formData, serviceRequired: e.target.value})}
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                          <option value="Multi-Service / Custom Engagement">Multi-Service / Custom Engagement</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="estimatedBudget">Estimated Budget (Optional)</label>
                        <select 
                          id="estimatedBudget"
                          value={formData.estimatedBudget}
                          onChange={(e) => setFormData({...formData, estimatedBudget: e.target.value})}
                        >
                          <option value="Flexible / To Be Discussed">Flexible / To Be Discussed</option>
                          <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                          <option value="$25,000 – $50,000">$25,000 – $50,000</option>
                          <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                          <option value="$100,000+">$100,000+ (Enterprise Architecture)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="projectDetails">Project Details *</label>
                      <textarea 
                        id="projectDetails"
                        rows={5}
                        required 
                        placeholder="Tell us about your business goals, target timelines, technical stack preferences, or specific pain points..."
                        value={formData.projectDetails}
                        onChange={(e) => {
                          setFormData({...formData, projectDetails: e.target.value});
                          if (errors.projectDetails) setErrors({...errors, projectDetails: null});
                        }}
                        className={errors.projectDetails ? 'has-error' : ''}
                      />
                      {errors.projectDetails && <span className="field-error">{errors.projectDetails}</span>}
                    </div>

                    <div className="form-action-row">
                      <button 
                        type="submit" 
                        className="btn-sgt-gold btn-large"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <span>Processing Enquiry...</span>
                        ) : (
                          <>
                            <span>Send Project Enquiry</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="form-readiness-footer">
                      <AlertCircle size={14} />
                      <span>
                        Form verification active. Connected to client-side validation, ready for direct backend / SMTP API endpoint integration.
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
