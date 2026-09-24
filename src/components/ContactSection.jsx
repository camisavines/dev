import { useState } from 'react';
import {
  Grid,
  Column,
  Tile,
  Form,
  Stack,
  TextInput,
  TextArea,
  Button,
  InlineNotification,
  ClickableTile,
  Tag,
} from '@carbon/react';
import {
  Send,
  Email,
  LogoLinkedin,
  LogoGithub,
  Location,
  Calendar,
} from '@carbon/react/icons';
import './ContactSection.css';

const CONTACT_METHODS = [
  {
    icon: Email,
    label: 'Direct Email',
    value: 'camisa@camisavines.com',
    href: 'mailto:camisa@camisavines.com',
    actionText: 'Compose message',
  },
  {
    icon: LogoLinkedin,
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/camisavines',
    href: 'https://www.linkedin.com/in/camisavines/',
    actionText: 'Connect on LinkedIn',
  },
  {
    icon: LogoGithub,
    label: 'GitHub Repositories',
    value: 'github.com/camisavines',
    href: 'https://github.com/camisavines',
    actionText: 'Follow on GitHub',
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = {
    name: touched.name && !formData.name.trim() ? 'Name is required' : '',
    email:
      touched.email &&
      (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        ? 'Please enter a valid email address'
        : '',
    message:
      touched.message && !formData.message.trim() ? 'Message content is required' : '',
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    }, 800);
  };

  return (
    <section id="contact" className="portfolio-section contact-section" aria-label="Contact Camisa Vines">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={16} className="portfolio-section-title-wrapper">
          <span className="portfolio-section-eyebrow">Get In Touch</span>
          <h2 className="portfolio-section-heading">Let’s Build Something Exceptional</h2>
          <p className="portfolio-section-subheading">
            Whether you are exploring a new architecture, need design system leadership, or want to discuss enterprise AI systems — my inbox is open.
          </p>
        </Column>

        {/* Contact Information & Channels */}
        <Column sm={4} md={8} lg={6} className="contact-info-col">
          <Tile className="contact-status-tile">
            <div className="contact-availability-header">
              <Tag type="teal" size="md">
                Available for Contract & Full-time Roles
              </Tag>
            </div>
            <h3 className="contact-info-headline">Direct Communication Channels</h3>
            <p className="contact-info-desc">
              Based in the United States, collaborating with high-impact engineering squads worldwide across multiple time zones.
            </p>

            <div className="contact-meta-list">
              <div className="contact-meta-item">
                <Location size={18} className="contact-meta-icon" />
                <span>San Jose, California / Austin, Texas (US Remote)</span>
              </div>
              <div className="contact-meta-item">
                <Calendar size={18} className="contact-meta-icon" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
            </div>
          </Tile>

          <div className="contact-cards-stack">
            {CONTACT_METHODS.map((method, idx) => {
              const Icon = method.icon;
              return (
                <ClickableTile
                  key={idx}
                  className="contact-method-tile carbon-card-interactive"
                  href={method.href}
                  target={method.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={`${method.label}: ${method.value}`}
                >
                  <div className="method-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <div className="method-text-wrap">
                    <span className="method-label">{method.label}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                </ClickableTile>
              );
            })}
          </div>
        </Column>

        {/* Contact Form with Carbon Components */}
        <Column sm={4} md={8} lg={10} className="contact-form-col">
          <Tile className="contact-form-card">
            <h3 className="form-card-title">Send a Direct Message</h3>

            {isSubmitted && (
              <InlineNotification
                kind="success"
                title="Message Transmitted"
                subtitle="Thank you for reaching out. I have received your note and will reply promptly."
                onCloseButtonClick={() => setIsSubmitted(false)}
                className="contact-notification"
                lowContrast
              />
            )}

            <Form onSubmit={handleSubmit} noValidate>
              <Stack gap={6}>
                <div className="form-row-split">
                  <TextInput
                    id="contact-name"
                    labelText="Your Name"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    invalid={Boolean(errors.name)}
                    invalidText={errors.name}
                    required
                  />

                  <TextInput
                    id="contact-email"
                    labelText="Email Address"
                    type="email"
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    invalid={Boolean(errors.email)}
                    invalidText={errors.email}
                    required
                  />
                </div>

                <TextInput
                  id="contact-subject"
                  labelText="Subject / Area of Interest"
                  placeholder="e.g. Design Systems Advisory / Enterprise AI Architecture"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                />

                <TextArea
                  id="contact-message"
                  labelText="Project Details / Message"
                  placeholder="Share a brief overview of what you're working on and how we might collaborate..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  invalid={Boolean(errors.message)}
                  invalidText={errors.message}
                  required
                />

                <div className="form-actions-wrapper">
                  <Button
                    type="submit"
                    kind="primary"
                    size="lg"
                    renderIcon={Send}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Transmitting...' : 'Send Message'}
                  </Button>
                </div>
              </Stack>
            </Form>
          </Tile>
        </Column>
      </Grid>
    </section>
  );
}
