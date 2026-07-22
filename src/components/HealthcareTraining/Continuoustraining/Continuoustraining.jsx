import { Link } from "react-router-dom";
import "./Continuoustraining.css";
import trainingImg from "../../../assets/images/Aged-carepng.webp";


import { FaCircle } from "react-icons/fa6";

function Continuoustraining() {
    return (
        <section className="Continuoustraining" aria-label="Continuoustraining">
            <div className="container">
                <div className="continuous-image">
                    <img src={trainingImg} alt="#hhh" />
                </div>
                <div className="training-content">
                    <h2>The Importance of Continuous Healthcare Training</h2>
                    <p>Healthcare is an industry where knowledge evolves continuously. New treatment protocols, safety standards, and operational guidelines are regularly introduced.</p>
                    <p>Without consistent training systems, healthcare professionals may struggle to stay updated with best practices.</p>
                    <h3>Continuous training helps healthcare institutions:</h3>
                    <ul>
                        <li>< FaCircle />Improve patient safety</li>
                        <li>< FaCircle />Reduce operational risks</li>
                        <li>< FaCircle />Strengthen communication across teams</li>
                        <li>< FaCircle />Maintain compliance with healthcare standards</li>
                    </ul>
                    <p>Medtara enables healthcare institutions to implement structured training programs that ensure staff remain informed and confident in their roles.</p>
                </div>
            </div>
        </section>
    );
}

export default Continuoustraining;