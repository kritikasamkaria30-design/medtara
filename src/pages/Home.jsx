import Hero from "../components/HomePage/Hero/Hero";
import Stats from "../components/HomePage/Stats/Stats";
import Introduction from "../components/HomePage/Introduction/Introduction";
import WhoWeServe from "../components/HomePage/WhoWeServe/WhoWeServe";
import ModernHospitals from "../components/HomePage/ModernHospitals/ModernHospitals";
import WhatWeOffer from "../components/HomePage/WhatWeOffer/WhatWeOffer";
import OurRegions from "../components/HomePage/OurRegions/OurRegions";
import Benefits from "../components/HomePage/Benefits/Benefits";
import CTA from "../components/HomePage/CTA/CTA";

function Home() {
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

export default Home;
