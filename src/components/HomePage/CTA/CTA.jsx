import "./CTA.css";

function CTA() {
  return (
    <section className="section cta" id="cta">
      <div className="container cta__panel">
        <div className="cta__copy">
          <h2>Ready to implement MedTara at your hospital?</h2>
          <p>
            Hospitals and healthcare institutions can request a platform demonstration.
            Our team will guide you through available training programs and explore how
            MedTara can support your organisation's learning goals.
          </p>
        </div>
        <div className="cta__actions">
          <a className="btn btn-primary" href="mailto:hello@medtara.co.in">
            Get Started
          </a>
          <a className="btn btn-secondary cta__secondary" href="mailto:hello@medtara.co.in">
            Speak to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
