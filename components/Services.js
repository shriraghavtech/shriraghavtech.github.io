// components/Services.js
export default function Services() {
  const services = [
    "Hardware Repair",
    "Software Optimization",
    "Cybersecurity",
    "Data Recovery",
  ];

  return (
    <section id="services" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="glass p-6 rounded-xl">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}