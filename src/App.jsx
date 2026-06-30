import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PracticeAreas from "./pages/PracticeAreas/PracticeAreas";
import PracticeAreaDetail from "./pages/PracticeAreaDetail/PracticeAreaDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import KnowledgeHub from "./pages/KnowledgeHub/KnowledgeHub";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <ScrollToTop />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/services" element={<PracticeAreas />} />
       <Route path="/services/:serviceId" element={<PracticeAreaDetail />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;