import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Muonde Digital Agency</h3>
            <p>A comprehensive digital agency platform designed to showcase services professionally and facilitate client engagement through a modern, responsive web presence.</p>
          </div>
          <div className="card">
            <h3>Destiny Driven – Financial Services Platform</h3>
            <p>A specialized web platform for financial services, focusing on bank loans and investment opportunities with emphasis on trust, transparency, and structured information delivery.</p>
          </div>
          <div className="card">
            <h3>Murimi Digital – AI Agriculture Application</h3>
            <p>An innovative agriculture-focused application utilizing artificial intelligence to detect crop diseases, providing farmers with data-driven insights and technology-based solutions for improved yields.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;