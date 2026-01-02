import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Services />
            <Projects />
            <Blog />
            <Resume />
            <Contact />
            <Newsletter />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </div>
  )
}

export default App