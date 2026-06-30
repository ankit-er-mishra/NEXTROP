import "./PracticeAreas.css";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import FloatingWhatsapp from "../../components/FloatingWhatsapp/FloatingWhatsapp";

import PracticeAreasGrid from "../../sections/practiceAreas/PracticeAreasGrid/PracticeAreasGrid";

function PracticeAreas() {
  return (
    <div className="practice-page">
      <Navbar />

      <main className="practice-main">
        <PracticeAreasGrid />
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default PracticeAreas;