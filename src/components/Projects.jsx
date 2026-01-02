import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Case Studies</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Muonde Digital Agency Platform</h3>
            <p><strong>Challenge:</strong> Create a professional digital agency presence to showcase services and facilitate client engagement.</p>
            <p><strong>Solution:</strong> Developed a comprehensive platform with modern design principles, responsive functionality, and streamlined client interaction features.</p>
            <p><strong>Impact:</strong> Enhanced client acquisition and engagement through improved digital presence.</p>
          </div>
          <div className="card">
            <h3>Destiny Driven – Financial Services Platform</h3>
            <p><strong>Challenge:</strong> Build a trustworthy platform for financial services focusing on bank loans and investment opportunities.</p>
            <p><strong>Solution:</strong> Created a specialized web platform with emphasis on trust, transparency, and structured information delivery.</p>
            <p><strong>Impact:</strong> Improved customer confidence and streamlined financial service delivery.</p>
          </div>
          <div className="card">
            <h3>Murimi Digital – AI Agriculture Application</h3>
            <p><strong>Challenge:</strong> Develop an innovative solution to help farmers detect crop diseases using technology.</p>
            <p><strong>Solution:</strong> Implemented artificial intelligence to detect crop diseases, providing farmers with data-driven insights.</p>
            <p><strong>Impact:</strong> Enhanced agricultural productivity through technology-based solutions for improved yields.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;