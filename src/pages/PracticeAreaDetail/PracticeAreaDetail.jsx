import "./PracticeAreaDetail.css";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import FloatingWhatsapp from "../../components/FloatingWhatsapp/FloatingWhatsapp";
import { getPracticeAreaById } from "../../data/practiceAreasData";
import heroAboutBg from "../../assets/images/hero_about.png";

function PracticeAreaDetail() {
  const { serviceId } = useParams();
  const service = getPracticeAreaById(serviceId);

  const ease = [0.22, 1, 0.36, 1];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-detail-page">
      <Navbar />

      <div className="service-detail-page-shapes" aria-hidden="true">
      <span className="service-page-shape service-page-shape-one"></span>
      <span className="service-page-shape service-page-shape-two"></span>
      <span className="service-page-shape service-page-shape-three"></span>
      <span className="service-page-shape service-page-shape-four"></span>
      <span className="service-page-shape service-page-shape-five"></span>
      <span className="service-page-shape service-page-shape-six"></span>
      <span className="service-page-shape service-page-shape-seven"></span>
    </div>

      <main className="service-detail-main">
        <section className="service-detail-hero">
          <div className="service-detail-bg" aria-hidden="true">
            <img src={heroAboutBg} alt="" />
          </div>

          <div className="service-detail-shapes" aria-hidden="true">
            <span className="service-detail-shape service-detail-shape-one"></span>
            <span className="service-detail-shape service-detail-shape-two"></span>
            <span className="service-detail-shape service-detail-shape-three"></span>
          </div>

          <div className="container service-detail-container">
            {/* <motion.div
              className="service-detail-breadcrumb"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              <Link to="/services">Practice Areas</Link>
              <span>/</span>
              <span>{service.tag}</span>
            </motion.div> */}

            <motion.span
              className="service-detail-label"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
            >
              {service.category}
            </motion.span>

            <motion.h1
              className="service-detail-title"
              initial={{ opacity: 0, y: 22, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.16, ease }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              className="service-detail-summary"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.28, ease }}
            >
              {service.summary}
            </motion.p>
          </div>

          <div className="service-detail-flow-line" aria-hidden="true"></div>
        </section>

        <section className="service-detail-content-section">
          <div className="container service-detail-content-grid">
            <motion.div
              className="service-detail-content"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease }}
            >
              <span className="service-detail-section-label">
                ADVISORY OVERVIEW
              </span>

              <h2>Built for clarity, discipline, and execution.</h2>

              <p>{service.overview}</p>
            </motion.div>

            <motion.aside
              className="service-detail-side-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
            >
              <span>Service Category</span>
              <strong>{service.category}</strong>
              <p>
                Structured advisory support designed for modern businesses,
                leadership teams, founders, and investors.
              </p>
            </motion.aside>
          </div>
        </section>

        <section className="service-detail-lists-section">
          <div className="container service-detail-lists-grid">
            <motion.div
              className="service-detail-list-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease }}
            >
              <span className="service-detail-section-label">FOCUS AREAS</span>

              <h3>What NEXTROP supports</h3>

              <ul>
                {service.focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="service-detail-list-card service-detail-dark-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
            >
              <span className="service-detail-section-label">OUTCOMES</span>

              <h3>What clients gain</h3>

              <ul>
                {service.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="service-detail-cta">
          <div className="container service-detail-cta-card">
            <div>
              <span>READY TO DISCUSS THIS AREA?</span>
              <h2>Build the right advisory structure with NEXTROP.</h2>
            </div>

            <a href="/contact">Schedule Consultation</a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default PracticeAreaDetail;