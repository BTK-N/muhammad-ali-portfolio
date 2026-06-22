import React, { useState } from 'react';

const PROJECT_LIST = [
  {
    id: 'wind-turbine',
    title: '25MW Wind Turbine Simulation & Modeling',
    category: 'SYSTEM DYNAMICS & POWER ENGINEERING',
    shortDesc: 'A fully stable 25MW wind turbine simulation model featuring turbine dynamics and a Permanent Magnet Synchronous Generator (PMSG).',
    tech: ['MATLAB', 'Simulink', 'Power Electronics', 'MPPT Logic'],
    details: {
      problem: 'Simulating high-power wind turbine dynamics with accurate power conversion and grid interface systems without numerical instability.',
      solution: 'Engineered a fully stable 25MW wind turbine simulation model featuring turbine dynamics and a Permanent Magnet Synchronous Generator (PMSG). Integrated a Modular Multilevel Converter (MMC) rectifier/inverter system for grid interface with automated Maximum Power Point Tracking (MPPT) logic.',
      features: [
        'Turbine dynamics modeling with a Permanent Magnet Synchronous Generator (PMSG).',
        'Modular Multilevel Converter (MMC) rectifier/inverter system for grid interface.',
        'Automated Maximum Power Point Tracking (MPPT) logic.',
        'Automated scripts for Total Harmonic Distortion (THD) and system efficiency analysis.'
      ],
      role: 'Simulation & Modeling Engineer'
    }
  },
  {
    id: 'okx-scalper',
    title: 'OKX Algorithmic Scalper',
    category: 'ALGORITHMIC SYSTEMS & BOT ENGINES',
    shortDesc: 'A Python bot that streams live OKX market data via WebSocket, generates scalping signals, and executes limit orders.',
    github: 'https://github.com/BTK-N/okx-scalper',
    tech: ['Python', 'Asyncio', 'WebSockets', 'REST APIs'],
    details: {
      problem: 'Developing high-frequency algorithmic scalping setups requires millisecond-level responsiveness, real-time WebSocket feeds, and highly robust risk/state safety measures.',
      solution: 'Built a Python 3.11 bot that streams live OKX market data via WebSocket, generates scalping signals using EMA & order-book imbalance, and executes limit orders with dynamic risk-managed sizing.',
      features: [
        'Live OKX market data streaming via WebSocket.',
        'Scalping signals generation using EMA & order-book imbalance.',
        'Limit order execution with dynamic risk-managed sizing.',
        'Low-latency (≈ 90 ms) order handling using asyncio.',
        'Full test coverage, CI linting, and Dockerized deployment.',
        'Back-tested on 6 months of BTC/USDT data achieving +12% net ROI.'
      ],
      role: 'Algorithmic Developer'
    }
  },
  {
    id: 'edge-ai',
    title: 'Edge AI Predictive Maintenance',
    category: 'MACHINE LEARNING & EDGE COMPUTER SCIENCE',
    shortDesc: 'A neural network deployed on resource-constrained edge hardware using INT8 quantization for vibration anomaly detection.',
    github: 'https://github.com/BTK-N/edge-ai-predictive-maintenance',
    tech: ['Python', 'TensorFlow', 'Edge Impulse', 'Quantization (INT8)'],
    details: {
      problem: 'Deploying heavy deep learning models to low-power edge microcontrollers with tight battery and RAM boundaries.',
      solution: 'Deployed a neural network on resource-constrained edge hardware using INT8 quantization for vibration anomaly detection.',
      features: [
        'Vibration anomaly detection on resource-constrained edge hardware.',
        'Implementation of INT8 quantization for optimized performance.',
        'Integration with Edge Impulse for seamless edge deployment.'
      ],
      role: 'Embedded AI Engineer'
    }
  },
  {
    id: 'qr-scanner',
    title: 'Event Management Dashboard',
    category: 'COMPUTER VISION & FULL-STACK UTILITY',
    shortDesc: 'A CV-based QR validation system for automated attendance tracking with a live monitoring dashboard.',
    github: 'https://github.com/BTK-N/event-pass-scanner',
    tech: ['Python', 'OpenCV', 'Pandas', 'REST APIs'],
    details: {
      problem: 'Validating event tickets offline at local check-ins without depending on unstable internet setups and tracking live attendance.',
      solution: 'Built a CV-based QR validation system for automated attendance tracking with a live monitoring dashboard.',
      features: [
        'Computer vision scanning engine decoding QR formats in real-time.',
        'Automated attendance tracking integrated with a live monitoring dashboard.',
        'Offline-first validation system tailored for event management.'
      ],
      role: 'Software Engineer'
    }
  },
  {
    id: 'smart-trolley',
    title: 'Smart / AI Trolley System',
    category: 'EMBEDDED SYSTEMS & IOT GATEWAYS',
    shortDesc: 'An IoT-integrated shopping cart prototype utilizing embedded sensors and automation logic to streamline retail checkout queues.',
    tech: ['C++', 'Arduino / ESP32', 'Sensors (RFID/Weight)', 'Wireless Protocols', 'Hardware Prototyping'],
    details: {
      problem: 'Long retail queues causing friction and slow processing at shopping center registers.',
      solution: 'Engineered an interactive checkout trolley combining ESP32 telemetry, sensor modules, and communication protocols to scan and compile dynamic shopping lists on-cart.',
      features: [
        'Hardware schematics integrating load cells (weight verify) and barcode/RFID inputs.',
        'ESP32 wireless firmware connecting local carts with point-of-sale micro-servers.',
        'Anti-theft verification loop matching scanned lists against overall cart weight limits.',
        'Optimized C++ low-power standby cycles.'
      ],
      role: 'IoT Hardware & Firmware Developer'
    }
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Web CV / Portfolio',
    category: 'FULL-STACK WEB DEVELOPMENT',
    shortDesc: 'A minimalist MERN-stack portfolio website built to showcase personal projects and resume details.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Vite'],
    details: {
      problem: 'Needed a platform to showcase software engineering projects and present a modern, interactive resume to potential employers.',
      solution: 'Self-taught the MERN stack basics and built this responsive single-page application to display my portfolio, complete with a print-ready PDF export feature.',
      features: [
        'Responsive user interface built with React and Vite.',
        'Print-optimized styling for PDF resume generation.',
        'Clean component-based architecture.'
      ],
      role: 'Full-Stack Developer'
    }
  }
];

