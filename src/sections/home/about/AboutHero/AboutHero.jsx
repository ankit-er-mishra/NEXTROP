import "./AboutHero.css";
import { motion } from "framer-motion";
import AnimatedLetters from "../../../../components/animations/AnimatedLetters";
import heroAboutBg from "../../../../assets/images/hero_about.png";

function AboutHero() {
  const ease = [0.22, 1, 0.36, 1];

  const proofPoints = [
    {
      number: "01",
      title: "Governance Discipline",
      text: "Board-ready documentation and structured decision records.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3v18" />
          <path d="M5 8h14" />
          <path d="M7 8l-3 7h6L7 8z" />
          <path d="M17 8l-3 7h6l-3-7z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Regulatory Clarity",
      text: "Compliance systems designed for defensibility and continuity.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3L5 6v6c0 4.6 2.8 7.4 7 9 4.2-1.6 7-4.4 7-9V6l-7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Transaction Readiness",
      text: "Due diligence, valuation, and advisory support for complex decisions.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <path d="M4 7h6l2 2h8v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Institutional Confidence",
      text: "Advisory infrastructure for founders, boards, and leadership teams.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3v18" />
          <path d="M5 10l7-7 7 7" />
          <path d="M7 21h10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="about-hero">
      <div className="about-hero-bg" aria-hidden="true">
        <img src={heroAboutBg} alt="" />
      </div>

      <div className="about-hero-shapes" aria-hidden="true">
        <span className="about-shape about-shape-one"></span>
        <span className="about-shape about-shape-two"></span>
        <span className="about-shape about-shape-three"></span>
        <span className="about-shape about-shape-four"></span>
        <span className="about-shape about-shape-five"></span>
        <span className="about-shape about-shape-six"></span>
        <span className="about-shape about-shape-seven"></span>
        <span className="about-shape about-shape-eight"></span>
      </div>

      <motion.div
        className="about-hero-visual"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.15, delay: 0.32, ease }}
      >
        <div className="about-visual-grid"></div>
        <div className="about-visual-ring about-visual-ring-one"></div>
        <div className="about-visual-ring about-visual-ring-two"></div>
        <div className="about-visual-ring about-visual-ring-three"></div>
        <div className="about-visual-core"></div>
      </motion.div>

      <div className="container about-hero-container">
        <div className="about-hero-main">
          <div className="about-hero-left">
            <motion.span
              className="about-hero-label"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
            >
              THE NEXTROP MANDATE
            </motion.span>

            <h1 className="about-hero-title">
              <AnimatedLetters
                text="Governance Is"
                delay={0.08}
                stagger={0.018}
              />
              <br />
              <AnimatedLetters
                text="Not An Afterthought"
                delay={0.34}
                stagger={0.018}
              />
            </h1>

            <motion.p
              className="about-hero-text"
              initial={{ opacity: 0, y: 18, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.58, ease }}
            >
              NEXTROP helps modern businesses build the legal, compliance, and
              governance architecture required to make confident decisions,
              maintain defensible records, and grow with institutional
              discipline.
            </motion.p>
          </div>

          <motion.div
            className="about-hero-proof"
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.82, delay: 0.72, ease }}
          >
            {proofPoints.map((point, index) => (
              <motion.div
                className="about-proof-item"
                key={point.number}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.58,
                  delay: 0.86 + index * 0.08,
                  ease,
                }}
              >
                <div className="about-proof-icon" aria-hidden="true">
                  {point.icon}
                </div>

                {/* <small>{point.number}</small> */}
                <strong>{point.title}</strong>
                <p>{point.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-hero-system"
          initial={{ opacity: 0, y: 26, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.98, ease }}
        >
          <div className="about-system-left">
            <span>Institutional Standard</span>
            <p>
              We treat compliance as operating infrastructure — not as a
              checkbox after growth has already happened.
            </p>
          </div>

          <div className="about-system-points">
            <div className="about-system-point">
              <small>01</small>
              <strong>Structured Records</strong>
            </div>

            <div className="about-system-point">
              <small>02</small>
              <strong>Regulatory Clarity</strong>
            </div>

            <div className="about-system-point">
              <small>03</small>
              <strong>Board-Level Confidence</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="about-hero-flow-line" aria-hidden="true"></div>
    </section>
  );
}

export default AboutHero;