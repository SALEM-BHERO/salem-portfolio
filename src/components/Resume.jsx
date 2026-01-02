import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <h2>Professional Profile</h2>
        <div className="card">
          <h3>Professional Summary</h3>
          <p>E-commerce student and digital solutions developer with a passion for creating practical digital products that support online business and innovation. Combines technical expertise with business acumen to deliver solutions that drive real value.</p>
          
          <h3>Core Competencies</h3>
          <ul>
            <li>Full-stack web and application development</li>
            <li>E-commerce platform development and optimization</li>
            <li>Digital business strategy and implementation</li>
            <li>Technology solutions for emerging markets</li>
            <li>Real estate technology applications</li>
          </ul>
          
          <h3>Educational Background</h3>
          <ul>
            <li><strong>Advanced Level (A-Level):</strong> Marlborough High School (Accounting, Computer Science, Business Studies)</li>
            <li><strong>Ordinary Level (O-Level):</strong> Mandedza (English, Mathematics)</li>
            <li><strong>Professional Certification:</strong> Computer Operations and Packages – HEXCO</li>
          </ul>
          
          <h3>Project Experience</h3>
          <ul>
            <li>Muonde Digital Agency Platform</li>
            <li>Destiny Driven Financial Services Platform</li>
            <li>Murimi Digital AI Agriculture Application</li>
          </ul>
          
          <h3>Career Focus</h3>
          <p>Seeking opportunities to contribute to innovative e-commerce and digital solutions that make a meaningful impact in emerging markets. Open to collaborations, internships, and freelance opportunities.</p>
          
          <div className="btn-group" style={{marginTop: 'var(--spacing-lg)'}}>
            <a href="#" className="btn btn-purple">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;