import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="section mission-vision" id="mission-vision">
      <div className="container">
        <div className="mission-vision__header">
          <p className="section-label">Mission & Vision</p>
          <h2 className="section-title">What drives MedTara forward</h2>
        </div>

        <div className="mission-vision__grid">
          <article className="mission-vision__panel">
            <h3>Our Mission</h3>
            <p className="mission-vision__lead">
              Our mission is to empower healthcare professionals with accessible
              and practical learning that improves healthcare quality and patient
              safety.
            </p>
            <p>
              Healthcare professionals require continuous access to knowledge and
              training in order to maintain high standards of care.
            </p>
            <p>
              MedTara aims to provide learning opportunities that support
              healthcare professionals in developing their skills while
              strengthening healthcare systems.
            </p>
            <p>
              Through structured learning programs, MedTara helps healthcare
              institutions build knowledgeable teams capable of delivering safe
              and effective patient care.
            </p>
          </article>

          <article className="mission-vision__panel mission-vision__panel--accent">
            <h3>Our Vision</h3>
            <p className="mission-vision__lead">
              Our vision is to become a trusted healthcare learning platform
              supporting hospitals and healthcare professionals across emerging
              healthcare markets.
            </p>
            <p>
              We believe that strong healthcare systems depend on well-trained
              healthcare professionals.
            </p>
            <p>
              MedTara aims to build a global healthcare learning ecosystem where
              knowledge can be shared, skills can be strengthened, and healthcare
              quality can continuously improve.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
