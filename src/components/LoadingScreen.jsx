import { useEffect, useState } from 'react';
import { ProgressBar } from '@carbon/react';
import { Code, Terminal, Rocket } from '@carbon/react/icons';
import './LoadingScreen.css';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState('Initializing Carbon runtime...');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const steps = [
      { at: 20, text: 'Loading design tokens & typography...' },
      { at: 50, text: 'Compiling interactive modules...' },
      { at: 80, text: 'Calibrating experience & grid layout...' },
      { at: 100, text: 'Ready.' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 4;
        const currentStep = steps.find((s) => s.at >= next);
        if (currentStep) {
          setStageText(currentStep.text);
        }
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 1600);
          }, 300);
          return 100;
        }
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`loading-screen-container ${fadeOut ? 'loading-screen-fade-out' : ''}`}
      role="alert"
      aria-live="polite"
      aria-label="Application loading"
    >
      <div className="loading-screen-background-grid" aria-hidden="true" />
      <div className="loading-screen-content">
        {/* Animated Brand Emblem */}
        <div className="loading-emblem-wrapper">
          <div className="loading-emblem-ring" />
          <div className="loading-emblem-icon">
            {progress < 40 ? (
              <Terminal size={32} />
            ) : progress < 85 ? (
              <Code size={32} />
            ) : (
              <Rocket size={32} />
            )}
          </div>
        </div>

        {/* Name / Title */}
        <div className="loading-title-group">
          <span className="loading-monogram">CV / PORTFOLIO</span>
          <h1 className="loading-title">Camisa Vines</h1>
          <p className="loading-subtitle">Senior Software Engineer & AI Systems</p>
        </div>

        {/* Carbon Progress Bar */}
        <div className="loading-progress-wrapper">
          <ProgressBar
            label="System Boot"
            helperText={stageText}
            value={progress}
            max={100}
            status={progress === 100 ? 'finished' : 'active'}
          />
        </div>

        <div className="loading-meta-info">
          <span>IBM Carbon Design System v11</span>
          <span>•</span>
          <span>React 19</span>
        </div>
      </div>
    </div>
  );
}
