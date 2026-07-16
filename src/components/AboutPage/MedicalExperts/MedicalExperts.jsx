import "./MedicalExperts.css";

const experts = [
  {
    title: "Quality & Accreditation",
    text: "Provides guidance on aligning training programs with healthcare quality standards and accreditation requirements. Contributes to reviewing practical relevance and professional learning outcomes.",
  },
  {
    title: "Clinical & Patient Safety",
    text: "Supports the development of training content focused on patient safety, infection control, and clinical best practices. Contributes to ensuring real-world applicability of learning programs.",
  },
  {
    title: "Hospital Operations",
    text: "Advises on operational workflows and staff training requirements to improve efficiency and service delivery. Contributes to strengthening role-based learning programs.",
  },
  {
    title: "Nursing & Staff Development",
    text: "Supports structured learning initiatives for nursing and healthcare staff competency development. Contributes to maintaining consistent training standards across teams.",
  },
  {
    title: "Infection Control & Risk Management",
    text: "Provides insights into infection prevention and safety practices within healthcare environments. Contributes to ensuring compliance with safety and quality protocols.",
  },
  {
    title: "Compliance & Documentation",
    text: "Advises on documentation, audit readiness, and compliance-related training requirements. Contributes to aligning programs with accreditation expectations.",
  },
];

function MedicalExperts() {
  return (
    <section className="section medical-experts" id="medical-experts">
      <div className="container">
        <div className="medical-experts__header">
          <p className="section-label">Our Medical Experts</p>
          <h2 className="section-title">
            Guided by clinical insight and training standards
          </h2>
          <p className="section-lead">
            MedTara is guided by a board of medical experts who help review
            learning priorities, clinical relevance, and healthcare training
            standards.
          </p>
        </div>

        <div className="medical-experts__grid">
          {experts.map((expert, index) => (
            <article key={expert.title} className="expert-item">
              <span className="expert-item__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{expert.title}</h3>
              <p>{expert.text}</p>
            </article>
          ))}
        </div>

        <div className="medical-experts__apply">
          <div>
            <h3>Apply as a Medical Consultant</h3>
            <p>
              Qualified doctors can apply with their CV. Onboarding is subject to
              company review, credential verification, and approval.
            </p>
          </div>
          <a className="btn btn-outline" href="mailto:hello@medtara.co.in">
            Apply with CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default MedicalExperts;
