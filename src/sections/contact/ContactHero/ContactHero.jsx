import "./ContactHero.css";
import { motion } from "framer-motion";
import AnimatedLetters from "../../../components/animations/AnimatedLetters";
import heroBg from "../../../assets/images/hero_about.png";
import contactImage from "../../../assets/images/contacts.png";

function ContactHero() {
  const ease = [0.22, 1, 0.36, 1];

  const scrollToForm = () => {
    const target = document.getElementById("contact-form");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="contact-hero">
      <div className="contact-hero-bg" aria-hidden="true">
        <img src={heroBg} alt="" />
      </div>

      <motion.div
        className="contact-hero-right-image"
        aria-hidden="true"
        initial={{ opacity: 0, x: 42 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, delay: 0.2, ease }}
      >
        <img src={contactImage} alt="" />
      </motion.div>

      <div className="contact-hero-abstract" aria-hidden="true">
        <span className="contact-abstract-shape contact-abstract-shape-one"></span>
        <span className="contact-abstract-shape contact-abstract-shape-two"></span>
        <span className="contact-abstract-shape contact-abstract-shape-three"></span>
        <span className="contact-abstract-line contact-abstract-line-one"></span>
      </div>

      <div className="container contact-hero-container">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          {/* <motion.span
            className="contact-hero-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            INSTITUTIONAL ACCESS
          </motion.span> */}

          <h1 className="contact-hero-title">
            <AnimatedLetters
              text="Institutional Access"
              delay={0.08}
              stagger={0.02}
            />
          </h1>

          <motion.p
            className="contact-hero-text"
            initial={{ opacity: 0, y: 18, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.48, ease }}
          >
            A structured path to strategic engagement. We evaluate the nature of
            your matter, the required advisory depth, and the relevant practice
            area before routing your conversation to the appropriate partner.
          </motion.p>

          <motion.div
            className="contact-hero-action-block"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.66, ease }}
          >
            <button
              type="button"
              className="contact-hero-action"
              onClick={scrollToForm}
            >
              <span>Start Enquiry</span>
              <span className="contact-hero-action-arrow">→</span>
            </button>

            <div className="contact-hero-confidential">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.25 10.5V8.15C7.25 5.52 9.25 3.75 12 3.75s4.75 1.77 4.75 4.4v2.35" />
                <path d="M6.25 10.5h11.5c.83 0 1.5.67 1.5 1.5v6.25c0 .83-.67 1.5-1.5 1.5H6.25c-.83 0-1.5-.67-1.5-1.5V12c0-.83.67-1.5 1.5-1.5Z" />
                <path d="M12 14.35v2.15" />
              </svg>

              <span>Confidential intake. Partner-level routing.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="contact-hero-flow-line" aria-hidden="true"></div>
    </section>
  );
}

export default ContactHero;