import { Link } from "react-router-dom";
import image01 from "../../../assets/images/01.webp";
import image02 from "../../../assets/images/02.webp";
import image03 from "../../../assets/images/03.webp";
import image04 from "../../../assets/images/04.webp";

import "./Member.css";
function Member() {
    return (
        <section className="Member" aria-label="our-Member">
            <div className="container">
                <h2>OUR TEAM</h2>
                <p>
                    The Medtara team consists of healthcare professionals, educators, and technology experts working together to build a comprehensive healthcare learning platform.
                </p>
                <div className="main-team member">
                    <div className="team-container">
                        <img src={image01} alt="ggg" />
                        <h3>Our Expertise</h3>
                        <p>Our team includes experienced professionals from healthcare operations, medical education, and digital learning development.</p>
                    </div>
                   
                   <div className="team-container">
                    <img src={image02} alt="ggg" />
                        <h3>Medical Guidance</h3>
                        <p>Medical advisors guide the development of training modules to ensure that course content reflects real healthcare practices.</p>
                    </div>

                    <div className="team-container">
                        <img src={image03} alt="ggg" />
                        <h3>Learing Design</h3>
                        <p>Learning designers structure courses to create engaging and effective learning experiences for healthcare professionals.</p>
                    </div>

                    <div className="team-container">
                        <img src={image04} alt="ggg" />
                        <h3>Technology Support</h3>
                        <p>Technology specialists ensure that the Medtara platform delivers a reliable and user-friendly learning environment. </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Member;
