import { Link } from "react-router-dom";
import "./partner.css";

function partner() {
    return (
        <section className="partner" aria-label="Our-partner">
            <div className="container">
                <h1>Our Trusted Partners</h1>
                <div className="main-partner">
                    <div className="partner-container">
                        <h3>Collaborations</h3>
                        <p>Medtara collaborates with hospitals, healthcare institutions, and professional organizations to develop relevant training programs.</p>
                    </div>

                    <div className="partner-container">
                        <h3>Real-World Learning</h3>
                        <p>Partnerships allow us to incorporate real healthcare experiences into course development.</p>
                    </div>

                    <div className="partner-container">
                        <h3>Industry Insights</h3>
                        <p>Healthcare professionals working in hospitals provide valuable insights that help shape practical learning modules.</p>
                    </div>


                    <div className="partner-container">
                        <h3>Growing Network</h3>
                        <p>Through partnerships with healthcare organizations, Medtara continues to expand its training programs to support healthcare professionals across regions.</p>
                    </div>


                </div>
            </div>


        </section>
    );
}

export default partner;
