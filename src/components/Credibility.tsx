export default function Credibility() {
  const stats = [
    { label: "Major Projects", value: "20+" },
    { label: "Enterprise Clients", value: "50+" },
    { label: "Countries Served", value: "15" },
    { label: "Users Impacted", value: "10M+" },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</span>
              <span className="text-sm md:text-base text-gray-500 uppercase tracking-wide font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
