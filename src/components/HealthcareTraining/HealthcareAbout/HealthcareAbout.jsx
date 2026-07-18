import { Link } from "react-router-dom";
import "./HealthcareAbout.css";
import Healthcare from "../../../assets/images/left img.webp";
import Healthcare from "../../../assets/images/right img.webp";



function HealthcareAbout(){
return(
    <section className="HealthcareAbout" aria-label="Healthcare About">
        <div className="container">
            <div className="about-health-main">
                <h2>Healthcare Training Solutions for Hospitals and Healthcare Organizations</h2>
                <div className="left-image">
                    <img src={Healthcare} alt="Health"/>
                </div>
                <div className="right-image">
                    <img src={Healthcare} alt="Health"/>
                </div>
                
            </div>
        </div>
    </section>
)
}

