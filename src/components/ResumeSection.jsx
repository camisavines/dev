import {
  Grid,
  Column,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
  Accordion,
  AccordionItem,
  Tag,
  Button,
  Tile,
} from '@carbon/react';
import {
  DocumentDownload,
  Building,
  Education,
  Certificate,
} from '@carbon/react/icons';
import './ResumeSection.css';

const EXPERIENCES = [
  {
    role: 'Software Engineer, Identity & Access Management',
    company: 'IBM',
    period: 'May 2021 — Present',
    location: 'Austin, TX',
    highlights: [
      'Contributed across multiple IAM teams delivering solutions for SSO provisioning, passwordless authentication (passkeys/FIDO), and AI-powered identity support tools.',
      'Led frontend architecture and UX for the SSO Provisioner — a modern platform supporting ~6,000 internal applications — reducing initial render time by 60% through performance optimization and reusable component design.',
      'Led frontend development and UX direction for the AccessHub AI chatbot (watsonx Orchestrate), redesigning flows to improve clarity and user trust; positioned to reduce identity support tickets by up to 40%.',
      'Implemented passkeys/FIDO authentication frontend in w3idProfile, advancing IBM\'s passwordless strategy and surfacing critical domain configuration blockers before production.',
      'Built and maintained secure, scalable applications supporting authentication, access provisioning, and identity workflows for 300,000+ employees.',
      'Established reusable frontend patterns and a cirrus-ready repository template adopted across multiple teams, improving development efficiency and maintainability.',
    ],
    technologies: ['React', 'JavaScript', 'TypeScript', 'IBM Carbon Design System', 'Figma', 'Node.js', 'Java', 'REST APIs', 'FIDO / WebAuthn', 'watsonx Orchestrate', 'Docker', 'CI/CD'],
  },
];

const EDUCATION = [
  {
    degree: 'B.S. in Computer Science',
    institution: 'Indiana University – Bloomington',
    period: '',
    details: 'Specialization: Software Engineering · Minor: Business',
  },
];

const CERTIFICATIONS = [
  {
    title: '2024 Identity Member of the Month',
    issuer: 'IBM',
    year: '2024',
    badge: 'Recognition',
  },
  {
    title: '2023 Culture Catalyst Award',
    issuer: 'IBM',
    year: '2023',
    badge: 'Award',
  },
  {
    title: '2022 IBM × BlackGirlsCode Hackathon Mentor — 1st Place Team',
    issuer: 'IBM / Call For Code',
    year: '2022',
    badge: 'Award',
  },
];

export function ResumeSection() {
  const handleDownloadResume = () => {
    // Generates/triggers a printable summary view or simulated download
    window.print();
  };

  return (
    <section id="resume" className="portfolio-section resume-section" aria-label="Resume and Work Experience">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={16} className="portfolio-section-title-wrapper resume-header-row">
          <div>
            <span className="portfolio-section-eyebrow">Career & Credentials</span>
            <h2 className="portfolio-section-heading">Resume & Experience</h2>
            <p className="portfolio-section-subheading">
              A timeline of engineering work, identity platform leadership, and community impact at IBM.
            </p>
          </div>
          <div className="resume-download-btn-wrap">
            <Button
              kind="primary"
              size="md"
              renderIcon={DocumentDownload}
              onClick={handleDownloadResume}
              aria-label="Download Printable Resume"
            >
              Print / Save Resume
            </Button>
          </div>
        </Column>

        {/* Work Experience Section using Carbon StructuredList */}
        <Column sm={4} md={8} lg={16} className="resume-exp-col">
          <div className="resume-block-header">
            <Building size={22} className="resume-block-icon" />
            <h3 className="resume-block-title">Professional Experience</h3>
          </div>

          <StructuredListWrapper ariaLabel="Work Experience Structured List" isCondensed={false}>
            <StructuredListHead>
              <StructuredListRow head>
                <StructuredListCell head style={{ width: '25%' }}>Role & Period</StructuredListCell>
                <StructuredListCell head style={{ width: '25%' }}>Company & Location</StructuredListCell>
                <StructuredListCell head style={{ width: '50%' }}>Key Impact & Technologies</StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              {EXPERIENCES.map((exp, idx) => (
                <StructuredListRow key={idx}>
                  <StructuredListCell>
                    <div className="resume-role-name">{exp.role}</div>
                    <div className="resume-period-tag">{exp.period}</div>
                  </StructuredListCell>
                  <StructuredListCell>
                    <div className="resume-company-name">{exp.company}</div>
                    <div className="resume-location-text">{exp.location}</div>
                  </StructuredListCell>
                  <StructuredListCell>
                    <ul className="resume-bullets-list">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="resume-tech-tags">
                      {exp.technologies.map((t, tIdx) => (
                        <Tag key={tIdx} type="cool-gray" size="sm">
                          {t}
                        </Tag>
                      ))}
                    </div>
                  </StructuredListCell>
                </StructuredListRow>
              ))}
            </StructuredListBody>
          </StructuredListWrapper>
        </Column>

        {/* Education & Certifications Accordion / Tiles Grid */}
        <Column sm={4} md={8} lg={8} className="resume-edu-col">
          <div className="resume-block-header">
            <Education size={22} className="resume-block-icon" />
            <h3 className="resume-block-title">Education</h3>
          </div>
          <Accordion>
            {EDUCATION.map((edu, idx) => (
              <AccordionItem key={idx} title={`${edu.degree} — ${edu.institution}`} open={idx === 0}>
                <div className="accordion-body-content">
                  <div className="edu-period">{edu.period}</div>
                  <p className="edu-details">{edu.details}</p>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </Column>

        <Column sm={4} md={8} lg={8} className="resume-certs-col">
          <div className="resume-block-header">
            <Certificate size={22} className="resume-block-icon" />
            <h3 className="resume-block-title">Certifications & Honors</h3>
          </div>
          <div className="certs-list-container">
            {CERTIFICATIONS.map((cert, idx) => (
              <Tile key={idx} className="cert-card-tile">
                <div className="cert-info">
                  <span className="cert-title">{cert.title}</span>
                  <span className="cert-meta">{cert.issuer} • {cert.year}</span>
                </div>
                <Tag type="teal" size="sm">
                  {cert.badge}
                </Tag>
              </Tile>
            ))}
          </div>
        </Column>
      </Grid>
    </section>
  );
}
