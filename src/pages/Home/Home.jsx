import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../sections/home/Hero/Hero";
import TrustMetrics from "../../sections/home/TrustMetrics/TrustMetrics";
import PracticeAreas from "../../sections/home/PracticeAreas/PracticeAreas";
import WhyChooseUs from "../../sections/home/WhyChooseUs/WhyChooseUs";
import KnowledgePreview from "../../sections/home/KnowledgePreview/KnowledgePreview";
import FinalCTA from "../../sections/home/FounderCloser/FounderCloser";
import Footer from "../../components/layout/Footer/Footer";
import FloatingWhatsapp from "../../components/FloatingWhatsapp/FloatingWhatsapp";

function Home() {
  return (
    <div className="home-page">
      <div className="page-bg-polygons">
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

      <main className="home-main">
        <Hero />
        <TrustMetrics />
        <PracticeAreas />
        <WhyChooseUs />
        <KnowledgePreview />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default Home;