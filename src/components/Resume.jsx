import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <h2>Resume</h2>
        <div className="card">
          <h3>Professional Summary</h3>
          <p>E-commerce student and digital solutions developer with a focus on building practical digital products that support online business and innovation. Combines technical understanding with business awareness to create effective digital solutions.</p>
          
          <h3>Skills Overview</h3>
          <ul>
            <li>Web and application development</li>
            <li>E-commerce systems</li>
            <li>Digital business solutions</li>
            <li>Real estate technology applications</li>
            <li>Business-oriented technology solutions</li>
          </ul>
          
          <h3>Education</h3>
          <ul>
            <li>A-Level: Marlborough High School (Accounting, Computer Science, Business Studies)</li>
            <li>O-Level: Mandedza (English, Mathematics)</li>
            <li>Professional Certification: Computer Operations and Packages – HEXCO</li>
          </ul>
          
          <h3>Projects</h3>
          <ul>
            <li>Muonde Digital Agency</li>
            <li>Destiny Driven – Financial Services Platform</li>
            <li>Murimi Digital – AI Agriculture Application</li>
          </ul>
          
          <h3>Career Interests</h3>
          <p>Open to collaborations, internships, freelance work, and learning opportunities in e-commerce and digital development.</p>
          
          <div className="btn-group" style={{marginTop: 'var(--spacing-lg)'}}>
            <a href="#" className="btn btn-cyan">Download Resume (PDF)</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;