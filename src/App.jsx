import React, { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handlePrint = () => window.print();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':       return <Home setTab={setActiveTab} />;
      case 'projects':   return <Projects />;
      case 'experience': return <Experience />;
      default:           return <Home setTab={setActiveTab} />;
    }
  };

  /* ── Derived content for print template ── */
  const printSummary = "Passionate 3rd-year Software Engineering student (University of Sindh) who loves building practical things with code. Self-taught multiple tools and frameworks out of pure curiosity — including the MERN stack, OpenCV, machine learning libraries, and embedded IoT systems. I built this portfolio to demonstrate my eagerness to learn and grow within a professional team.";

  const printExpTitle = "Coding Helper & Academic Project Peer";

  const printExpBullets = [
    "Helped fellow students at Mehran UET and University of Sindh build and debug their semester and Final Year Project scripts using Python, C++, and OpenCV.",
    "Diagnosed logic bugs and compiler errors in peers' programs under tight deadlines, developing strong debugging instincts.",
    "Walked classmates through code logic step-by-step, training them to confidently explain and defend their projects.",
    "Balanced multiple peers' assignment deadlines simultaneously, developing strong time-management habits.",
  ];

  const printSkills = ["Python & C++", "MATLAB / Simulink", "Arduino / IoT", "JavaScript (ES6+)", "React & Node.js", "MongoDB", "OpenCV & TensorFlow", "Git / GitHub"];

  return (
    <>
      {/* ═══════════════════════════════════
          SCREEN VIEW  
      ═══════════════════════════════════ */}
      <div className="app-container">

        {/* Header */}
        <header className="header">
          <div className="logo" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
            MUHAMMAD ALI<span className="logo-dot"></span>
          </div>

          <nav className="nav" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            {['home', 'projects', 'experience'].map((tab) => {
              const labels = {
                home: 'Overview',
                projects: 'Projects',
                experience: 'Experience'
              };
              return (
                <span
                  key={tab}
                  className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {labels[tab]}
                </span>
              );
            })}

            {/* GitHub Profile */}
            <a
              href="https://github.com/BTK-N"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                fontSize: '0.85rem', color: 'var(--text-secondary)',
                textDecoration: 'none', padding: '0.3rem 0.6rem',
                borderRadius: '6px', border: '1px solid var(--border-color)',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-light)'; e.currentTarget.style.borderColor = 'var(--accent-light)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
              BTK-N
            </a>

            {/* Print */}
            <button
              className="btn"
              onClick={handlePrint}
              style={{
                padding: '0.4rem 0.8rem',
                fontSize: '0.8rem',
                backgroundColor: 'var(--accent-soft)',
                borderColor: 'rgba(13, 148, 136, 0.2)',
                color: 'var(--accent-light)',
              }}
            >
              ⬇ Save PDF
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="footer" style={{ justifyContent: 'space-between' }}>
          <div>&copy; {new Date().getFullYear()} Muhammad Ali · Built with React</div>
          <a
            href="https://github.com/BTK-N"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.8rem', color: 'var(--text-tertiary)',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            github.com/BTK-N
          </a>
        </footer>
      </div>


      {/* ═══════════════════════════════════
          PRINT-ONLY RESUME  
      ═══════════════════════════════════ */}
      <div className="print-resume">

        {/* Header */}
        <div className="print-header">
          <div>
            <div className="print-name">Muhammad Ali</div>
            <div className="print-title">
              Software Engineering Student & Passionate Builder
            </div>
          </div>
          <div className="print-contact">
            muhammadalee2005@gmail.com<br />
            Qasimabad, Hyderabad<br />
            github.com/muhammadalee2005
          </div>
        </div>

        {/* Summary */}
        <div className="print-section">
          <div className="print-section-title">
            About Me
          </div>
          <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: '1.55' }}>
            {printSummary}
          </p>
        </div>

        {/* Experience */}
        <div className="print-section">
          <div className="print-section-title">
            Coding Experience & Peer Help
          </div>
          <div className="print-item">
            <div className="print-item-header">
              <span>{printExpTitle}</span>
              <span>2023 – Present</span>
            </div>
            <div className="print-item-sub">
              <span>Campus Coding Hustle</span>
              <span>Hyderabad, Pakistan</span>
            </div>
            <ul className="print-bullets">
              {printExpBullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="print-section">
          <div className="print-section-title">Education</div>

          {[
            { degree: 'BS. Software Engineering (6th Semester)', school: 'University of Sindh', year: 'Expected 2027', loc: 'Jamshoro, Pakistan' },
            { degree: 'Intermediate (Pre-Engineering)', school: 'BISE Hyderabad', year: 'Completed 2022', loc: 'Hyderabad, Pakistan' },
            { degree: 'Matriculation (Science)', school: 'BISE Hyderabad', year: 'Completed 2020', loc: 'Hyderabad, Pakistan' },
          ].map((e, i) => (
            <div className="print-item" key={i} style={{ marginBottom: '0.5rem' }}>
              <div className="print-item-header">
                <span>{e.degree}</span>
                <span>{e.year}</span>
              </div>
              <div className="print-item-sub">
                <span>{e.school}</span>
                <span>{e.loc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="print-section">
          <div className="print-section-title">
            Personal Projects (What I Built for Fun)
          </div>

          {[
            {
              title: '25MW Wind Turbine Simulation & Modeling',
              stack: 'MATLAB, Simulink',
              bullets: ['Built a wind turbine simulation model to learn power engineering and control loops.', 'Learned how to integrate a grid system and MPPT logic in a complex environment.']
            },
            {
              title: 'OKX Algorithmic Scalper',
              stack: 'Python, Asyncio, WebSockets',
              bullets: ['Built a personal Python bot that connects to a crypto exchange API and places trades automatically based on price patterns.', 'Learned WebSocket real-time data feeds, async programming, and basic financial math logic.']
            },
            {
              title: 'Edge AI Predictive Maintenance',
              stack: 'Python, TensorFlow, Edge Impulse',
              bullets: ['Trained my first real neural network using vibration sensor data to predict machine failures.', 'Optimized and compressed the model to fit onto a tiny edge device with limited memory.']
            },
            {
              title: 'Event Management Dashboard',
              stack: 'Python, OpenCV, Pandas',
              bullets: ['Made a script that opens a webcam, reads QR codes in real time, and logs attendance into a spreadsheet.', 'Added a small live dashboard showing how many passes were verified versus flagged.']
            },
          ].map((p, i) => (
            <div className="print-item" key={i} style={{ marginBottom: '0.8rem' }}>
              <div className="print-item-header">
                <span>{p.title}</span>
                <span style={{ fontWeight: 400, fontSize: '0.8rem' }}>{p.stack}</span>
              </div>
              <ul className="print-bullets">
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="print-section">
          <div className="print-section-title">
            Tools & Languages I Use
          </div>
          <div className="print-skills-grid">
            {printSkills.map((s, i) => (
              <span className="print-skill-tag" key={i}>{s}</span>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
