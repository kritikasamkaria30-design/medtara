import { Link } from "react-router-dom";
import "./platformabout.css";
import Imgplatfrom from "../../../assets/images/imgplatform.webp";


import { FaRegHandPointRight } from "react-icons/fa";


function PlatformAbout() {
    return (
        <section className="Platform-About" aria-label="Platform">
            <div className="container">
            <div className="Platform-container">
                <div class="left">
                    <img src={Imgplatfrom} alt="" />
                    <div class="right">
                        <h3>Medtara Healthcare Learning Platform Features</h3>
                        <p>Medtara provides healthcare organizations with a comprehensive digital learning platform designed specifically for healthcare training.</p>
                           <p> The platform enables hospitals and healthcare professionals to access structured learning programs while maintaining operational efficiency.</p>
<h2>Key Features</h2>
<ul>
    <li><FaRegHandPointRight />Centralized learning management system</li>
    <li><FaRegHandPointRight />Interactive training modules</li>
    <li><FaRegHandPointRight />Certification tracking</li>
    <li><FaRegHandPointRight />Department-based training programs</li>
    <li><FaRegHandPointRight />Accessible learning modules for healthcare professionals</li>
</ul>
<h4>These features help healthcare organizations manage training programs efficiently.</h4>

                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default PlatformAbout;









