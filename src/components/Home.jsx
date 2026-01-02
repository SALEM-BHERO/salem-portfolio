import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <img src="/src/assets/images/profile.jpg" alt="Salem Gwashavanhu" className="profile-img" />
        <h1>Salem Gwashavanhu</h1>
        <h2>E-Commerce Student & Digital Solutions Developer</h2>
        <p>"Focused on building practical digital products that support online business and innovation."</p>
        <div className="btn-group">
          <Link to="/contact" className="btn">Contact Me</Link>
          <Link to="/projects" className="btn btn-secondary">View Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;