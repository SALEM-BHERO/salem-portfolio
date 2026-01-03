import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Hi, I'm Salem Gwashavanhu</h2>
            <h1>E-Commerce & Digital Solutions Developer</h1>
            <p>I build scalable digital products that bridge technology and business needs. With expertise in e-commerce platforms and business-oriented solutions, I help transform ideas into impactful digital experiences.</p>
            <div className="btn-group">
              <Link to="/contact" className="btn">Start a Project</Link>
              <Link to="/projects" className="btn btn-secondary">View Case Studies</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/profile.jpg" alt="Salem Gwashavanhu" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;