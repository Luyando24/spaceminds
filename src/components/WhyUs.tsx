export default function WhyUs() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Why SpaceMinds?</h2>
            <div className="w-24 h-1 bg-[var(--accent)] mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              We understand the complexity of large-scale institutions. We don't just write code; we engineer stability and trust.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold text-black mb-3">Institutional DNA</h4>
              <p className="text-gray-500 leading-relaxed">
                Our processes are designed for the rigors of government procurement, compliance, and long-term maintainability.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black mb-3">User-Centric at Scale</h4>
              <p className="text-gray-500 leading-relaxed">
                We bring consumer-grade UX to complex enterprise systems, reducing training time and increasing adoption.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black mb-3">Future-Proof Architecture</h4>
              <p className="text-gray-500 leading-relaxed">
                We build modular systems that evolve. No vendor lock-in, just clean, documented, and ownership-ready code.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black mb-3">Calm Collaboration</h4>
              <p className="text-gray-500 leading-relaxed">
                We replace chaos with clarity. Our project management is transparent, predictable, and devoid of surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
