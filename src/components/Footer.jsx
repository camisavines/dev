import { Grid, Column, Button } from '@carbon/react';
import {
  ArrowUp,
  LogoGithub,
  LogoLinkedin,
  Email,
  Code,
} from '@carbon/react/icons';
import './Footer.css';

export function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer" aria-label="Page footer">
      <Grid fullWidth className="footer-grid">
        <Column sm={4} md={4} lg={6} className="footer-brand-col">
          <div className="footer-brand-title">Camisa Vines</div>
          <p className="footer-brand-tagline">
            Senior Software Engineer & AI Systems Architect. Crafting resilient enterprise architectures and human-centric developer experiences.
          </p>
          <div className="footer-built-badge">
            <Code size={16} /> Built exclusively with IBM Carbon Design System v11
          </div>
        </Column>

        <Column sm={4} md={2} lg={4} className="footer-links-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links-list">
            <li>
              <button type="button" className="footer-link-btn" onClick={() => onNavigate('hero')}>
                Introduction
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => onNavigate('about')}>
                About & Skills
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => onNavigate('resume')}>
                Experience & Resume
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => onNavigate('projects')}>
                Engineering Projects
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={() => onNavigate('contact')}>
                Get in Touch
              </button>
            </li>
          </ul>
        </Column>

        <Column sm={4} md={2} lg={6} className="footer-social-col">
          <div className="footer-social-top">
            <h4 className="footer-heading">Connect & Repositories</h4>
            <div className="footer-social-icons">
              <Button
                hasIconOnly
                iconDescription="GitHub Profile (opens in new tab)"
                renderIcon={LogoGithub}
                kind="ghost"
                size="md"
                onClick={() => window.open('https://github.com/camisavines', '_blank', 'noopener,noreferrer')}
              />
              <Button
                hasIconOnly
                iconDescription="LinkedIn Profile (opens in new tab)"
                renderIcon={LogoLinkedin}
                kind="ghost"
                size="md"
                onClick={() => window.open('https://linkedin.com/in/camisavines', '_blank', 'noopener,noreferrer')}
              />
              <Button
                hasIconOnly
                iconDescription="Email Camisa Vines"
                renderIcon={Email}
                kind="ghost"
                size="md"
                onClick={() => window.location.href = 'mailto:camisa@camisavines.com'}
              />
            </div>
          </div>

          <div className="footer-back-to-top">
            <Button
              kind="tertiary"
              size="sm"
              renderIcon={ArrowUp}
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              Back to top
            </Button>
          </div>
        </Column>

        <Column sm={4} md={8} lg={16} className="footer-bottom-row">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Camisa Vines. Designed and engineered according to IBM Design Language guidelines.
          </div>
          <div className="footer-compliance">
            <span>WCAG 2.1 AA Compliant</span>
            <span>•</span>
            <span>Carbon Motion & Tokens</span>
          </div>
        </Column>
      </Grid>
    </footer>
  );
}
