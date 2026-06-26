import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "RB Sons Enterprise",
      category: "Enterprise",
      description: "Modernizing a legacy supply chain management system into a high-performance web platform with real-time inventory tracking and automated reporting.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp212XwDCgOAN5FGX4uXLIINxGCsbQ_qbDN5rqNns2aHX02O6N3o8MqW_5Bo55AHue7Zk38IIzIcpBcpNgEvwzknx3oqAtJGwQYnAcbDQhgKbGikixNJ7pP-AcTr-nNSkwu9Pgwl19Pd4ygT9Fgc_wgPpGrww5hdDAyg4edpaC552Ai-cFfAHahu-eNqOQAWOP6p7yvUon2Gx9Vh_MA_2-j7YGGkMFAFdr-akUk7XDT94GG6A5vzdRoyeUHefzpaCA9kX7gAgCMaC6",
      url: "https://rb-sons.vercel.app/"
    },
    {
      title: "Konica Bizhub Solutions",
      category: "Operations",
      description: "Optimizing enterprise device operations through a centralized hub, reducing downtime by 40% using predictive maintenance algorithms.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeDLiwpAFttkLlHaVogYkEtLoLgG8T_a35_fnVMp8DceZSjNlnt2OtdZoH1CuOODYirM7PB-oegUdOmw3foUXExwNDxwTpX87eB3EaOSjwdLUt1_0_KveT6oWTbS9opfQB08gIF51MwKvYLb0wfxGuhYS4il3FxpKZpYuvQpgD4SvvCCwIIi9QkMxol3oJCckXA2-Aqcdg0LgL-sWK3ObqwGAOhQsYCawwCB0GwUpSbl0XLJGn6-UPMMrtxq4uU7rXuf6SwOWwV7tL",
      url: "https://konicabizhub.vercel.app/"
    },
    {
      title: "Destiny Driven",
      category: "Finance",
      description: "Architecting a secure, scalable investment platform capable of handling complex financial transactions and diverse portfolio management.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA68zRMBP7OhCxODQT-hpIyFxUFFfTonUZEbweLY7iPmHTBhJLSWnV4S_gFyHfgrKuT5CZZNIUgTbh8UvewMJSjDiKzVCvLyCAFSWcS-_GEv1NNxlRVZGRUM9RzXQIZ0ncENfvD64aAB7q1Q5-iM-JcZX2wJ6_Ycc-XJsaquzDowiquTUjrCfOBN0rS0gU6x7ulptxQCPZeBx2u5BMRauCbobl_rmXmro8ttp8Y5RVRWZ_pWNlmh3O-xUE7QxD1h2YHbNSG5Whi7Wwb",
      url: "https://destiny-driven.vercel.app/"
    },
    {
      title: "Muonde Digital Agency",
      category: "Agency",
      description: "Crafting a high-impact digital presence with a focus on interactive animations and seamless user experience to drive brand conversion.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFiK4S236NY8JyuB6D6xzAnivnE_nA9ZJOBDQN6PrkmFQ4LtZHP6sVpmmDkkEDoKE8Uv-H29K1MGOWUskfdhzYkXGAHz717Zlw7eVxlD1UyiQYma60nCYu9hpsqmxzIjaL4Niu0-YUMQL0icrn2Xbi5H31xB6NPUOYG05chlpt_VU3L23MVjO4pas2oEHEYRtqtX5AuAh3PTm8NKLGUPp5d5mEV7fTQ-1h_R-U3xBZ_cQHMi_Jun95O60fdinO6PTmNczZQn9f66L9",
      url: "https://muonde-agency.vercel.app/"
    },
    {
      title: "Roltna Platform",
      category: "Identity",
      description: "Building a decentralized digital identity framework that prioritizes privacy, speed, and seamless integration for enterprise users.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyYZMsSu1SMjqbguFFBTndIw0ekhyHpN5jdqiw0SbyhskAdEmOdFa5ia3iQrrnS4QsHMy2wzE0WNBRhtzZNiOSrPqoGScsflv5xlcqkwt5v_tkWOnCwbQs8h2TrylEFXUzajzxudokC-9RTWEb4Rt7ov0U8pJx5KJymCsTazqrbH0P_dwnsZueVmaCk129utDS3Pef7Z4lmTzN5wDtHEUEwBmVVGwOisb0hbNU1ie47MMzX6sIfOEokJ7kUZuODQ4NE9LM8Pt8R2YY",
      url: "https://roltna.vercel.app/"
    },
    {
      title: "MFIC",
      category: "Non-Profit",
      description: "Redesigning a community platform to enhance engagement through intuitive event management and integrated streaming services.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-Y_MSbUO1ew8cQ_AxFoxpE621m6G9fjF1XGjlHymYmSyH8S7gJLg6vfy5NvtQzjLriYnODI5dOz6ilwIj3gyEW0-vPEljb5uqum-kDSfDM_0oUt58vpXlZXK8N3eutItbKiVQbK0ilL2Hcg6Qb1taUkoxy0LeyB9pzVlVVLuiJJcHVU24lUTa8LkAAJE85iXu8AIBc60TXDYHunD6Esy_6uHeJWA2ojc50RmG92uBXdqBkp792359M11X4H-aK8JFY_alpBlSZb2f",
      url: "https://mfic.vercel.app/"
    }
  ];

  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[1px] w-12 bg-primary"></span>
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Portfolio</span>
        </div>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-6 max-w-3xl">
          Selected <span className="text-primary text-glow">Case Studies</span> and Technical Executions.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A deep dive into complex problems solved through architecturally sound code, user-centric design, and strategic technical modernization.
        </p>
      </header>

      {/* Bento Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {projects.map((project, index) => (
          <article key={index} className="glass-card flex flex-col group h-full rounded-xl overflow-hidden">
            <div className="relative h-64 w-full overflow-hidden">
              <div 
                className="bg-cover bg-center w-full h-full group-hover:scale-110 transition-transform duration-700" 
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <span className="bg-surface-container-highest text-primary font-code-sm text-code-sm px-3 py-1 rounded-full border border-outline-variant/30">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{project.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">{project.description}</p>
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full font-label-md text-label-md text-primary border border-primary/30 px-6 py-3 rounded hover:bg-primary/10 transition-all group-hover:border-primary/60"
              >
                <span>View Live Site</span>
                <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="mt-section-gap relative overflow-hidden rounded-xl border border-outline-variant/30 p-12 md:p-20 text-center glass-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,209,255,0.05)_0%,_transparent_50%)]"></div>
        <div className="relative z-10">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">Ready to start your next technical transformation?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">Let's discuss how your enterprise can leverage technical mastery for superior digital performance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md primary-glow hover:brightness-110 transition-all">Schedule a Consultation</a>
            <a href="/contact" className="bg-surface-container text-on-surface border border-outline-variant px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-all">Browse More Work</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;