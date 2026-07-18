import { Link } from "react-router-dom";
import "./CertificationAbout.css";
import Healthcare from "../../../assets/images/accredited-healthcare.webp";

import { FaRegHandPointRight } from "react-icons/fa";


function CertificationAbout() {
    return (
        <section className="CertificationAbout" aria-label="Certification About">
            <div className="container">
                <div className="about-cert-main">
                    <div className="cert-image">
                        <img src={Healthcare} alt="healtca" />
                    </div>
                    <div className="cert-content">
                        <h2>Healthcare Training Certification</h2>
                        <p>Healthcare professionals completing Medtara courses receive digital certifications that demonstrate their commitment to professional development.</p>
                        <p>Certification programs help professionals showcase their knowledge and training achievements.</p>
                        <span>Course Completion</span>
                        <ul>
                            <li><FaRegHandPointRight />Participants must complete learning modules and assessments to qualify for certification.</li>
                            <li><FaRegHandPointRight />Assessments ensure that healthcare professionals understand key concepts covered in training programs.</li>

                        </ul>
                    </div>
                </div>
            </div>
        
        </section>




    );
}

export default CertificationAbout;