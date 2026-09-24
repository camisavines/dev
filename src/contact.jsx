import { Grid, Column } from "@carbon/react";
import { Email, LogoLinkedin, ApplicationWeb } from "@carbon/react/icons";

const appleFont =
  '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

/* ─── Shared glass card style ─────────────────────────────────────────────── */
const card = (isDark) => ({
  borderRadius: "18px",
  overflow: "hidden",
  height: "100%",
  background: isDark ? "rgba(28,28,30,0.78)" : "rgba(255,255,255,0.62)",
  backdropFilter: "saturate(180%) blur(24px)",
  WebkitBackdropFilter: "saturate(180%) blur(24px)",
  border: isDark
    ? "1px solid rgba(255,255,255,0.1)"
    : "1px solid rgba(255,255,255,0.85)",
  boxShadow: isDark
    ? "0 2px 12px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.06)"
    : "0 2px 8px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(0,0,0,0.06)",
  fontFamily: appleFont,
});

const cardHeader = (isDark) => ({
  padding: "11px 16px 10px",
  background: isDark ? "rgba(44,44,46,0.6)" : "rgba(255,255,255,0.5)",
  borderBottom: isDark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.06)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const headerTitle = (isDark) => ({
  fontWeight: 600,
  fontSize: "15px",
  letterSpacing: "-0.015em",
  color: isDark ? "#f5f5f7" : "#1d1d1f",
  fontFamily: appleFont,
});

const headerBadge = (color) => ({
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.01em",
  color: "#fff",
  background: color,
  borderRadius: "20px",
  padding: "2px 8px",
  fontFamily: appleFont,
});

/* ─── Chevron SVG ─────────────────────────────────────────────────────────── */
const Chevron = ({ isDark }) => (
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" style={{ flexShrink: 0, opacity: 0.3 }}>
    <path
      d="M1 1l5 5-5 5"
      stroke={isDark ? "#f5f5f7" : "#1d1d1f"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── 1. Contact card ─────────────────────────────────────────────────────── */
const contactRows = [
  {
    icon: Email,
    label: "Email",
    value: "camisa@camisavines.com",
    href: "mailto:camisa@camisavines.com",
    iconBg: "linear-gradient(145deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    icon: LogoLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/camisavines",
    href: "https://www.linkedin.com/in/camisavines/",
    iconBg: "linear-gradient(145deg, #0077b5 0%, #00a0dc 100%)",
  },
  {
    icon: ApplicationWeb,
    label: "Consulting",
    value: "consulting.camisavines.com",
    href: "https://consulting.camisavines.com/",
    iconBg: "linear-gradient(145deg, #f093fb 0%, #f5576c 100%)",
  },
];

const ContactCard = ({ isDark }) => (
  <div style={card(isDark)}>
    <div style={cardHeader(isDark)}>
      <span style={headerTitle(isDark)}>Get in Touch</span>
      <span style={headerBadge("#34c759")}>Open to opportunities</span>
    </div>
    <ul style={{ listStyle: "none", margin: 0, padding: "0 16px" }}>
      {contactRows.map((row, i) => (
        <li
          key={row.label}
          style={{
            borderBottom:
              i < contactRows.length - 1
                ? isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.06)"
                : "none",
          }}
        >
          <a
            href={row.href}
            target={row.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 0",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {/* App-icon style dot */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "9px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: row.iconBg,
                boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
              }}
            >
              <row.icon size={20} style={{ color: "#fff" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  color: isDark ? "#f5f5f7" : "#1d1d1f",
                  fontFamily: appleFont,
                }}
              >
                {row.label}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "-0.01em",
                  color: "#0071e3",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontFamily: appleFont,
                }}
              >
                {row.value}
              </div>
            </div>
            <Chevron isDark={isDark} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/* ─── 2. Skills card ──────────────────────────────────────────────────────── */

/* Inline SVG brand marks — no external deps */
const ReactLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#61dafb">
    <circle cx="12" cy="12" r="2.05" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61dafb" strokeWidth="1.1" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61dafb" strokeWidth="1.1" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61dafb" strokeWidth="1.1" transform="rotate(120 12 12)" />
  </svg>
);

const JSLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <rect width="24" height="24" rx="3" fill="#f7df1e" />
    <text x="3" y="19" fontSize="13" fontWeight="bold" fontFamily="monospace" fill="#323330">JS</text>
  </svg>
);

const TSLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <rect width="24" height="24" rx="3" fill="#3178c6" />
    <text x="2.5" y="19" fontSize="12" fontWeight="bold" fontFamily="monospace" fill="#fff">TS</text>
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#339933">
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.18l7.5 4.12v8.2L12 19.82 4.5 16.5V8.3L12 4.18z" />
    <text x="6.5" y="15.5" fontSize="7" fontWeight="bold" fontFamily="monospace" fill="#339933">JS</text>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 2C7 2 7.5 4.2 7.5 4.2L7.51 6.5H12.1v.7H5.8S2 6.7 2 12s3.3 4.9 3.3 4.9H7v-2.4S6.9 11 9.5 11H14.4s2.4.04 2.4-2.3V4.7S17.2 2 12 2zm-1.3 1.3a.9.9 0 110 1.8.9.9 0 010-1.8z" fill="#3776ab"/>
    <path d="M12 22c5 0 4.5-2.2 4.5-2.2l-.01-2.3H11.9v-.7h6.3S22 17.3 22 12s-3.3-4.9-3.3-4.9H17v2.4S17.1 13 14.5 13H9.6s-2.4-.04-2.4 2.3v3.97S6.8 22 12 22zm1.3-1.3a.9.9 0 110-1.8.9.9 0 010 1.8z" fill="#ffd43b"/>
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#2496ed">
    <path d="M13.5 9.5h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H7.5v-2zm-3 0h2v2h-2v-2zm9-3h2v2h-2V6.5zm-3 0h2v2h-2V6.5zm0-3h2v2h-2V3.5zM22 11.3c-.3-.2-1-.4-2-.2-.1-.7-.6-1.3-1.3-1.7l-.4-.2-.3.4c-.3.5-.5 1.3-.4 1.9-.5-.3-1-.4-1.6-.4H2.1l-.1.4C1.7 13 1.8 14.5 2.6 16c.8 1.3 2 2 3.7 2 3.5 0 6.1-1.6 7.3-4.5.8.02 2.5.05 3.4-1.6l.2-.3-.4-.3z"/>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#f05032">
    <path d="M23.1 10.9L13.1.9a3 3 0 00-4.2 0L6.7 3.1l2.6 2.6a1.8 1.8 0 012.3 2.3l2.5 2.5a1.8 1.8 0 11-1.1 1.1L10.6 9v6a1.8 1.8 0 11-1.5 0V8.9a1.8 1.8 0 01-1-2.4L5.6 4 .9 8.7a3 3 0 000 4.2l10 10a3 3 0 004.2 0l8-8a3 3 0 000-4z"/>
  </svg>
);

