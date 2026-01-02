import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2>Services</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Digital Solutions Development</h3>
            <p><strong>Overview:</strong> Custom digital product development tailored to specific business requirements. From concept to deployment, I create solutions that are both technically robust and strategically aligned with business goals.</p>
            <p><strong>Deliverables:</strong> Full-cycle development, testing, deployment, and maintenance.</p>
          </div>
          <div className="card">
            <h3>E-Commerce Platform Development</h3>
            <p><strong>Overview:</strong> Comprehensive e-commerce solutions including platform selection, customization, and optimization. Focus on user experience, conversion optimization, and scalable architecture.</p>
            <p><strong>Deliverables:</strong> Complete online stores, payment integration, inventory management, and analytics setup.</p>
          </div>
          <div className="card">
            <h3>Business Technology Consulting</h3>
            <p><strong>Overview:</strong> Strategic technology guidance to improve business operations and enhance digital presence. Analysis of current systems and recommendations for technology adoption.</p>
            <p><strong>Deliverables:</strong> Technology assessments, strategic recommendations, implementation roadmaps.</p>
          </div>
          <div className="card">
            <h3>Web & Application Development</h3>
            <p><strong>Overview:</strong> Responsive, performance-focused websites and applications built with modern technologies. Emphasis on usability, scalability, and security best practices.</p>
            <p><strong>Deliverables:</strong> Custom web applications, responsive websites, API development, and integration services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;