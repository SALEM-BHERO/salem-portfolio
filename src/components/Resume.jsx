import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="card">
          <h3>Summary</h3>
          <p>E-commerce specialist and digital solutions developer with expertise in creating technology solutions that bridge business needs and technical capabilities. Combines technical expertise with strategic business thinking to deliver products that drive real value.</p>
          
          <h3>Core Competencies</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
            <div>
              <h4>Technical Skills</h4>
              <ul>
                <li>Full-stack Web Development</li>
                <li>E-commerce Platform Development</li>
                <li>API Development & Integration</li>
                <li>Database Design & Management</li>
              </ul>
            </div>
            <div>
              <h4>Business Skills</h4>
              <ul>
                <li>Digital Strategy</li>
                <li>Project Management</li>
                <li>Business Process Analysis</li>
                <li>Client Relationship Management</li>
              </ul>
            </div>
            <div>
              <h4>Specializations</h4>
              <ul>
                <li>Emerging Markets Solutions</li>
                <li>User Experience Design</li>
                <li>Conversion Optimization</li>
                <li>Technology Consulting</li>
              </ul>
            </div>
          </div>
          
          <h3>Education</h3>
          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <h4>Advanced Level (A-Level)</h4>
            <p style={{ color: 'var(--accent-green)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-sm)' }}>Marlborough High School</p>
            <p>Specialized in: Accounting, Computer Science, Business Studies</p>
          </div>
          
          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <h4>Ordinary Level (O-Level)</h4>
            <p style={{ color: 'var(--accent-green)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-sm)' }}>Mandedza</p>
            <p>Core subjects including English and Mathematics</p>
          </div>
          
          <div>
            <h4>Professional Certification</h4>
            <p style={{ color: 'var(--accent-green)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-sm)' }}>HEXCO</p>
            <p>Computer Operations and Packages</p>
          </div>
          
          <h3>Notable Projects</h3>
          <ul>
            <li>Muonde Digital Agency Platform - Comprehensive digital agency solution</li>
            <li>Destiny Driven Financial Services Platform - Trustworthy financial services platform</li>
            <li>Murimi Digital AI Agriculture Application - AI-powered crop disease detection</li>
          </ul>
          
          <h3>Career Focus</h3>
          <p>Specializing in e-commerce and digital solutions with a focus on emerging markets. Seeking opportunities to contribute to innovative projects that make a meaningful impact in the digital transformation space.</p>
          
          <div className="btn-group" style={{marginTop: 'var(--spacing-lg)'}}>
            <a href="#" className="btn btn-green">Download Full Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;