const CarbonLogo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <rect width="24" height="24" rx="3" fill="#0f62fe" />
    <text x="4" y="17" fontSize="10" fontWeight="bold" fontFamily="monospace" fill="#fff">ibm</text>
  </svg>
);

const skills = [
  { logo: <ReactLogo />,   name: "React",      level: 95, color: "#61dafb" },
  { logo: <TSLogo />,      name: "TypeScript",  level: 88, color: "#3178c6" },
  { logo: <JSLogo />,      name: "JavaScript",  level: 95, color: "#f7df1e" },
  { logo: <NodeLogo />,    name: "Node.js",     level: 80, color: "#339933" },
  { logo: <PythonLogo />,  name: "Python",      level: 72, color: "#3776ab" },
  { logo: <DockerLogo />,  name: "Docker",      level: 70, color: "#2496ed" },
  { logo: <GitLogo />,     name: "Git",         level: 90, color: "#f05032" },
  { logo: <CarbonLogo />,  name: "Carbon DS",   level: 92, color: "#0f62fe" },
];

const SkillsCard = ({ isDark }) => (
  <div style={card(isDark)}>
    <div style={cardHeader(isDark)}>
      <span style={headerTitle(isDark)}>Top Skills</span>
      <span style={headerBadge("#0071e3")}>{skills.length} technologies</span>
    </div>
    <ul style={{ listStyle: "none", margin: 0, padding: "4px 16px 8px" }}>
      {skills.map((s, i) => (
        <li
          key={s.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "7px 0",
            borderBottom:
              i < skills.length - 1
                ? isDark
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,0,0,0.05)"
                : "none",
          }}
        >
          <div style={{ flexShrink: 0, width: "22px", height: "22px", display: "flex", alignItems: "center" }}>
            {s.logo}
          </div>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: isDark ? "#f5f5f7" : "#1d1d1f",
              fontFamily: appleFont,
              width: "88px",
              flexShrink: 0,
            }}
          >
            {s.name}
          </span>
          {/* Progress bar */}
          <div
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "2px",
              background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${s.level}%`,
                height: "100%",
                borderRadius: "2px",
                background: s.color,
                opacity: isDark ? 0.9 : 0.75,
              }}
            />
          </div>
          <span
            style={{
              fontSize: "11px",
              color: isDark ? "#98989d" : "#6e6e73",
              fontFamily: appleFont,
              width: "28px",
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            {s.level}%
          </span>
        </li>
      ))}
    </ul>
  </div>
);

/* ─── 3. Fun card: "Currently" ────────────────────────────────────────────── */
const currently = [
  {
    emoji: "✈️",
    category: "Exploring",
    detail: "Planning trips to China & Thailand",
    color: "#30d158",
  },
  {
    emoji: "📖",
    category: "Reading",
    detail: '"The Algorithm" by Hilke Schellmann',
    color: "#0071e3",
  },
  {
    emoji: "🏗️",
    category: "Building",
    detail: "AI accountability tooling @ IBM",
    color: "#ff9f0a",
  },
  {
    emoji: "🐕",
    category: "Wrangling",
    detail: "An Amer. Rottweiler & a Cane Corso",
    color: "#ff375f",
  },
  {
    emoji: "🧲",
    category: "Collecting",
    detail: "100+ fridge magnets from around the world",
    color: "#bf5af2",
  },
  {
    emoji: "💬",
    category: "Writing about",
    detail: "AI ethics, tech culture & the future of work",
    color: "#32ade6",
  },
];

const FunCard = ({ isDark }) => (
  <div style={card(isDark)}>
    <div style={cardHeader(isDark)}>
      <span style={headerTitle(isDark)}>Currently…</span>
      <span style={{ fontSize: "13px", color: "#ff9f0a", fontFamily: appleFont }}>
        a little about me
      </span>
    </div>
    <ul style={{ listStyle: "none", margin: 0, padding: "4px 16px 8px" }}>
      {currently.map((item, i) => (
        <li
          key={item.category}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            padding: "9px 0",
            borderBottom:
              i < currently.length - 1
                ? isDark
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,0,0,0.05)"
                : "none",
          }}
        >
          <span style={{ fontSize: "18px", lineHeight: 1, flexShrink: 0, paddingTop: "1px" }}>
            {item.emoji}
          </span>
          <div style={{ minWidth: 0 }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: item.color,
                fontFamily: appleFont,
                marginBottom: "1px",
              }}
            >
              {item.category}
            </span>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                letterSpacing: "-0.01em",
                lineHeight: 1.4,
                color: isDark ? "#d1d1d6" : "#3a3a3c",
                fontFamily: appleFont,
              }}
            >
              {item.detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

/* ─── Exported section ────────────────────────────────────────────────────── */
export const Contact = ({ isDark }) => {
  return (
    <div
      style={{
        padding: "0 16px 48px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Grid fullWidth style={{ alignItems: "stretch" }}>
        <Column sm={4} md={4} lg={5} style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
          <ContactCard isDark={isDark} />
        </Column>
        <Column sm={4} md={8} lg={8} style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
          <SkillsCard isDark={isDark} />
        </Column>
        <Column sm={4} md={8} lg={3} style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
          <FunCard isDark={isDark} />
        </Column>
      </Grid>
    </div>
  );
};
