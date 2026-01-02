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
              <p style={{ marginBottom: 0 }}>Based in Zimbabwe</p>
            </div>
          </div>
          <p>As an e-commerce student and digital solutions developer, I'm passionate about bridging the gap between technology and business. My journey in tech began with a curiosity about how digital platforms can transform traditional business models.</p>
          <p>With a foundation in computer science and business studies, I approach development with both technical understanding and business awareness. I specialize in creating solutions that are not just technically sound, but also solve real-world business problems.</p>
        </div>

        <h3>Education</h3>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
            <h4 style={{ margin: 0 }}>Advanced Level (A-Level)</h4>
            <span style={{ color: 'var(--accent-purple)', fontWeight: 'var(--font-weight-semibold)' }}>Marlborough High School</span>
          </div>
          <p>Specialized in:</p>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-sm)' }}>
            <li>Accounting</li>
            <li>Computer Science</li>
            <li>Business Studies</li>
          </ul>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'var(--spacing-lg) 0 var(--spacing-md)' }}>
            <h4 style={{ margin: 0 }}>Ordinary Level (O-Level)</h4>
            <span style={{ color: 'var(--accent-purple)', fontWeight: 'var(--font-weight-semibold)' }}>Mandedza</span>
          </div>
          <p>Core subjects including English and Mathematics</p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'var(--spacing-lg) 0 var(--spacing-md)' }}>
            <h4 style={{ margin: 0 }}>Professional Certification</h4>
            <span style={{ color: 'var(--accent-purple)', fontWeight: 'var(--font-weight-semibold)' }}>HEXCO</span>
          </div>
          <p>Computer Operations and Packages</p>
        </div>

        <h3>Core Expertise</h3>
        <div className="project-grid">
          <div className="card">
            <h4>E-commerce Systems</h4>
            <p>Developing and optimizing online stores and digital marketplaces with focus on user experience and conversion</p>
          </div>
          <div className="card">
            <h4>Web & Application Development</h4>
            <p>Creating responsive, user-friendly digital experiences with modern technologies and best practices</p>
          </div>
          <div className="card">
            <h4>Digital Business Solutions</h4>
            <p>Implementing technology solutions to improve business operations and enhance digital presence</p>
          </div>
          <div className="card">
            <h4>Technology in Real Estate</h4>
            <p>Exploring digital platforms and tools to modernize property transactions and management</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;