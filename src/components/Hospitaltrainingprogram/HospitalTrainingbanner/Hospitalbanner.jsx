import { Link } from "react-router-dom";
import "./Hospitalbanner.css";

function HospitalBanner() {
  return (
    <section className="Hospital-banner" aria-label="HospitalBanner">
    <h1>Hospital Training Programs</h1>
    <ul>
        <li>Home</li>
        <li>»Hospital Training Programs</li>
    </ul>
    </section>
  );
}

export default HospitalBanner;