function Projects() {
  const [selectedProj, setSelectedProj] = useState(null);

  return (
    <div className="animate-fade">
      {/* Title */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Engineering Projects</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Click on any project below to view full architectural details, problems solved, and technical metrics.
        </p>
      </div>

      {/* Main Grid View */}
      {!selectedProj ? (
        <div className="grid-2">
          {PROJECT_LIST.map((proj) => (
            <div 
              key={proj.id} 
              className="panel interactive"
              onClick={() => setSelectedProj(proj)}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--accent-light)', fontWeight: '600' }}>
                    {proj.category}
                  </span>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="View on GitHub"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        fontSize: '0.75rem', color: 'var(--text-tertiary)',
                        textDecoration: 'none', padding: '0.2rem 0.5rem',
                        borderRadius: '4px', border: '1px solid var(--border-color)',
                        transition: 'color 0.2s, border-color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-light)'; e.currentTarget.style.borderColor = 'var(--accent-light)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-tertiary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>
                  {proj.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {proj.shortDesc}
                </p>
              </div>
              <div className="badge-row">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Detailed Single-Project Showcase Page */
        <div className="panel animate-fade" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Back Button */}
          <button 
            className="btn" 
            onClick={() => setSelectedProj(null)} 
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', width: 'fit-content' }}
          >
            &larr; Back to Grid
          </button>

          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--accent-light)', fontWeight: '600' }}>
              {selectedProj.category}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.3rem' }}>
              <h2 style={{ fontSize: '2rem', margin: 0 }}>{selectedProj.title}</h2>
              {selectedProj.github && (
                <a
                  href={selectedProj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.85rem', color: 'var(--accent-light)',
                    textDecoration: 'none', padding: '0.35rem 0.8rem',
                    borderRadius: '6px', border: '1px solid var(--accent-light)',
                    fontWeight: '500', transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-soft)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginTop: '0.4rem' }}>
              Role: <strong style={{ color: 'var(--text-secondary)' }}>{selectedProj.details.role}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '0.8rem 0' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', marginRight: '0.5rem' }}>
              Stack utilized:
            </span>
            {selectedProj.tech.map((t, idx) => (
              <span key={idx} className="badge accent">{t}</span>
            ))}
          </div>

          <div className="grid-2">
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                The Challenge & Constraints
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {selectedProj.details.problem}
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-light)', marginBottom: '0.5rem' }}>
                The Engineered Solution
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {selectedProj.details.solution}
              </p>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              Key Implementation Achievements
            </h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {selectedProj.details.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
