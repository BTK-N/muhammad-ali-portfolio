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
        <footer className="footer" style={{ justifyContent: 'center' }}>
          <div>&copy; {new Date().getFullYear()} Muhammad Ali · Built with React</div>
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
