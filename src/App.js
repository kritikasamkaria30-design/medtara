import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Platform from "./pages/Platform";
import CertificationProcess from "./pages/CertificationProcess";
import HealthcareTraining from "./pages/HealthcareTraining";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/certification-process" element={<CertificationProcess />} />
            <Route path="/healthcare-training" element={<HealthcareTraining />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
