import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__media" aria-hidden="true" />
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__brand">MedTara</p>
        <h1 className="hero__title">
          Transforming Healthcare Training Through Digital Learning
        </h1>
        <p className="hero__text">
          MedTara is a digital healthcare learning platform designed to help
          hospitals and healthcare professionals strengthen quality, compliance,
          and operational excellence through structured training programs.
        </p>
        <div className="hero__actions">
          <a className="btn btn-primary" href="#what-we-offer">
            Explore Courses
          </a>
          <a className="btn btn-secondary" href="#cta">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
