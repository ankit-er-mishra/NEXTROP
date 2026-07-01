import "./About.css";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import FloatingWhatsapp from "../../components/FloatingWhatsapp/FloatingWhatsapp";

import AboutHero from "../../sections/home/about/AboutHero/AboutHero";
import InstitutionalVision from "../../sections/home/about/InstitutionalVision/InstitutionalVision";
import TrustArchitecture from "../../sections/home/about/TrustArchitecture/TrustArchitecture";


function About() {
  return (
    <div className="about-page">
      <div className="page-bg-polygons" aria-hidden="true">
        <span className="poly poly-one"></span>
        <span className="poly poly-two"></span>
        <span className="poly poly-three"></span>
        <span className="poly poly-four"></span>
        <span className="poly poly-five"></span>
        <span className="poly poly-six"></span>
        <span className="poly poly-seven"></span>
        <span className="poly poly-eight"></span>
        <span className="poly poly-nine"></span>
        <span className="poly poly-ten"></span>
        <span className="poly poly-eleven"></span>
        <span className="poly poly-twelve"></span>

        <span className="poly hero-poly-a"></span>
        <span className="poly hero-poly-b"></span>
        <span className="poly hero-poly-c"></span>
        <span className="poly hero-poly-d"></span>
        <span className="poly hero-poly-e"></span>
        <span className="poly hero-poly-f"></span>
        <span className="poly hero-poly-g"></span>
        <span className="poly hero-poly-h"></span>
        <span className="poly hero-poly-i"></span>
      </div>

      <Navbar />

      <main className="about-main">
        <AboutHero />
        <InstitutionalVision />
        <TrustArchitecture />
      </main>

      <Footer />
      <FloatingWhatsapp />
      
    </div>
  );
}

export default About;