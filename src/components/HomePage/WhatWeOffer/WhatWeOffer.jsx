import "./WhatWeOffer.css";

const offerings = [
  {
    title: "Infection Prevention and Control",
    text: "Keep staff updated with healthcare practices, safety protocols, and operational procedures that protect patients and teams.",
  },
  {
    title: "Patient Safety and Risk Management",
    text: "Build understanding of safety protocols and risk practices that prevent errors and improve healthcare outcomes.",
  },
  {
    title: "TPA and Medical Billing",
    text: "Strengthen billing teams on insurance documentation, claim submissions, and reimbursement procedures.",
  },
  {
    title: "Hospital Administration",
    text: "Help administrative staff develop the knowledge required to manage hospital processes effectively.",
  },
  {
    title: "Quality and Accreditation Standards",
    text: "Demonstrate structured processes for staff training and quality improvement aligned with accreditation frameworks.",
  },
  {
    title: "Healthcare Communication",
    text: "Improve clear information exchange between patients and providers for safety, trust, and better care quality.",
  },
];

function WhatWeOffer() {
  return (
    <section className="section what-we-offer" id="what-we-offer">
      <div className="container">
        <div className="what-we-offer__header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Courses across essential healthcare domains</h2>
          <p className="section-lead">
            MedTara offers structured learning for the areas hospitals and
            professionals depend on every day.
          </p>
        </div>

        <div className="what-we-offer__grid">
          {offerings.map((item, index) => (
            <article key={item.title} className="offer-item">
              <span className="offer-item__index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
