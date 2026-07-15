import Hero from "./Hero/Hero";
import Stats from "./Stats/Stats";
import Introduction from "./Introduction/Introduction";
import WhoWeServe from "./WhoWeServe/WhoWeServe";
import ModernHospitals from "./ModernHospitals/ModernHospitals";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import OurRegions from "./OurRegions/OurRegions";
import Benefits from "./Benefits/Benefits";
import CTA from "./CTA/CTA";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <Introduction />
      <WhoWeServe />
      <ModernHospitals />
      <WhatWeOffer />
      <OurRegions />
      <Benefits />
      <CTA />
    </div>
  );
}

export default HomePage;
