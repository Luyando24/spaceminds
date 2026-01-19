export default function GlobalReadiness() {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Global by Design.</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
            From Lusaka to London, Washington to Geneva. We operate across time zones and borders, delivering seamless collaboration for international teams.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
            <div>
              <span className="block text-3xl font-bold text-[var(--accent)] mb-2">4</span>
              <span className="text-gray-500">Continents</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-[var(--accent)] mb-2">24/7</span>
              <span className="text-gray-500">Support Capability</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-[var(--accent)] mb-2">100%</span>
              <span className="text-gray-500">Remote Native</span>
            </div>
             <div>
              <span className="block text-3xl font-bold text-[var(--accent)] mb-2">EN/FR/ES</span>
              <span className="text-gray-500">Multilingual Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
