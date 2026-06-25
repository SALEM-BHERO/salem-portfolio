import { Link } from 'react-router-dom';
import profileImg from '/profile.jpg';

const Home = () => {
  return (
    <main className="flex-1 w-full bg-background-light">
      {/* Hero Section */}
      <section className="container-custom py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Available for Projects
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Salem Gwashavanhu: I build digital products that bridge <span className="text-primary">technology</span> and business needs.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            E-Commerce & Digital Solutions Developer helping brands scale with robust, custom-built technology architectures.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/projects" className="btn btn-primary min-w-[160px]">
              View Portfolio
            </Link>
            <Link to="/contact" className="btn btn-secondary min-w-[160px]">
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-md lg:max-w-none relative">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
             <img src={profileImg} alt="Salem Gwashavanhu" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Key Expertise Summary */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">My Services</h2>
            <h3 className="text-3xl font-bold text-slate-900">Key Expertise</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">E-commerce</h4>
              <p className="text-slate-600 leading-relaxed">Building scalable online stores that optimize for conversion and handle high-traffic global sales.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Custom Solutions</h4>
              <p className="text-slate-600 leading-relaxed">Tailored digital tools and bespoke API integrations to solve unique operational business challenges.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Business Strategy</h4>
              <p className="text-slate-600 leading-relaxed">Aligning technical architecture with growth goals to ensure your technology stack is an asset, not a cost.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;