import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 hero-gradient overflow-hidden" id="home">
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary font-label-md text-label-md tracking-wider uppercase">Available for New Projects</span>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
              Architecting <span className="text-primary text-glow">Scalable</span> Digital Solutions.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto md:mx-0">
              Salem Gwashavanhu | E-Commerce & Digital Solutions Developer. Bridging the gap between complex business requirements and elegant web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link className="px-8 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-full shadow-[0_0_20px_rgba(164,230,255,0.2)] hover:shadow-[0_0_30px_rgba(164,230,255,0.4)] transition-all duration-300 active:scale-95 text-center" to="/projects">
                View Work
              </Link>
              <Link className="px-8 py-4 border border-outline-variant text-on-surface font-label-md text-label-md rounded-full hover:bg-surface-variant transition-all duration-300 active:scale-95 text-center" to="/contact">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg aspect-square relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-full h-full rounded-xl overflow-hidden glass-card border border-outline-variant/30">
              <img className="w-full h-full object-cover" alt="Developer workstation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO7zcGit0XN8sZzhS6l-jwwECTaiW73O-1tjuL-Es6JBnLHsOABxiNqQROxGEvM_MJzdFigxBhH6U3iLPYi-H_cY6WwdaPTFqUqI_IdI1mMI2KyCRGzBOa-d6IkdxbsrRowL4kvLsrL_bmVWHitd6Elm0guZHzwWY_8MUTMy-eKMLEbmbIdvN2FW-R52Ln_ecsbF0SLNzvoTVpwFIs9QFy8DuPktboc6yUUbsxMb4R1C6COnNhYBuitAdNGwlU9YFRJxKMQ27sx3cI"/>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline-lg text-headline-lg mb-8">Engineering Digital Excellence</h2>
            <div className="space-y-6">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Based in Zimbabwe, I am a dedicated developer specializing in building high-performance web ecosystems. My core stack revolves around <span className="text-primary font-bold">React</span> and <span className="text-primary font-bold">Tailwind CSS</span>, enabling me to craft interfaces that are as functional as they are beautiful.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                My approach focuses on the full spectrum of development. I believe that an intuitive user interface must be backed by a robust, secure, and scalable backend infrastructure to truly serve business goals.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
              <div>
                <div className="text-primary font-display-lg text-[48px] font-bold">5+</div>
                <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Years Experience</div>
              </div>
              <div>
                <div className="text-primary font-display-lg text-[48px] font-bold">50+</div>
                <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Projects Delivered</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 glass-card rounded-xl p-unit overflow-hidden">
            <img className="w-full h-full object-cover rounded-lg aspect-[4/3]" alt="Modern tech office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-nJe2CwdhJlWms-pWM1xMhQEo_2pwmvha0Pht3FivaFm_7d-FqcwvmBJuZNa1NX7riBw8oQI5flQO3X4oHYXRHXL81y_r76kGcjDPL1ZBv0PI6m7ZtFqRdB5buT7VJF5tB2hu76jGH0J443n56R3EgQFjsxkvA4kZfGdylu2uN1avy0RzLhdjSI7KQUfBkWF8ienmmq7IvQRb5h13fxzA_AEqLGD31A2kSxBZkb2oGyEAk6DtuMvOx7aBDQYI9LL33mH-8UTRUhcs"/>
          </div>
        </div>
      </section>

      {/* Key Expertise Section */}
      <section className="py-section-gap bg-surface-container-lowest relative overflow-hidden" id="expertise">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4">Key Expertise</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Providing strategic technical solutions for modern enterprises and forward-thinking agencies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">corporate_fare</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Corporate & Enterprise</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Scalable systems designed to handle high-volume data and complex organizational workflows.</p>
            </div>
            {/* Card 2 */}
            <div className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Financial & Agency</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">High-security platforms focused on precision, transaction integrity, and elegant reporting.</p>
            </div>
            {/* Card 3 */}
            <div className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">layers</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Full-Stack Mindset</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive development from pixel-perfect frontends to performant database architectures.</p>
            </div>
            {/* Card 4 */}
            <div className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Problem Solver</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Translating abstract business requirements into logical, efficient, and user-centric code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        <div className="glass-card rounded-3xl p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8">
            <span className="material-symbols-outlined text-[120px] text-primary/5 select-none">format_quote</span>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="font-label-md text-label-md text-primary tracking-[0.2em] uppercase mb-6 block">My Philosophy</span>
            <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight italic">
              "Balancing form and function with clean code and seamless user experiences."
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Technical mastery isn't just about knowing the syntax; it's about understanding the harmony between design and engineering to create products that feel as good as they perform.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="contact">
        <div className="flex flex-col md:flex-row items-center justify-between gap-gutter p-12 bg-surface-container rounded-2xl border border-outline-variant/30">
          <div>
            <h2 className="font-headline-md text-headline-md mb-2">Ready to start your next project?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Let's discuss how we can build your scalable digital solution today.</p>
          </div>
          <Link className="px-10 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-full font-bold hover:brightness-110 transition-all active:scale-95 whitespace-nowrap mt-6 md:mt-0" to="/contact">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;