import { useState, useEffect } from 'react';
import { GlobalTheme, Theme } from '@carbon/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentTheme, setCurrentTheme] = useState('g100'); // Carbon dark theme by default

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'g100' ? 'white' : 'g100'));
  };

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 48; // Account for fixed Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Active section scroll spy
  useEffect(() => {
    const sections = ['hero', 'about', 'resume', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <GlobalTheme theme={currentTheme}>
      <Theme theme={currentTheme}>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}

        <div className="portfolio-app-root">
          <Navbar
            activeSection={activeSection}
            onNavigate={handleNavigate}
            currentTheme={currentTheme}
            toggleTheme={toggleTheme}
          />

          <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
            <HeroSection onNavigate={handleNavigate} />
            <AboutSection />
            <ResumeSection />
            <ProjectsSection />
            <ContactSection />
          </main>

          <Footer onNavigate={handleNavigate} />
        </div>
      </Theme>
    </GlobalTheme>
  );
}

export default App;
