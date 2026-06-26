import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Muonde Digital Agency",
      challenge: "Create a professional digital agency presence to showcase services and facilitate client engagement.",
      solution: "Developed a comprehensive platform with modern design principles and streamlined client interaction features.",
      url: "https://muonde-agency.vercel.app/"
    },
    {
      title: "Roltna Platform",
      challenge: "Establish a robust digital footprint for a growing business enterprise needing a cohesive online identity.",
      solution: "Built a scalable, responsive web application that clearly communicates value proposition and services.",
      url: "https://roltna.vercel.app/"
    },
    {
      title: "Konica Bizhub Solutions",
      challenge: "Design an intuitive catalog and information portal for enterprise office equipment and solutions.",
      solution: "Implemented a clean, structured product showcase prioritizing user navigation and detailed specifications.",
      url: "https://konicabizhub.vercel.app/"
    },
    {
      title: "Destiny Driven",
      challenge: "Build a trustworthy platform for financial services focusing on structured loan and investment information.",
      solution: "Created a specialized web platform with emphasis on trust, transparency, and structured delivery.",
      url: "https://destiny-driven.vercel.app/"
    },
    {
      title: "MFIC Portal",
      challenge: "Develop a secure, professional front-end interface for a financial investment corporation.",
      solution: "Designed a corporate-grade application focusing on data clarity, brand authority, and client conversion.",
      url: "https://mfic.vercel.app/"
    },
    {
      title: "RB Sons Enterprise",
      challenge: "Modernize the online operations and service showcase for an established family enterprise.",
      solution: "Delivered a modern, mobile-first web presence that bridges traditional business with digital accessibility.",
      url: "https://rb-sons.vercel.app/"
    }
  ];

  return (
    <main className="flex-1 w-full bg-background-light py-12 lg:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Portfolio</h2>
          <h1 className="text-4xl font-black text-slate-900 leading-tight">Featured Projects</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            A selection of live case studies showcasing my expertise in building scalable, 
            business-oriented digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="aspect-video bg-slate-50 relative overflow-hidden border-b border-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10"></div>
                <div className="text-slate-300 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h3>
                
                <div className="mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Challenge</span>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.challenge}</p>
                </div>
                
                <div className="mb-6 flex-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Solution</span>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.solution}</p>
                </div>

                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-slate-900 hover:bg-primary text-white text-sm font-semibold rounded-lg transition-colors gap-2"
                >
                  View Live Site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;