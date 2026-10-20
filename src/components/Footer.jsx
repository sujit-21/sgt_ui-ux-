import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';
import './Footer.css';

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

export default function Footer({ setCurrentPage, onSelectService }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const navTo = (page, serviceId = null) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (serviceId && onSelectService) {
      onSelectService(serviceId);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="sgt-footer">
      <div className="sgt-footer-container">
        {/* Pre-footer Callout Banner */}
        <div className="sgt-footer-cta-card">
          <div className="sgt-footer-cta-info">
            <span className="sgt-badge-luxury">Next-Gen Software Partnership</span>
            <h3 className="sgt-footer-cta-heading">Ready to elevate your digital capability?</h3>
            <p className="sgt-footer-cta-sub">
              Discuss your project goals with our senior engineering and architecture team.
            </p>
          </div>
          <div className="sgt-footer-cta-actions">
            <button 
              className="btn-sgt-gold"
              onClick={() => navTo('contact')}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="sgt-footer-grid">
          {/* Brand Column */}
          <div className="sgt-footer-brand-col">
            <div className="sgt-footer-brand-logo" onClick={() => navTo('home')}>
              <div className="sgt-footer-monogram">
                <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="12" width="76" height="76" rx="16" stroke="#C8A96B" strokeWidth="6" fill="none"/>
                  <path d="M35 34 C35 30, 42 28, 50 28 C58 28, 65 31, 65 37 C65 44, 45 46, 45 53 C45 58, 52 60, 58 60 C64 60, 65 57, 65 57" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none"/>
                  <path d="M28 72 L72 72" stroke="#C8A96B" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="sgt-footer-brand-name">
                SGT <span>Technologies</span>
              </span>
            </div>

            <p className="sgt-footer-tagline-text">
              <strong>Tagline:</strong> Build Beyond Limits.
            </p>
            <p className="sgt-footer-desc">
              We engineer modern digital experiences, intelligent software, and scalable technology solutions that help businesses innovate, operate smarter, and grow.
            </p>

            <div className="sgt-footer-socials">
              <a href={companyData.contactInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="sgt-footer-social-btn" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={companyData.contactInfo.socialLinks.twitter} target="_blank" rel="noreferrer" className="sgt-footer-social-btn" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href={companyData.contactInfo.socialLinks.github} target="_blank" rel="noreferrer" className="sgt-footer-social-btn" aria-label="GitHub">
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="sgt-footer-col">
            <h4 className="sgt-footer-heading">Navigation</h4>
            <ul className="sgt-footer-links">
              <li>
                <button className="sgt-footer-link-btn" onClick={() => navTo('home')}>Home</button>
              </li>
              <li>
                <button className="sgt-footer-link-btn" onClick={() => navTo('services')}>Services</button>
              </li>
              <li>
                <button className="sgt-footer-link-btn" onClick={() => navTo('projects')}>Projects</button>
              </li>
              <li>
                <button className="sgt-footer-link-btn" onClick={() => navTo('about')}>About Us</button>
              </li>
              <li>
                <button className="sgt-footer-link-btn" onClick={() => navTo('careers')}>Careers</button>
              </li>
              <li>
                <button className="sgt-footer-link-btn" onClick={() => navTo('contact')}>Contact</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="sgt-footer-col">
            <h4 className="sgt-footer-heading">Our Services</h4>
            <ul className="sgt-footer-links">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button 
                    className="sgt-footer-link-btn" 
                    onClick={() => navTo('services', service.id)}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button className="sgt-footer-link-btn" onClick={() => navTo('services')} style={{ color: 'var(--champagne-gold)', fontWeight: 600 }}>
                  View All 8 Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="sgt-footer-col">
            <h4 className="sgt-footer-heading">Contact & Inquiries</h4>
            <div className="sgt-footer-contact-list">
              <div className="sgt-footer-contact-item">
                <Mail size={16} className="sgt-footer-contact-icon" />
                <span>{companyData.contactInfo.email}</span>
              </div>
              <div className="sgt-footer-contact-item">
                <Phone size={16} className="sgt-footer-contact-icon" />
                <span>{companyData.contactInfo.phone}</span>
              </div>
              <div className="sgt-footer-contact-item">
                <MapPin size={16} className="sgt-footer-contact-icon" />
                <span>{companyData.contactInfo.address}</span>
              </div>
            </div>

            <div className="sgt-footer-newsletter">
              <p className="sgt-footer-newsletter-label">Stay informed on tech insights:</p>
              {subscribed ? (
                <div className="sgt-footer-subscribed-msg">
                  <CheckCircle2 size={16} />
                  <span>Thank you for subscribing.</span>
                </div>
              ) : (
                <form className="sgt-footer-newsletter-form" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    placeholder="Business email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="sgt-footer-newsletter-input"
                  />
                  <button type="submit" className="sgt-footer-newsletter-btn" aria-label="Subscribe">
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="sgt-footer-bottom">
          <div className="sgt-footer-bottom-copy">
            © {new Date().getFullYear()} SGT Technologies. All rights reserved. Build Beyond Limits.
          </div>
          <div className="sgt-footer-bottom-notice">
            Service-based software & technology consultancy. Custom software solutions engineered for enterprise scale.
          </div>
        </div>
      </div>
    </footer>
  );
}
