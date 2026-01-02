import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Muonde Digital Agency</h3>
            <p>A digital agency platform designed to present services professionally and support client engagement through a clean and modern web presence.</p>
          </div>
          <div className="card">
            <h3>Destiny Driven – Financial Services Platform</h3>
            <p>A web platform focused on bank loans and financial services, emphasizing trust, clarity, and structured information delivery.</p>
          </div>
          <div className="card">
            <h3>Murimi Digital</h3>
            <p>An agriculture-focused application aimed at detecting crop diseases using artificial intelligence, supporting farmers through data-driven insights and technology.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;