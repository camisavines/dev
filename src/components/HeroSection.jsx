import { useState, useRef, useEffect } from 'react';
import { Grid, Column, Button, Tag } from '@carbon/react';
import { ArrowRight, DocumentDownload } from '@carbon/react/icons';
import './HeroSection.css';

const TRACKS = [
  {
    id: 'about',
    label: 'About Me',
    sublabel: 'Background & Skills',
    color: '#78a9ff',
    angle: 0,      // degrees — centre of this slice
  },
  {
    id: 'resume',
    label: 'Experience',
    sublabel: 'IBM · 2021–Present',
    color: '#be95ff',
    angle: 90,
  },
  {
    id: 'projects',
    label: 'Projects',
    sublabel: 'SSO · Passkeys · AI',
    color: '#3ddbd9',
    angle: 180,
  },
  {
    id: 'contact',
    label: 'Contact',
    sublabel: 'Let\'s Connect',
    color: '#ff7eb6',
    angle: 270,
  },
];

// Build an SVG arc path for a quarter-circle slice
function describeSlice(cx, cy, r, startAngle, endAngle) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startAngle));
  const y1 = cy + r * Math.sin(toRad(startAngle));
  const x2 = cx + r * Math.cos(toRad(endAngle));
  const y2 = cy + r * Math.sin(toRad(endAngle));
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
}

