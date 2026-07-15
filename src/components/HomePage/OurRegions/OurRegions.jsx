import "./OurRegions.css";

const regions = [
  {
    name: "India",
    text: "MedTara supports hospitals across India with structured digital training that strengthens staff capability, improves patient safety, and supports accreditation readiness — with consistent, role-based learning and audit-ready records.",
  },
  {
    name: "Africa",
    text: "MedTara provides scalable digital training for healthcare organizations across Africa, helping hospitals improve workforce capability, strengthen service quality, and deliver consistent patient care.",
  },
];

function OurRegions() {
  return (
    <section className="section our-regions" id="regions">
      <div className="container">
        <div className="our-regions__header">
          <p className="section-label">Our Regions</p>
          <h2 className="section-title">Serving healthcare teams across India and Africa</h2>
        </div>

        <div className="our-regions__grid">
          {regions.map((region) => (
            <article key={region.name} className="region-panel">
              <h3>{region.name}</h3>
              <p>{region.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurRegions;
