import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-background-light text-slate-900">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App