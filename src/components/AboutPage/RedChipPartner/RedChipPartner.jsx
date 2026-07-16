import "./RedChipPartner.css";

const expertise = [
  "Custom eLearning content development",
  "Learning Management System (LMS) implementation",
  "Healthcare and compliance training",
  "Instructional design and curriculum structuring",
  "Scalable training solutions for organizations",
];

function RedChipPartner() {
  return (
    <section className="section red-chip" id="partner">
      <div className="container red-chip__layout">
        <div className="red-chip__copy">
          <p className="section-label">Technology Partner</p>
          <h2 className="section-title">
            Red Chip Solutions: Technology and Learning Partner
          </h2>
          <p className="section-lead">
            Red Chip Solutions is the technology and learning partner behind
            MedTara, bringing over 18 years of experience in designing and
            delivering digital training solutions across healthcare and other
            industries.
          </p>
          <p className="red-chip__text">
            The company has worked with hospitals, medical colleges,
            pharmaceutical organizations, and training providers to develop
            structured eLearning programs, implement learning platforms, and
            support large-scale workforce training initiatives.
          </p>
        </div>

        <div className="red-chip__expertise">
          <h3>Its expertise includes:</h3>
          <ul>
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="red-chip__note">
            Red Chip Solutions focuses on creating practical, measurable learning
            systems that help organizations standardize training, improve
            performance, and meet regulatory and accreditation requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RedChipPartner;
