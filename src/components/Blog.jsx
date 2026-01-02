import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <h2>Insights & Articles</h2>
        <div className="card">
          <h3>Topics I Explore:</h3>
          <ul>
            <li>E-commerce fundamentals and best practices</li>
            <li>Digital business strategies for emerging markets</li>
            <li>Web and application development techniques</li>
            <li>Technology trends in African markets</li>
          </ul>
          
          <h3>Featured Insight</h3>
          <h4>"Getting Started with E-Commerce: What Every Beginner Should Know"</h4>
          <p>Understanding the fundamentals of starting an e-commerce business, from choosing the right platform to understanding your target market in emerging economies.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;