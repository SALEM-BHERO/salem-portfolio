import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2>Services</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Digital Solutions Development</h3>
            <p>I design and develop modern digital products tailored to your specific business needs. From concept to deployment, I create solutions that are both technically robust and user-friendly.</p>
          </div>
          <div className="card">
            <h3>Web Development</h3>
            <p>Creating responsive, performance-focused websites that work seamlessly across all devices. I focus on clean code, usability, and scalability to ensure your digital presence stands out.</p>
          </div>
          <div className="card">
            <h3>E-Commerce Support</h3>
            <p>From setting up online stores to optimizing existing platforms, I provide comprehensive support for e-commerce businesses looking to establish or enhance their digital sales channels.</p>
          </div>
          <div className="card">
            <h3>Business-Oriented Technology</h3>
            <p>I help businesses leverage technology to improve operations, increase efficiency, and enhance their digital presence. My approach focuses on practical solutions that drive real business value.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;