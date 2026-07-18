
import { Link } from "react-router-dom";
import "./CertificationBenefits.css";

import { FaRegHandPointRight } from "react-icons/fa";


function Benefits() {
    return (
        <section className="CertificationBenefits" aria-label="Certification About">
            <div className="container">
                <div className=" c-container">

                    <div className="certifi-content">
                        <div className="tanvi">
                            <h2>Benefits of Certification</h2>
                            <p>Healthcare professionals can continue their learning journey by accessing available courses and training modules.</p>

                        </div>
                        <ul>
                            <li><FaRegHandPointRight />Certification helps healthcare professionals demonstrate expertise and commitment to continuous learning.</li>
                            <li><FaRegHandPointRight />Hospitals can also maintain records of staff certifications to support accreditation and training requirements.</li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>




    );
}

export default Benefits;
