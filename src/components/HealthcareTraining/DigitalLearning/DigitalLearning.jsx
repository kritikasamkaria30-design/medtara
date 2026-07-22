import { Link } from "react-router-dom";
import "./DigitalLearning.css";


import { FaBookOpen } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";

function DigitalLearning(){
    return(
        <section className="DigitalLearning" aria-label="DigitalLearning">
            <div className="container">
                <div className="learning-text">
                    <h2>Digital Learning for Healthcare Professionals</h2>
                    <p>Digital learning platforms offer several advantages compared to traditional training methods.</p>
        </div>
         <div className="main-profession">
                    <div className="digital-container">
                        <span><FaBookOpen className="icon" />Flexible Access</span>
                        <p>Healthcare professionals can access training programs at their convenience while maintaining their daily work responsibilities.</p>
                    </div>


                    <div className="digital-container">
                        <span> <FaChartColumn className="icon"/>Progress Tracking</span>
                        <p>Hospitals can also monitor training progress and ensure that staff complete required learning modules.</p>
                    </div>


                    <div className="digital-container">
                        <span> <FaUsersGear  className="icon"/>Centralized Platform</span>
                        <p>Hospitals can also monitor training progress and ensure that staff complete required learning modules.</p>
                    </div>

                    </div>


            

            </div>
            </section>
    );
}

export default DigitalLearning;