import "./InstitutionalVision.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedLetters from "../../../../components/animations/AnimatedLetters";
import aboutPic from "../../../../assets/images/about_pic.png";

function InstitutionalVision() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.24,
    margin: "0px 0px -10% 0px",
  });

  const ease = [0.22, 1, 0.36, 1];

  const proofPoints = [
    "Governance-first",
    "Documentation-led",
    "Business-aligned",
  ];

  return (
    <section
      className="institutional-vision"
      id="institutional-vision"
      ref={sectionRef}
    >
      <div className="institutional-bg-shapes" aria-hidden="true">
        <span className="institutional-shape institutional-shape-one"></span>
        <span className="institutional-shape institutional-shape-two"></span>
        <span className="institutional-shape institutional-shape-three"></span>
        <span className="institutional-shape institutional-shape-four"></span>
        <span className="institutional-shape institutional-shape-five"></span>
        <span className="institutional-shape institutional-shape-six"></span>
        <span className="institutional-shape institutional-shape-seven"></span>
        <span className="institutional-shape institutional-shape-eight"></span>
      </div>

      <div className="institutional-flow-line" aria-hidden="true"></div>

      <div className="container institutional-container">
        <motion.div
          className="institutional-visual-wrap"
          initial={{
            opacity: 0,
            x: -38,
            scale: 1.035,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  x: -38,
                  scale: 1.035,
                }
          }
          transition={{
            duration: 0.95,
            ease,
          }}
        >
          <div className="institutional-visual-halo" aria-hidden="true"></div>

          <div className="institutional-visual">
            <div className="institutional-corner institutional-corner-one"></div>
            <div className="institutional-corner institutional-corner-two"></div>

            <img
              src={aboutPic}
              alt="NEXTROP advisory, compliance, and business growth visual"
            />

            <div className="institutional-image-overlay"></div>

            <div className="institutional-image-caption">
              <small>ADVISORY FRAMEWORK</small>
              <strong>Structured systems for serious business decisions.</strong>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="institutional-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.16,
                delayChildren: 0.12,
              },
            },
          }}
        >
          <motion.span
            className="institutional-label"
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease },
              },
            }}
          >
            NEXTROP FOUNDATION
          </motion.span>

          <h2 className="institutional-title">
            <AnimatedLetters
              text="Built To Make Compliance"
              delay={0.08}
              stagger={0.018}
            />
            <br />
            <AnimatedLetters
              text="A Business Advantage"
              delay={0.34}
              stagger={0.018}
            />
          </h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.72, ease },
              },
            }}
          >
            NEXTROP was created for businesses that need more than reactive
            compliance. We help organizations build structured advisory systems
            that support clear decisions, defensible records, and long-term
            institutional growth.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.72, ease },
              },
            }}
          >
            Our work connects corporate governance, legal compliance,
            documentation discipline, and transaction support into one practical
            advisory framework.
          </motion.p>

          <motion.div
            className="institutional-proof-statement"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.72, ease },
              },
            }}
          >
            Built for founders, investors, and leadership teams who need
            governance systems that stand up to scrutiny.
          </motion.div>

          <motion.div
            className="institutional-proof-strip"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.22,
                },
              },
            }}
          >
            {proofPoints.map((point) => (
              <motion.span
                key={point}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease },
                  },
                }}
              >
                {point}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="institutional-bottom-flow-line" aria-hidden="true"></div>
    </section>
  );
}

export default InstitutionalVision;