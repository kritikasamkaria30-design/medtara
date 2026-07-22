
import HealthcareBanner from "../components/HealthcareTraining/HealthcareBanner/HealthcareBanner";
import HealthcareAbout from "../components/HealthcareTraining/HealthcareBanner/HealthcareAbout/HealthcareAbout";
import Continuoustraining from "../components/HealthcareTraining/Continuoustraining/Continuoustraining";
import DigitalLearning from "../components/HealthcareTraining/DigitalLearning/DigitalLearning";
import HospitalBanner from "../components/Hospitaltrainingprogram/HospitalTrainingbanner/Hospitalbanner";
function HealthcareTraining() {
  return (
    <div className="HealthcareTraining-page">
      <HealthcareBanner />
      <HealthcareAbout />
      <Continuoustraining />
      <DigitalLearning/>
      <HospitalBanner/>
      
   
    </div>
  );
}

export default HealthcareTraining;