export function HeroSection({ onNavigate }) {
  const [activeTrack, setActiveTrack] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [toneArmDown, setToneArmDown] = useState(false);
  const spinRef = useRef(null);
  const continuousRef = useRef(null);

  // Continuous slow idle spin when a track is active
  useEffect(() => {
    if (isSpinning) {
      continuousRef.current = setInterval(() => {
        setRotation((r) => r + 0.4);
      }, 16);
    } else {
      clearInterval(continuousRef.current);
    }
    return () => clearInterval(continuousRef.current);
  }, [isSpinning]);

  const handleTrackClick = (track) => {
    // Snap rotate so the clicked slice faces "top" (270° offset for SVG coords)
    const targetBase = 270 - track.angle;
    // Round up to the next full revolution to always spin forward
    const currentNorm = ((rotation % 360) + 360) % 360;
    let delta = ((targetBase - currentNorm) % 360 + 360) % 360;
    if (delta < 30) delta += 360; // always spin at least a little

    setActiveTrack(track.id);
    setToneArmDown(true);
    setIsSpinning(false);

    // Quick snap animation via CSS transition override
    setRotation((r) => r + delta);

    // Start idle spin after snap
    clearTimeout(spinRef.current);
    spinRef.current = setTimeout(() => setIsSpinning(true), 600);

    // Navigate after brief delay
    setTimeout(() => onNavigate(track.id), 400);
  };

  return (
    <section id="hero" className="portfolio-section hero-section" aria-label="Hero introduction">
      <div className="hero-background-effects" aria-hidden="true">
        <div className="hero-glow-orb hero-glow-1" />
        <div className="hero-glow-orb hero-glow-2" />
        <div className="hero-grid-pattern" />
      </div>

      <Grid fullWidth className="hero-grid-container">
        {/* ── Left: text content ── */}
        <Column sm={4} md={8} lg={9} className="hero-content-col">
          <div className="hero-badge-group">
            <Tag type="blue" size="md">
              <span className="hero-status-dot" /> Open to Opportunities
            </Tag>
            <Tag type="purple" size="md">
              IBM Identity &amp; Security Platforms
            </Tag>
            <Tag type="teal" size="md">
              UX Engineer &amp; AI Frontend Lead
            </Tag>
          </div>

          <h1 className="hero-headline">
            Hi, I'm <span className="hero-name-highlight">Camisa Vines</span>
            <br />
            <span className="hero-subheadline">Software Engineer &amp; UX-Driven Frontend Architect</span>
          </h1>

          <p className="hero-lead-text">
            I build secure, accessible enterprise applications at IBM — from modernizing legacy identity
            platforms to leading the frontend experience for AI-powered tools. I specialize in the Carbon
            Design System, UX engineering, and delivering high-impact software that ships ahead of schedule.
          </p>

          <div className="hero-cta-group">
            <Button
              kind="primary"
              size="lg"
              renderIcon={ArrowRight}
              onClick={() => onNavigate('projects')}
              aria-label="View Projects"
            >
              View Projects
            </Button>
            <Button
              kind="tertiary"
              size="lg"
              renderIcon={DocumentDownload}
              onClick={() => onNavigate('resume')}
              aria-label="Review Resume and Experience"
            >
              Review Resume
            </Button>
            <Button
              kind="ghost"
              size="lg"
              onClick={() => onNavigate('contact')}
              aria-label="Contact Camisa Vines"
            >
              Get In Touch
            </Button>
          </div>
        </Column>

        {/* ── Right: DJ Turntable ── */}
        <Column sm={4} md={8} lg={7} className="hero-turntable-col">
          <div className="turntable-wrapper" aria-label="Interactive DJ turntable navigation">

            {/* Track label tooltip */}
            <div className="turntable-hint">
              {activeTrack
                ? `Now playing → ${TRACKS.find((t) => t.id === activeTrack)?.label}`
                : 'Spin a track to explore'}
            </div>

            {/* Deck body */}
            <div className="turntable-deck">

              {/* Platter + record SVG */}
              <div className="turntable-platter-wrap">
                <svg
                  className="turntable-platter-svg"
                  viewBox="0 0 300 300"
                  aria-hidden="true"
                >
                  {/* Outer platter ring */}
                  <circle cx="150" cy="150" r="148" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
                  {/* Platter grip grooves */}
                  {[138, 128, 118].map((r) => (
                    <circle key={r} cx="150" cy="150" r={r} fill="none" stroke="#2a2a2a" strokeWidth="1.5" />
                  ))}
                </svg>

                {/* Spinning record */}
                <svg
                  className="turntable-record-svg"
                  viewBox="0 0 300 300"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning ? 'none' : 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  {/* Record body */}
                  <circle cx="150" cy="150" r="130" fill="#111" />

                  {/* 4 interactive slices */}
                  {TRACKS.map((track, i) => {
                    const start = i * 90 - 45;
                    const end = start + 90;
                    const isActive = activeTrack === track.id;
                    return (
                      <g key={track.id}>
                        <path
                          d={describeSlice(150, 150, 128, start, end)}
                          fill={isActive ? track.color : '#1c1c1c'}
                          opacity={isActive ? 0.85 : 0.6}
                          stroke={track.color}
                          strokeWidth={isActive ? 2 : 0.5}
                          style={{ cursor: 'pointer', transition: 'fill 0.3s, opacity 0.3s' }}
                          onClick={() => handleTrackClick(track)}
                          role="button"
                          aria-label={`Navigate to ${track.label}`}
                        />
                        {/* Vinyl groove rings inside each slice */}
                        {[100, 85, 70].map((r) => (
                          <circle
                            key={r}
                            cx="150"
                            cy="150"
                            r={r}
                            fill="none"
                            stroke={isActive ? track.color : '#2a2a2a'}
                            strokeWidth="0.75"
                            opacity={isActive ? 0.4 : 0.3}
                            style={{ pointerEvents: 'none' }}
                          />
                        ))}
                      </g>
                    );
                  })}

                  {/* Slice divider lines */}
                  {[45, 135, 225, 315].map((angle) => {
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <line
                        key={angle}
                        x1={150 + 22 * Math.cos(rad)}
                        y1={150 + 22 * Math.sin(rad)}
                        x2={150 + 130 * Math.cos(rad)}
                        y2={150 + 130 * Math.sin(rad)}
                        stroke="#0a0a0a"
                        strokeWidth="2"
                        style={{ pointerEvents: 'none' }}
                      />
                    );
                  })}

                  {/* Track labels — rendered outside the spinning disc so they stay readable */}
                  {/* (positioned by absolute CSS, not SVG text that rotates with the disc) */}

                  {/* Label icons at mid-slice angles */}
                  {TRACKS.map((track, i) => {
                    const midAngle = ((i * 90) * Math.PI) / 180;
                    const lr = 88;
                    const lx = 150 + lr * Math.cos(midAngle);
                    const ly = 150 + lr * Math.sin(midAngle);
                    const isActive = activeTrack === track.id;
                    return (
                      <text
                        key={track.id}
                        x={lx}
                        y={ly}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="9"
                        fontWeight={isActive ? '700' : '500'}
                        fill={isActive ? track.color : '#888'}
                        style={{ pointerEvents: 'none', fontFamily: 'monospace', letterSpacing: '0.04em' }}
                      >
                        {track.label.toUpperCase()}
                      </text>
                    );
                  })}

                  {/* Center spindle hole */}
                  <circle cx="150" cy="150" r="20" fill="#0a0a0a" stroke="#333" strokeWidth="1.5" />
                  <circle cx="150" cy="150" r="4" fill="#555" />
                </svg>

                {/* Center label sticker — stays still */}
                <div className="turntable-label-sticker">
                  <span className="sticker-name">CV</span>
                  <span className="sticker-rpm">33⅓ RPM</span>
                </div>
              </div>

              {/* Tone arm */}
              <div
                className={`turntable-tonearm ${toneArmDown ? 'tonearm-down' : ''}`}
                aria-hidden="true"
              >
                <div className="tonearm-pivot" />
                <div className="tonearm-body" />
                <div className="tonearm-headshell" />
                <div className="tonearm-stylus" />
              </div>

              {/* Track info cards (outside the platter, below) */}
              <div className="turntable-tracks-list">
                {TRACKS.map((track) => (
                  <button
                    key={track.id}
                    className={`turntable-track-item ${activeTrack === track.id ? 'track-active' : ''}`}
                    style={{ '--track-color': track.color }}
                    onClick={() => handleTrackClick(track)}
                    aria-label={`Navigate to ${track.label}`}
                  >
                    <span className="track-dot" />
                    <span className="track-info">
                      <span className="track-name">{track.label}</span>
                      <span className="track-sub">{track.sublabel}</span>
                    </span>
                    <span className="track-arrow">›</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  );
}
