import "./ModernHospitals.css";

function ModernHospitals() {
  return (
    <section className="section modern-hospitals" id="modern-hospitals">
      <div className="container modern-hospitals__layout">
        <div className="modern-hospitals__visual">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b99cd5cd17?auto=format&fit=crop&w=1200&q=80"
            alt="Healthcare professionals collaborating in a modern hospital"
            loading="lazy"
          />
        </div>

        <div className="modern-hospitals__copy">
          <p className="section-label">For Hospitals</p>
          <h2 className="section-title">Healthcare Training for Modern Hospitals</h2>
          <p className="section-lead">
            Hospitals operate in complex environments where departments must work
            together efficiently. Without structured training, knowledge gaps can
            affect operations, communication, and patient safety.
          </p>
          <ul className="modern-hospitals__list">
            <li>Centralized training across nurses, administrators, and care teams</li>
            <li>Modules in infection prevention, patient safety, and administration</li>
            <li>Self-paced learning that fits real clinical schedules</li>
          </ul>
          <a className="btn btn-outline" href="#cta">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default ModernHospitals;
