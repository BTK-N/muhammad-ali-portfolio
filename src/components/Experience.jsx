import React from 'react';

function Experience() {
  return (
    <div className="animate-fade" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Experience & Education</h2>
        <p style={{ color: 'var(--text-secondary)' }}>My educational background and hands-on developer coding history.</p>
      </div>

      {/* The Hustle (Freelance / Peer Help Experience) */}
      <div className="panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              Coding Helper & Academic Project Peer
            </h3>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-light)' }}>
              Hobbyist Coding Hustle
            </span>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            2023 - PRESENT
          </span>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          For the past two years, I have run a very active student coding hustle. I am the go-to programmer on campus 
          for friends and classmates. I help fellow students from <strong>Mehran University (MUET)</strong> and 
          the <strong>University of Sindh</strong> build, write, and debug their practical semester assignments and 
          Final Year Projects (FYPs). This has given me an enormous amount of real-world, hands-on coding practice!
        </p>

        <ul style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <li>
            <strong>Hands-on Scripting:</strong> Wrote actual, functional scripts using Python, C++, and OpenCV to solve concrete problems (like computer vision grids and automation tools).
          </li>
          <li>
            <strong>Rapid Problem Solving:</strong> Diagnosed and fixed logic bugs, compiler issues, and script errors in peers' programs under short deadlines.
          </li>
          <li>
            <strong>Peer Tutoring:</strong> Sat down with classmates, walked them through the logic step-by-step, and trained them to confidently explain and defend their scripts to their university professors.
          </li>
          <li>
            <strong>Time Management:</strong> Balanced multiple assignment deadlines simultaneously, ensuring every script worked perfectly on presentation day.
          </li>
        </ul>
      </div>

      {/* Education Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <h3 style={{ fontSize: '1.3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Education</h3>

        {/* BS SE */}
        <div className="panel" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', padding: '1.2rem' }}>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '500' }}>BS. Software Engineering (6th Semester)</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>University of Sindh</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--accent-light)', display: 'block' }}>Expected Graduation: 2027</span>
            <span style={{ color: 'var(--text-tertiary)' }}>Jamshoro, Sindh</span>
          </div>
        </div>

        {/* Intermediate */}
        <div className="panel" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', padding: '1.2rem' }}>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '500' }}>Intermediate (Pre-Engineering)</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>BISE Hyderabad</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Completed: 2022</span>
            <span style={{ color: 'var(--text-tertiary)' }}>Hyderabad, Sindh</span>
          </div>
        </div>

        {/* Matric */}
        <div className="panel" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', padding: '1.2rem' }}>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '500' }}>Matriculation (Science)</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>BISE Hyderabad</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Completed: 2020</span>
            <span style={{ color: 'var(--text-tertiary)' }}>Hyderabad, Sindh</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;
