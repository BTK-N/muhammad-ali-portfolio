import React from 'react';

function Home({ setTab }) {
  const coreSkills = [
    'Python & C++',
    'MATLAB / Simulink',
    'Arduino / IoT',
    'OpenCV & TensorFlow',
    'REST APIs',
    'React & Node.js',
    'MongoDB',
    'Linux / Shell',
    'Git / GitHub'
  ];

  return (
    <div className="hero animate-fade">
      <span className="hero-subtitle">
        SOFTWARE ENGINEERING STUDENT & HOBBYIST BUILDER
      </span>
      
      <h1 className="hero-title">
        I love coding, building scripts, and learning how systems work.
      </h1>
      
      <p className="hero-description">
        Hi! I am a 3rd-year Software Engineering student at the <strong>University of Sindh</strong>. 
        I love diving into code to build practical things—whether it's writing a Python script to automate 
        crypto entries, using a webcam to scan QR codes, or building low-power IoT circuits. I built this CV 
        to show my passion and to find a team where I can grow and learn the industry standards!
      </p>

      {/* Dynamic Profile Callout Panel */}
      <div className="panel" style={{ marginTop: '1.5rem', borderLeft: '3px solid var(--accent-color)' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.6rem' }}>
          How I Learned the MERN Stack:
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Before applying, I had no hands-on experience with React, Node, or MongoDB. Because I am a fast learner and love building things, I self-taught the MERN stack and built this interactive website in less than 3 days. I may not have utilized the full capability of the MERN Stack, but I wanted to have a little project on this too so I made this.
        </p>
      </div>

      {/* Details & Clean Skill Section */}
      <div className="grid-2" style={{ marginTop: '2rem' }}>
        <div className="panel">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            Contact & Education
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
            <div>
              <span style={{ color: 'var(--text-tertiary)' }}>Location: </span>
              <span style={{ color: 'var(--text-secondary)' }}>Qasimabad, Hyderabad</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-tertiary)' }}>Email: </span>
              <a href="mailto:muhammadalee2005@gmail.com" style={{ color: 'var(--accent-light)', textDecoration: 'underline' }}>
                muhammadalee2005@gmail.com
              </a>
            </div>
            <div>
              <span style={{ color: 'var(--text-tertiary)' }}>Status: </span>
              <span style={{ color: 'var(--text-secondary)' }}>University of Sindh (BS. SE, 6th Semester)</span>
            </div>
          </div>
        </div>

        <div className="panel">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            Skills (Only the Core Stacks)
          </h3>
          <div className="badge-row">
            {coreSkills.map((skill, idx) => (
              <span key={idx} className="badge accent">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Actions */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
        <button className="btn btn-primary" onClick={() => setTab('projects')}>
          Explore My Projects &rarr;
        </button>
      </div>
    </div>
  );
}

export default Home;
