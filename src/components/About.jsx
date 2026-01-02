import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>Professional Profile</h2>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
            <img src="/src/assets/images/profile.jpg" alt="Salem Gwashavanhu" className="profile-img" style={{ maxWidth: '200px', height: 'auto' }} />
            <div style={{ flex: 1 }}>
              <h3>Salem Gwashavanhu</h3>
              <p style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--accent-green)' }}>E-commerce & Digital Solutions Developer</p>
              <p style={{ marginBottom: 0 }}>Based in Zimbabwe</p>
            </div>
          </div>
          <p>As an e-commerce specialist and digital solutions developer, I focus on creating technology solutions that bridge the gap between business needs and technical capabilities. My approach combines technical expertise with strategic business thinking to deliver products that drive real value.</p>
          <p>With a strong foundation in both computer science and business studies, I bring a unique perspective to development projects, ensuring that technical solutions align with business objectives and market needs.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-xl)' }}>
          <div className="card">
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
          </div>

          <div className="card">
            <h3>Core Expertise</h3>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>E-commerce Systems</h4>
              <p>End-to-end development of online stores and digital marketplaces with focus on user experience and conversion optimization.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>Web & Application Development</h4>
              <p>Building responsive, scalable applications with modern technologies and best practices for performance and security.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>Digital Business Solutions</h4>
              <p>Implementing technology solutions to streamline operations and enhance digital presence for businesses.</p>
            </div>
            
            <div>
              <h4>Technology in Emerging Markets</h4>
              <p>Specializing in solutions tailored for the unique challenges and opportunities in African markets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;