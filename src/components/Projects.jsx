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
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--accent-light)', fontWeight: '600' }}>
                  {proj.category}
                </span>
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
            <h2 style={{ fontSize: '2rem', marginTop: '0.3rem' }}>{selectedProj.title}</h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginTop: '0.2rem' }}>
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
