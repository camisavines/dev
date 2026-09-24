import { useState } from 'react';
import {
  Grid,
  Column,
  Tile,
  Tag,
  Button,
  ContentSwitcher,
  Switch,
} from '@carbon/react';
import {
  LogoGithub,
  Launch,
  Code,
  Ai,
  CloudServices,
  Security,
} from '@carbon/react/icons';
import './ProjectsSection.css';

const PROJECTS = [
  {
    id: 'sso-provisioner',
    title: 'SSO Provisioner — Identity Platform Rewrite',
    category: 'identity',
    description:
      'Full end-to-end UX engineering and frontend implementation of a modernized Single Sign-On provisioning application, replacing a 15–20 year-old legacy system. Designed the interface in Figma and built a parallel migration strategy that allowed the new system to run alongside the legacy platform before full decommission.',
    techStack: ['React', 'Carbon Design System', 'Figma', 'Node.js', 'ISV', 'CI/CD'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 'ask-identity',
    title: 'AskIdentity — AI-Powered Identity Support Chatbot',
    category: 'ai',
    description:
      'Lead frontend engineer for AskIdentity, an AI chatbot built on watsonx Orchestrate that automates identity-related support workflows and AccessHub requests. Redesigned core UX flows from the ground up within the first month, improving responsiveness and usability. Positioned to reduce identity support ticket volume by 40%.',
    techStack: ['React', 'Carbon Design System', 'watsonx Orchestrate', 'Node.js', 'REST APIs'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 'passkeys-w3id',
    title: 'Passkeys / FIDO Authentication — w3idProfile',
    category: 'identity',
    description:
      'Implemented the frontend passkeys experience within the w3idProfile application as part of IBM\'s passwordless authentication initiative. Collaborated with FIDO specialists and senior architects to surface domain prerequisite issues with relying party IDs (rpids) that would have become production blockers.',
    techStack: ['React', 'Java', 'FIDO / WebAuthn', 'Carbon Design System', 'Legacy Codebase'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    id: '2fa-portal',
    title: '2FA Portal — DUO to ISV Migration',
    category: 'identity',
    description:
      'Stretch assignment contributing to client-zero for the 2FA Portal initiative by consolidating multiple legacy portals into a single modernized experience. After deployment, architected a redesigned portal using Carbon and a vulnerability-free template, removing deprecated components and handing off ownership to an international team.',
    techStack: ['React', 'Carbon Design System', 'Node.js', 'ISV', '2FA / DUO'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 'frontend-template',
    title: 'Cirrus-Ready Frontend Repository Template',
    category: 'frontend',
    description:
      'Designed and implemented a standardized, cirrus-ready frontend repository template establishing consistent tooling, patterns, and structure for new projects. Adopted by the SSO Provisioner, AskIdentity AI team, and other teams across the organization. Trained team members on adoption and best practices.',
    techStack: ['React', 'Vite', 'Carbon Design System', 'ESLint', 'CI/CD', 'Node.js'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 'bluegroups-rewrite',
    title: 'Bluegroups — Full-Stack Modernization',
    category: 'frontend',
    description:
      'Fully rewrote the Bluegroups application — both frontend and backend — migrating it from a Java 8 monolith to a Node.js REST API with a React frontend. Reduced technical debt, improved maintainability, and left the system positioned for long-term ownership.',
    techStack: ['React', 'Node.js', 'REST API', 'Java 8 (legacy)', 'Carbon Design System'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="portfolio-section projects-section" aria-label="Selected Engineering Projects">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={16} className="portfolio-section-title-wrapper">
          <span className="portfolio-section-eyebrow">Featured Work</span>
          <h2 className="portfolio-section-heading">Engineering Portfolio</h2>
          <p className="portfolio-section-subheading">
            Selected projects from identity platform modernization, AI-powered tooling, and reusable frontend systems at IBM.
          </p>
        </Column>

        {/* Filter Switcher */}
        <Column sm={4} md={8} lg={16} className="projects-filter-col">
          <div className="filter-wrapper">
            <ContentSwitcher
              size="md"
              selectedIndex={
                selectedCategory === 'all'
                  ? 0
                  : selectedCategory === 'ai'
                  ? 1
                  : selectedCategory === 'frontend'
                  ? 2
                  : 3
              }
              onChange={(evt) => {
                const map = ['all', 'ai', 'frontend', 'identity'];
                setSelectedCategory(map[evt.index] || 'all');
              }}
              aria-label="Project Category Filter"
            >
              <Switch name="all" text="All Projects (6)" />
              <Switch name="ai" text="AI & watsonx (1)" />
              <Switch name="frontend" text="Frontend & Carbon (2)" />
              <Switch name="identity" text="Identity & Security (3)" />
            </ContentSwitcher>
          </div>
        </Column>

        {/* Projects Cards Grid */}
        <Column sm={4} md={8} lg={16}>
          <Grid fullWidth className="projects-cards-grid">
            {filteredProjects.map((proj) => (
              <Column sm={4} md={4} lg={8} key={proj.id} className="project-card-col">
                <Tile className="project-tile carbon-card-interactive">
                  <div className="project-tile-top">
                    <div className="project-header-row">
                      <div className="project-icon-badge">
                        {proj.category === 'ai' ? (
                          <Ai size={22} />
                        ) : proj.category === 'frontend' ? (
                          <Code size={22} />
                        ) : proj.category === 'identity' ? (
                          <Security size={22} />
                        ) : (
                          <CloudServices size={22} />
                        )}
                      </div>
                      <div className="project-tags-group">
                        {proj.featured && (
                          <Tag type="blue" size="sm">
                            Featured
                          </Tag>
                        )}
                        <Tag type="cool-gray" size="sm">
                          {proj.category.toUpperCase()}
                        </Tag>
                      </div>
                    </div>

                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-description">{proj.description}</p>
                  </div>

                  <div className="project-tile-bottom">
                    <div className="project-tech-stack">
                      {proj.techStack.map((tech, idx) => (
                        <Tag key={idx} type="outline" size="sm">
                          {tech}
                        </Tag>
                      ))}
                    </div>

                    <div className="project-actions-row">
                      <Button
                        kind="ghost"
                        size="sm"
                        renderIcon={LogoGithub}
                        onClick={() => window.open(proj.githubUrl, '_blank', 'noopener,noreferrer')}
                        aria-label={`View ${proj.title} on GitHub (opens in new tab)`}
                      >
                        Code
                      </Button>
                      <Button
                        kind="tertiary"
                        size="sm"
                        renderIcon={Launch}
                        onClick={() => window.open(proj.liveUrl, '_blank', 'noopener,noreferrer')}
                        aria-label={`Launch ${proj.title} live preview (opens in new tab)`}
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Tile>
              </Column>
            ))}
          </Grid>
        </Column>
      </Grid>
    </section>
  );
}
