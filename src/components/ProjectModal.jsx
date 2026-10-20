import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose, onDiscussProject }) {
  if (!project) return null;

  return (
    <div className={`sgt-modal-backdrop ${project ? 'open' : ''}`} onClick={onClose}>
      <div className="sgt-project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="sgt-modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="sgt-modal-header">
          <span className="sgt-modal-category">{project.category}</span>
          <h2 className="sgt-modal-title">{project.title}</h2>
          <span className="sgt-badge-gold" style={{ fontSize: '0.72rem' }}>
            {project.badge || 'Illustrative Case Study'}
          </span>
        </div>

        <div className="sgt-modal-body">
          <p className="sgt-modal-overview">{project.overview}</p>

          <div className="sgt-modal-narrative-grid">
            <div className="sgt-modal-box">
              <div className="sgt-modal-box-title">The Challenge</div>
              <p>{project.challenge}</p>
            </div>
            <div className="sgt-modal-box">
              <div className="sgt-modal-box-title">The Solution</div>
              <p>{project.solution}</p>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-primary)', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              Key Architecture & Capabilities
            </div>
            <ul className="sgt-modal-features-list">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="sgt-modal-feature-item">
                  <Check size={16} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-primary)', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              Technologies Deployed
            </div>
            <div className="sgt-modal-tech-list">
              {project.technologies.map((t) => (
                <span key={t} className="sgt-tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="sgt-modal-footer">
          <span style={{ fontSize: '0.8rem', color: '#8E8E93' }}>
            {project.projectType}
          </span>
          <button 
            className="btn-sgt-gold"
            onClick={() => {
              onClose();
              if (onDiscussProject) onDiscussProject();
            }}
          >
            <span>Discuss A Similar Project</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
