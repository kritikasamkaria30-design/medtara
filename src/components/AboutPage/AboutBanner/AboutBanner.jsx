import { Link } from "react-router-dom";
import "./AboutBanner.css";

function AboutBanner() {
  return (
    <section className="about-banner" aria-label="About Us">
      <div className="about-banner__media" aria-hidden="true" />
      <div className="container about-banner__content">
        <nav className="about-banner__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">»</span>
          <span>About Us</span>
        </nav>
        <p className="about-banner__brand">MedTara</p>
        <h1 className="about-banner__title">About Us</h1>
      </div>
    </section>
  );
}

export default AboutBanner;
