import "./AboutIntro.css";

const points = [
  "MedTara provides a modern approach to healthcare training by delivering structured learning through digital platforms.",
  "The MedTara platform enables healthcare professionals to access training programs at any time while maintaining their daily work responsibilities.",
  "Training modules are designed to provide practical healthcare knowledge that can be applied directly in clinical environments.",
  "Healthcare professionals participating in MedTara programs benefit from structured learning pathways that help them strengthen their knowledge across key healthcare domains.",
  "Hospitals and healthcare institutions can implement MedTara as part of their staff development programs to ensure consistent training across departments.",
  "MedTara also supports healthcare organizations in maintaining records of staff training, which is essential for healthcare quality audits and accreditation requirements.",
  "By combining healthcare expertise with digital learning technology, MedTara provides scalable training solutions that can reach healthcare professionals across regions.",
  "Our platform focuses on improving healthcare quality through knowledge, collaboration, and continuous learning.",
];

function AboutIntro() {
  return (
    <section className="section about-intro" id="about-medtara">
      <div className="container about-intro__layout">
        <div className="about-intro__copy">
          <p className="section-label">About MedTara</p>
          <h2 className="section-title">
            Empowering Healthcare Through Continuous Learning
          </h2>
          <p className="section-lead">
            MedTara was established to address one of the most critical needs in
            healthcare systems today: continuous professional learning for
            healthcare professionals.
          </p>
          <p className="about-intro__text">
            Healthcare institutions rely on skilled professionals who must stay
            updated with evolving healthcare practices, safety protocols, and
            operational standards. Traditional training methods often rely on
            physical classroom sessions that are difficult to schedule and
            expensive to manage.
          </p>
        </div>

        <ul className="about-intro__list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutIntro;
