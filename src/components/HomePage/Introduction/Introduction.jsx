import "./Introduction.css";

function Introduction() {
  return (
    <section className="section introduction" id="introduction">
      <div className="container introduction__layout">
        <div className="introduction__copy">
          <p className="section-label">Introduction</p>
          <h2 className="section-title">Built for continuous healthcare learning</h2>
          <p className="section-lead">
            Healthcare organizations face a growing challenge: keeping professionals
            continuously trained while protecting the quality and safety of patient
            care.
          </p>
        </div>

        <div className="introduction__body">
          <p>
            MedTara was created to support hospitals, healthcare professionals, and
            care providers. It is a digital healthcare learning platform designed to
            deliver structured training that strengthens skills, improves patient
            safety, and supports quality standards.
          </p>
          <p>
            Hospitals need reliable training systems that reach staff across
            departments. MedTara enables organizations to deliver programs that are
            consistent, measurable, and accessible at all times.
          </p>
          <p>
            Through interactive modules, professionals learn efficiently while
            continuing daily responsibilities — practical, relevant, and aligned with
            real healthcare environments.
          </p>
          <p className="introduction__goal">
            Our goal is simple: empower healthcare organizations with the knowledge
            and tools required to deliver better patient care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
