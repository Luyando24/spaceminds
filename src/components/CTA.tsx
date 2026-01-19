import Button from './Button';

export default function CTA() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-white text-center">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
            Ready to Build Something Lasting?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Partner with a team that values precision, security, and long-term impact.
          </p>
          <Button variant="primary" size="large">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
