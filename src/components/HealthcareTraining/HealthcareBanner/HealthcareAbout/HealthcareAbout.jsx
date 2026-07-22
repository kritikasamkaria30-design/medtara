import { Link } from "react-router-dom";
import "./HealthcareAbout.css";
import leftImg from "../../../../assets/images/left-img.webp"
import rightImg from "../../../../assets/images/right-img.webp"

function HealthcareAbout() {
  return (
    <section className="HealthcareAbout" aria-label="HealthcareAbout">
        <h2>Healthcare Training Solutions for Hospitals and Healthcare Organizations</h2>
  <div className="image-container">
      <div className="image-wrapper">
        <img src={leftImg} alt="###"></img>
      </div>
      <div className="image-wrapper">
        <img src={rightImg} alt="###"></img>
      </div>
        </div>
      <div className="content-text">
        <p>Healthcare organizations operate in complex environments where patient safety, clinical quality, and operational efficiency must be maintained at all times. Hospitals must ensure that healthcare professionals across departments remain trained, informed, and capable of delivering high-quality care.</p>
        <p>Medtara provides comprehensive healthcare training solutions designed specifically for hospitals, healthcare institutions, and care providers. The platform enables organizations to implement structured learning programs that support staff development while maintaining operational continuity.</p>
        <p>Traditional healthcare training methods often rely on classroom sessions or occasional workshops. While these approaches can be effective, they are difficult to scale across large organizations and often disrupt daily hospital operations.</p>
        </div>


  
    </section>
  );
}

export default HealthcareAbout;