import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2>Services</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Digital Solutions Development</h3>
            <p>Design and development of modern digital products for individuals, startups, and growing businesses.</p>
          </div>
          <div className="card">
            <h3>Web Development</h3>
            <p>Responsive, performance-focused websites built with clarity, usability, and scalability in mind.</p>
          </div>
          <div className="card">
            <h3>E-Commerce Support</h3>
            <p>Development and support of online stores, digital catalogs, and commerce-focused platforms.</p>
          </div>
          <div className="card">
            <h3>Business-Oriented Technology</h3>
            <p>Applying technology to improve business operations, efficiency, and digital presence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;