import AboutBanner from "../components/AboutPage/AboutBanner/AboutBanner";
import AboutIntro from "../components/AboutPage/AboutIntro/AboutIntro";
import MissionVision from "../components/AboutPage/MissionVision/MissionVision";
import RedChipPartner from "../components/AboutPage/RedChipPartner/RedChipPartner";
import MedicalExperts from "../components/AboutPage/MedicalExperts/MedicalExperts";
import CTA from "../components/HomePage/CTA/CTA";

function About() {
  return (
    <div className="about-page">
      <AboutBanner />
      <AboutIntro />
      <MissionVision />
      <RedChipPartner />
      <MedicalExperts />
      <CTA />
    </div>
  );
}

export default About;
