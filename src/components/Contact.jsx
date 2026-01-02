import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="card">
          <p><strong>Email:</strong> <a href="mailto:sgwashavanhu55@gmail.com">sgwashavanhu55@gmail.com</a></p>
          <p><strong>Phone:</strong> +263 78 278 6864</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/salem-gwashavanhu" target="_blank" rel="noopener noreferrer">Salem Gwashavanhu</a></p>
          <p>Open to collaborations, internships, freelance work, and learning opportunities in e-commerce and digital development.</p>
          
          <div className="btn-group" style={{marginTop: 'var(--spacing-lg)'}}>
            <a href="mailto:sgwashavanhu55@gmail.com" className="btn">Send Email</a>
            <a href="https://linkedin.com/in/salem-gwashavanhu" target="_blank" rel="noopener noreferrer" className="btn btn-purple">Connect on LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;