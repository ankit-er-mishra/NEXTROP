import "./FounderCloser.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedLetters from "../../../components/animations/AnimatedLetters";
import whatsappLogo from "../../../assets/images/whatsapp.png";

function FounderCloser() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.28,
    margin: "0px 0px -10% 0px",
  });

  const ease = [0.22, 1, 0.36, 1];

  const whatsappNumber = "918709815050";

  const whatsappMessage =
    "Hello NEXTROP, I would like to discuss compliance and advisory support for my business.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="final-cta" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="final-cta-card"
          initial={{ opacity: 0, y: 42, scale: 0.985 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 42, scale: 0.985 }
          }
          transition={{
            duration: 0.95,
            ease,
          }}
        >
          <motion.span
            className="final-cta-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
          >
            LET’S WORK TOGETHER
          </motion.span>

          <h2 className="final-cta-title">
            <AnimatedLetters
              text="Build Your Compliance"
              delay={0.12}
              stagger={0.018}
            />
            <br />
            <AnimatedLetters
              text="Architecture With NEXTROP"
              delay={0.38}
              stagger={0.018}
            />
          </h2>

          <motion.p
            className="final-cta-text"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.75, delay: 0.45, ease }}
          >
            Compliance should not slow down growth; it should strengthen the
            foundation behind it. Connect with our team to discuss how our
            advisory framework can support your business requirements.
          </motion.p>

          <motion.div
            className="final-cta-focus"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, delay: 0.58, ease }}
          >
            <span>Compliance</span>
            <span>Governance</span>
            <span>Transactions</span>
          </motion.div>

          <motion.div
            className="final-cta-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.75, delay: 0.7, ease }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="final-whatsapp-btn"
            >
              <span className="final-whatsapp-icon">
                <img src={whatsappLogo} alt="WhatsApp" />
              </span>

              <span>Connect with NEXTROP</span>
            </a>

            <p className="final-response-note">
              Secure a private consultation via WhatsApp.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FounderCloser;