import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <main className="flex-1 w-full bg-background-light py-12 lg:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Portfolio</h2>
          <h1 className="text-4xl font-black text-slate-900 leading-tight">Case Studies</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            A selection of recent projects showcasing my expertise in building scalable, 
            business-oriented digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all">
            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
              {/* Placeholder for actual project image */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Muonde Digital Agency</h3>
              <div className="mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Challenge</span>
                <p className="text-slate-600 text-sm">Create a professional digital agency presence to showcase services and facilitate client engagement.</p>
              </div>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Solution</span>
                <p className="text-slate-600 text-sm">Developed a comprehensive platform with modern design principles and streamlined client interaction features.</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all">
            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Destiny Driven Platform</h3>
              <div className="mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Challenge</span>
                <p className="text-slate-600 text-sm">Build a trustworthy platform for financial services focusing on bank loans and investments.</p>
              </div>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Solution</span>
                <p className="text-slate-600 text-sm">Created a specialized web platform with emphasis on trust, transparency, and structured information delivery.</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all">
            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Murimi Digital AI App</h3>
              <div className="mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Challenge</span>
                <p className="text-slate-600 text-sm">Develop an innovative solution to help farmers detect crop diseases using technology.</p>
              </div>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Solution</span>
                <p className="text-slate-600 text-sm">Implemented artificial intelligence to detect crop diseases, providing farmers with data-driven insights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;