import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <h2>Insights & Thought Leadership</h2>
        <div className="card">
          <h3>Areas of Expertise:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
            <div>
              <h4>E-commerce Innovation</h4>
              <p>Exploring the latest trends and strategies in e-commerce development, platform optimization, and customer experience enhancement.</p>
            </div>
            <div>
              <h4>Digital Transformation</h4>
              <p>Thoughts on how businesses can leverage technology to improve operations, reach new markets, and enhance customer engagement.</p>
            </div>
            <div>
              <h4>Emerging Market Solutions</h4>
              <p>Insights on developing technology solutions specifically tailored for the unique challenges and opportunities in African markets.</p>
            </div>
            <div>
              <h4>Technology Strategy</h4>
              <p>Analysis of how businesses can align their technology investments with strategic business objectives for maximum impact.</p>
            </div>
          </div>
          
          <h3>Featured Insights</h3>
          <div className="project-grid">
            <div className="card">
              <h4>"The Future of E-commerce in Emerging Markets"</h4>
              <p>An analysis of the opportunities and challenges facing e-commerce platforms in developing economies, with focus on user experience and market-specific solutions.</p>
              <p className="text-tertiary" style={{ marginBottom: 0 }}>Published: Coming Soon</p>
            </div>
            <div className="card">
              <h4>"Bridging Technology and Business: A Developer's Perspective"</h4>
              <p>Exploring how technical solutions can be designed to directly address business challenges and create measurable value.</p>
              <p className="text-tertiary" style={{ marginBottom: 0 }}>Published: Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;