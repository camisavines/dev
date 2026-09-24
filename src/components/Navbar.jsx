import { useState, useEffect } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavLink,
} from '@carbon/react';
import {
  BrightnessContrast,
  LogoGithub,
  LogoLinkedin,
  DocumentDownload,
} from '@carbon/react/icons';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onNavigate, currentTheme, toggleTheme }) {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setIsSideNavExpanded(false);
    onNavigate(id);
  };

  return (
    <>
      <Header
        aria-label="Camisa Vines Portfolio Navigation"
        className={`portfolio-header ${isScrolled ? 'portfolio-header-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 8000,
          borderBottom: '1px solid var(--cds-border-subtle, #393939)',
          backgroundColor: isScrolled
            ? 'var(--cds-background, #161616)'
            : 'rgba(22, 22, 22, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <SkipToContent href="#main-content" className="portfolio-skip-to-content">
          Skip to main content
        </SkipToContent>

        <HeaderMenuButton
          aria-label={isSideNavExpanded ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsSideNavExpanded(!isSideNavExpanded)}
          isActive={isSideNavExpanded}
          aria-expanded={isSideNavExpanded}
        />

        <HeaderName
          href="#hero"
          onClick={handleNavClick('hero')}
          prefix="CV"
          style={{ textDecoration: 'none', cursor: 'pointer', fontWeight: 600 }}
        >
          Camisa Vines
        </HeaderName>

        <HeaderNavigation aria-label="Main Portfolio Sections">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <HeaderMenuItem
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                isCurrentPage={isActive}
                style={{
                  color: isActive ? 'var(--cds-link-primary, #78a9ff)' : 'inherit',
                  borderBottom: isActive ? '2px solid var(--cds-interactive, #0f62fe)' : 'none',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.15s ease',
                }}
              >
                {item.label}
              </HeaderMenuItem>
            );
          })}
        </HeaderNavigation>

        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label={`Switch to ${currentTheme === 'g100' ? 'Light' : 'Dark'} Theme`}
            tooltipAlignment="end"
            onClick={toggleTheme}
          >
            <BrightnessContrast size={20} />
          </HeaderGlobalAction>

          <HeaderGlobalAction
            aria-label="View GitHub profile (opens in new tab)"
            tooltipAlignment="end"
            onClick={() => window.open('https://github.com/camisavines', '_blank', 'noopener,noreferrer')}
          >
            <LogoGithub size={20} />
          </HeaderGlobalAction>

          <HeaderGlobalAction
            aria-label="View LinkedIn profile (opens in new tab)"
            tooltipAlignment="end"
            onClick={() => window.open('https://linkedin.com/in/camisavines', '_blank', 'noopener,noreferrer')}
          >
            <LogoLinkedin size={20} />
          </HeaderGlobalAction>

          <HeaderGlobalAction
            aria-label="Download Resume (PDF)"
            tooltipAlignment="end"
            onClick={handleNavClick('resume')}
          >
            <DocumentDownload size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>

        <SideNav
          aria-label="Mobile Navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
          onSideNavBlur={() => setIsSideNavExpanded(false)}
        >
          <SideNavItems>
            {NAV_ITEMS.map((item) => (
              <SideNavLink
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                isActive={activeSection === item.id}
              >
                {item.label}
              </SideNavLink>
            ))}
          </SideNavItems>
        </SideNav>
      </Header>
    </>
  );
}
