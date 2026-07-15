import "./Benefits.css";

const benefits = [
  "Standardized staff training across departments",
  "Continuous learning without operational disruption",
  "Improved audit readiness and compliance tracking",
  "Stronger patient safety practices",
  "Reduced training costs compared to traditional programs",
];

function Benefits() {
  return (
    <section className="section benefits" id="benefits">
      <div className="container benefits__layout">
        <div>
          <p className="section-label">Benefits for Hospitals</p>
          <h2 className="section-title">Why hospitals choose MedTara</h2>
          <p className="section-lead">
            A practical platform that keeps training consistent, measurable, and ready
            for real clinical workflows.
          </p>
        </div>

        <ul className="benefits__list">
          {benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
