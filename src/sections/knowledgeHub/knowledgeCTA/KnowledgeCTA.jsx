import "./KnowledgeCTA.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function KnowledgeCTA() {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="knowledge-cta-section">
      <div className="container">
        <motion.div
          className="knowledge-cta-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.72, ease }}
        >
          <div>
            <span>Need Advisory Clarity?</span>
            <h2>Convert knowledge into structured business action.</h2>
            <p>
              Speak with NEXTROP to understand how legal, compliance,
              governance, and transaction advisory can support your business
              decisions.
            </p>
          </div>

          <Link to="/contact" className="knowledge-cta-button">
            Schedule Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default KnowledgeCTA;