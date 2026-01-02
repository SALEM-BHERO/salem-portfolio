import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <h2>Blog</h2>
        <div className="card">
          <h3>Simple and practical insights on:</h3>
          <ul>
            <li>E-commerce fundamentals</li>
            <li>Digital business strategies</li>
            <li>Web and application development basics</li>
          </ul>
          
          <h3>Featured Article</h3>
          <h4>"Getting Started with E-Commerce: What Every Beginner Should Know"</h4>
          <p>Learn the fundamentals of starting an e-commerce business, from choosing the right platform to understanding your target market.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;