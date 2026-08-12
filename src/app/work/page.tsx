import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Button from '@/components/Button';

export const metadata = {
  title: "Our Selected Work | SpaceMinds",
  description: "Explore the digital systems, software platforms, and mobile apps built by SpaceMinds for school administration, hospitality, NGOs, sports academies, and e-commerce.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-32">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-widest font-mono block mb-4">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8">
              Selected Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              We partner with forward-thinking organisations, governments, and brands to design, engineer, and deploy high-performance software systems.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:border-black transition-all duration-500"
              >
                {/* Image Link */}
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative aspect-[16/10] overflow-hidden bg-gray-100 block"
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <Image 
                    src={project.image} 
                    alt={project.project} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </a>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                        {project.type}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        / {project.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2 group-hover:underline decoration-2 underline-offset-4 decoration-[var(--accent)]">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.project}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 font-mono">
                      Client: {project.client}
                    </p>
                    <p className="text-gray-600 leading-relaxed font-light mb-8">
                      {project.impact}
                    </p>
                  </div>

                  <div>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-black font-bold group-hover:translate-x-2 transition-transform duration-300 hover:text-[var(--accent)]"
                    >
                      Visit Website
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto font-light">
              Connect with our development team to discuss your software engineering needs and deploy scalable systems.
            </p>
            <Button 
              variant="primary" 
              size="large" 
              href="https://wa.me/260570260374"
              target="_blank"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
