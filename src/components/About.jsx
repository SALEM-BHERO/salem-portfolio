import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About</h2>
        <div className="card">
          <p>Salem Gwashavanhu is an e-commerce and business enthusiast with Zimbabwean roots. His interests lie in the digital space, where technology meets business growth and innovation. He is particularly interested in how digital platforms can transform commerce, finance, agriculture, and real estate.</p>
          <p>With an academic foundation in computer-related studies and business subjects, Salem approaches development with both technical understanding and business awareness.</p>
        </div>

        <h3>Education</h3>
        <div className="card">
          <h4>A-Level Education</h4>
          <p>Marlborough High School</p>
          <p>Passes in:</p>
          <ul>
            <li>Accounting</li>
            <li>Computer Science</li>
            <li>Business Studies</li>
          </ul>

          <h4>O-Level Education</h4>
          <p>Mandedza</p>
          <p>Subjects include English and Mathematics</p>

          <h4>Professional Certification</h4>
          <p>Computer Operations and Packages – HEXCO</p>
        </div>
      </div>
    </section>
  );
};

export default About;