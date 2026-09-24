import { Grid, Column, Tile, Tag, ProgressBar } from '@carbon/react';
import {
  UserMultiple,
  Code,
  CloudServices,
  ChartRelationship,
  Light,
  Terminal,
} from '@carbon/react/icons';
import './AboutSection.css';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend & UX Engineering',
    icon: Code,
    skills: [
      { name: 'React / JavaScript (ES6+)', level: 96 },
      { name: 'IBM Carbon Design System', level: 98 },
      { name: 'UX Design & Figma', level: 90 },
      { name: 'Accessibility (WCAG 2.1 AA)', level: 92 },
      { name: 'CSS / SCSS / Responsive Layouts', level: 90 },
    ],
  },
  {
    title: 'Backend & Integration',
    icon: CloudServices,
    skills: [
      { name: 'Node.js / REST APIs', level: 88 },
      { name: 'Java (Spring MVC)', level: 75 },
      { name: 'CI/CD & Version Control (Git)', level: 90 },
      { name: 'Legacy System Migration', level: 85 },
      { name: 'Frontend Repository Templating', level: 92 },
    ],
  },
  {
    title: 'Security & AI Integration',
    icon: Light,
    skills: [
      { name: 'FIDO / Passkeys Authentication', level: 82 },
      { name: 'SSO Provisioning & Identity (ISV)', level: 88 },
      { name: '2FA Portals & DUO Migration', level: 85 },
      { name: 'watsonx Orchestrate (AI Chatbots)', level: 80 },
      { name: 'Security-First UX Design', level: 88 },
    ],
  },
];

const HIGHLIGHTS = [
  {
    icon: Terminal,
    title: 'UX as a First-Class Concern',
    desc: 'I design in Figma and build in React — bridging complex technical workflows into intuitive, accessible interfaces, including security-sensitive identity tools.',
  },
  {
    icon: UserMultiple,
    title: 'Mentorship & Community',
    desc: 'Austin Intern Site Supervisor for 150+ interns, NSBE Engineering Day speaker, AfroTech participant, and OIC hackathon organizer for underrepresented technologists.',
  },
  {
    icon: ChartRelationship,
    title: 'Reusable, Cross-Team Impact',
    desc: 'Built a cirrus-ready frontend repo template adopted by multiple teams — including the AskIdentity AI team — reducing rework and standardizing development practices org-wide.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="portfolio-section about-section" aria-label="About Camisa Vines">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={16} className="portfolio-section-title-wrapper">
          <span className="portfolio-section-eyebrow">Background & Expertise</span>
          <h2 className="portfolio-section-heading">About Me</h2>
          <p className="portfolio-section-subheading">
            UX engineer and frontend architect with a record of delivering secure, accessible IBM identity and AI platforms that ship ahead of schedule.
          </p>
        </Column>

        {/* Left Column: Personal Narrative */}
        <Column sm={4} md={8} lg={7} className="about-narrative-col">
          <Tile className="about-bio-tile">
            <h3 className="about-bio-title">Shipping with Purpose, Designing with Empathy</h3>
            <p className="about-bio-text">
              I'm a Software Engineer on IBM's Identity & Access Management team, focused on frontend architecture, UX engineering, and secure identity platforms. Since joining in 2021, I've contributed across multiple IAM teams — most recently as the lead frontend engineer on SSO Provisioner, w3id passkeys, and the AccessHub AI chatbot built on watsonx Orchestrate.
            </p>
            <p className="about-bio-text">
              I approach every project with design and the end user in mind. I design in Figma, build with the IBM Carbon Design System, and work closely with backend engineers, security architects, and product stakeholders to ensure the experiences I deliver are both technically sound and intuitive to use.
            </p>
            <p className="about-bio-text">
              Outside of project work, I invest in the people and communities around me — as the Austin Intern Site Supervisor, an OIC hackathon organizer, a speaker at NSBE Engineering Day, and an active member of the Black Business Resource Group.
            </p>

            <div className="about-tags-wrapper">
              <span className="about-tags-title">Core Competencies:</span>
              <div className="about-tags-list">
                <Tag type="cyan">Frontend Architecture</Tag>
                <Tag type="blue">Carbon Design System</Tag>
                <Tag type="magenta">AI Frontend Integration</Tag>
                <Tag type="teal">Identity & Security (SSO, FIDO, 2FA)</Tag>
                <Tag type="green">UX Engineering & Figma</Tag>
                <Tag type="purple">Mentorship & Technical Leadership</Tag>
              </div>
            </div>
          </Tile>

          <div className="about-pillars-grid">
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Tile key={idx} className="about-pillar-tile">
                  <div className="pillar-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">{item.title}</h4>
                    <p className="pillar-desc">{item.desc}</p>
                  </div>
                </Tile>
              );
            })}
          </div>
        </Column>

        {/* Right Column: Interactive Skills Visualizer */}
        <Column sm={4} md={8} lg={9} className="about-skills-col">
          <div className="skills-container">
            {SKILL_CATEGORIES.map((cat, catIdx) => {
              const CatIcon = cat.icon;
              return (
                <Tile key={catIdx} className="skill-category-tile">
                  <div className="skill-category-header">
                    <div className="skill-category-title-wrap">
                      <CatIcon size={20} className="skill-cat-icon" />
                      <h4 className="skill-category-title">{cat.title}</h4>
                    </div>
                    <span className="skill-category-count">{cat.skills.length} skills</span>
                  </div>

                  <div className="skill-bars-list">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-item">
                        <div className="skill-label-row">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-pct">{skill.level}%</span>
                        </div>
                        <ProgressBar
                          value={skill.level}
                          max={100}
                          hideLabel
                          size="small"
                          status="active"
                          className="skill-progress-bar"
                        />
                      </div>
                    ))}
                  </div>
                </Tile>
              );
            })}
          </div>
        </Column>
      </Grid>
    </section>
  );
}
