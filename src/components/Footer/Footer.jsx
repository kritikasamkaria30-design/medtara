import { Link } from "react-router-dom";
import "./Footer.css";

const courseLinks = [
  "Emergency & Safety Courses",
  "Quality & Accreditation Courses",
  "Hospital Administration Courses",
  "TPA and Billing Courses",
  "Nursing Skill Courses",
  "Patient Safety",
  "Infection Control Courses",
];

const resourceLinks = [
  "Healthcare Insights",
  "Infection Control Resources",
  "Patient Safety Articles",
  "Case Studies",
  "Whitepapers",
  "Learning Experience",
];

const solutionLinks = [
  "Healthcare Training",
  "Hospital Training Programs",
  "Aged Care Training Programs",
  "Training For Healthcare Professionals",
  "Hospital Licensing Packages",
  "Implementation Process",
  "ROI For Hospitals",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__mark" aria-hidden="true">
              M
            </span>
            <span>
              Med<span>Tara</span>
            </span>
          </Link>
          <p>
            Empowering hospitals and healthcare professionals with smart, flexible
            learning solutions to enhance skills, improve care, and drive innovation.
          </p>
        </div>

        <div className="footer__col">
          <h3>Courses</h3>
          <ul>
            {courseLinks.map((item) => (
              <li key={item}>
                <Link to="/#what-we-offer">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Resources</h3>
          <ul>
            {resourceLinks.map((item) => (
              <li key={item}>
                <Link to="/#introduction">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Solutions</h3>
          <ul>
            {solutionLinks.map((item) => (
              <li key={item}>
                <Link to="/#who-we-serve">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© MedTara 2026. All rights reserved.</p>
          <div className="footer__regions">
            <span>India</span>
            <span>Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
