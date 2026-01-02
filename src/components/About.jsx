import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <img src="/src/assets/images/profile.jpg" alt="Salem Gwashavanhu" className="profile-img" style={{ marginRight: 'var(--spacing-lg)' }} />
            <div>
              <h3>Salem Gwashavanhu</h3>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>E-commerce Student & Digital Solutions Developer</p>
              <p style={{ marginBottom: 0 }}>Zimbabwe</p>
            </div>
          </div>
          <p>Salem Gwashavanhu is an e-commerce and business enthusiast with Zimbabwean roots. His interests lie in the digital space, where technology meets business growth and innovation. He is particularly interested in how digital platforms can transform commerce, finance, agriculture, and real estate.</p>
          <p>With an academic foundation in computer-related studies and business subjects, Salem approaches development with both technical understanding and business awareness.</p>
        </div>

        <h3>Education</h3>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
            <h4 style={{ margin: 0 }}>A-Level Education</h4>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 'var(--font-weight-semibold)' }}>Marlborough High School</span>
          </div>
          <p>Passes in:</p>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-sm)' }}>
            <li>Accounting</li>
            <li>Computer Science</li>
            <li>Business Studies</li>
          </ul>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'var(--spacing-lg) 0 var(--spacing-md)' }}>
            <h4 style={{ margin: 0 }}>O-Level Education</h4>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 'var(--font-weight-semibold)' }}>Mandedza</span>
          </div>
          <p>Subjects include English and Mathematics</p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'var(--spacing-lg) 0 var(--spacing-md)' }}>
            <h4 style={{ margin: 0 }}>Professional Certification</h4>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 'var(--font-weight-semibold)' }}>HEXCO</span>
          </div>
          <p>Computer Operations and Packages</p>
        </div>

        <h3>Key Focus Areas</h3>
        <div className="project-grid">
          <div className="card">
            <h4>E-commerce systems</h4>
            <p>Building and optimizing online stores and digital marketplaces</p>
          </div>
          <div className="card">
            <h4>Web and application development</h4>
            <p>Creating responsive, user-friendly digital experiences</p>
          </div>
          <div className="card">
            <h4>Digital business solutions</h4>
            <p>Implementing technology to improve business operations</p>
          </div>
          <div className="card">
            <h4>Technology in real estate</h4>
            <p>Exploring digital platforms for property transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;