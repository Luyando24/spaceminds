export default function Services() {
  const services = [
    {
      title: "Digital Transformation",
      description: "Modernizing core infrastructure for resilience and scale.",
      area: "col-span-1 md:col-span-2",
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 w-64 h-64 text-black">
          <path d="M20 180L180 20M180 20H80M180 20V120" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
          <path d="M40 180L140 80" stroke="currentColor" strokeWidth="4" strokeLinecap="square" opacity="0.5" />
          <circle cx="180" cy="20" r="8" fill="currentColor" />
          <circle cx="20" cy="180" r="8" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Civic Technology",
      description: "Building accessible digital services for public citizens.",
      area: "col-span-1",
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 w-48 h-48 text-black">
           <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" />
           <path d="M20 100H180" stroke="currentColor" strokeWidth="4" />
           <path d="M100 20C120 20 140 50 140 100C140 150 120 180 100 180C80 180 60 150 60 100C60 50 80 20 100 20Z" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      title: "Data Platforms",
      description: "Secure, privacy-first data systems for decision intelligence.",
      area: "col-span-1",
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 w-48 h-48 text-black">
           <rect x="40" y="40" width="120" height="30" stroke="currentColor" strokeWidth="4" />
           <rect x="40" y="90" width="120" height="30" stroke="currentColor" strokeWidth="4" />
           <rect x="40" y="140" width="120" height="30" stroke="currentColor" strokeWidth="4" />
           <path d="M40 55H160M40 105H160M40 155H160" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        </svg>
      )
    },
    {
      title: "Enterprise UX/UI",
      description: "Intuitive interfaces for complex, high-stakes workflows.",
      area: "col-span-1 md:col-span-2",
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 w-64 h-64 text-black">
           <rect x="20" y="40" width="160" height="120" stroke="currentColor" strokeWidth="4" />
           <path d="M20 70H180" stroke="currentColor" strokeWidth="4" />
           <circle cx="40" cy="55" r="4" fill="currentColor" />
           <circle cx="60" cy="55" r="4" fill="currentColor" />
           <circle cx="80" cy="55" r="4" fill="currentColor" />
           <rect x="40" y="90" width="40" height="40" stroke="currentColor" strokeWidth="2" opacity="0.5" />
           <rect x="90" y="90" width="70" height="10" fill="currentColor" opacity="0.3" />
           <rect x="90" y="110" width="50" height="10" fill="currentColor" opacity="0.3" />
        </svg>
      )
    },
    {
      title: "Legacy Modernization",
      description: "Transitioning critical systems without operational downtime.",
      area: "col-span-1",
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 w-48 h-48 text-black">
           <path d="M100 40V20M100 180V160M180 100H160M40 100H20" stroke="currentColor" strokeWidth="4" />
           <path d="M160 100C160 133.137 133.137 160 100 160C66.8629 160 40 133.137 40 100C40 66.8629 66.8629 40 100 40" stroke="currentColor" strokeWidth="4" />
           <path d="M160 100L140 80M160 100L140 120" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      title: "Secure Cloud Architecture",
      description: "Sovereign and compliant cloud foundations for institutions.",
      area: "col-span-1 md:col-span-2",
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 w-64 h-64 text-black">
           <path d="M50 140H150V100L100 60L50 100V140Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
           <path d="M100 90V110M100 110V120" stroke="currentColor" strokeWidth="4" />
           <circle cx="100" cy="110" r="15" stroke="currentColor" strokeWidth="2" />
           <path d="M160 140H180C191.046 140 200 131.046 200 120C200 108.954 191.046 100 180 100C180 80 160 60 140 60C120 60 100 80 100 80" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 md:py-40 bg-white">
      <div className="container-custom">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">What We Do</h2>
            <div className="w-32 h-2 bg-[var(--accent)]"></div>
          </div>
          <p className="text-xl text-gray-500 max-w-md mt-8 md:mt-0">
             We deliver end-to-end technical excellence for complex environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative p-10 border border-gray-200 hover:border-black transition-colors duration-500 flex flex-col justify-between h-[300px] md:h-[400px] bg-gray-50 hover:bg-white overflow-hidden ${service.area}`}
            >
              {service.graphic}
              
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                 </svg>
              </div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-none mb-4 group-hover:translate-y-[-4px] transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-xl text-gray-500 group-hover:text-black transition-colors duration-300 max-w-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
