import "./WhyChooseUs.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedLetters from "../../../components/animations/AnimatedLetters";
import whyChooseImage from "../../../assets/images/whychoose_home.png";

function WhyChooseUs() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.28,
    margin: "0px 0px -10% 0px",
  });

  const ease = [0.22, 1, 0.36, 1];

  const pillars = [
    {
      title: "Regulatory Oversight",
      text: "Monitoring statutory, governance, and compliance obligations with disciplined execution.",
    },
    {
      title: "Partner-Led Advisory",
      text: "Direct counsel for founders, boards, investors, and senior decision-makers.",
    },
  ];

  return (
    <section className="why-choose" ref={sectionRef}>
      <div className="why-bg-shapes" aria-hidden="true">
        <span className="why-shape why-shape-one"></span>
        <span className="why-shape why-shape-two"></span>
      </div>

      <div className="container why-container">
        <motion.div
          className="why-content"
          initial={{ opacity: 0, x: -34, filter: "blur(8px)" }}
          animate={
            isInView
              ? { opacity: 1, x: 0, filter: "blur(0px)" }
              : { opacity: 0, x: -34, filter: "blur(8px)" }
          }
          transition={{
            duration: 0.85,
            ease,
          }}
        >
          <span className="why-label">Strategic Value</span>

          <h2>
            <AnimatedLetters
              text="Institutional-Grade"
              delay={0.05}
              stagger={0.018}
            />
            <br />
            <AnimatedLetters
              text="Compliance Counsel"
              delay={0.3}
              stagger={0.018}
            />
          </h2>

          <motion.p
            className="why-description"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.75, delay: 0.52, ease }}
          >
            Navigate complex regulatory landscapes with structured,
            defensible, and business-focused advisory built for serious growth.
            NEXTROP brings clarity to governance, documentation, compliance,
            and strategic decision-making.
          </motion.p>

          <motion.div
            className="why-pillar-list"
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.75, delay: 0.68, ease }}
          >
            {pillars.map((pillar, index) => (
              <motion.div
                className="why-pillar"
                key={pillar.title}
                initial={{ opacity: 0, x: -14 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -14 }
                }
                transition={{
                  duration: 0.65,
                  delay: 0.82 + index * 0.12,
                  ease,
                }}
              >
                <span className="why-pillar-line"></span>

                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="why-visual"
        initial={{ opacity: 0, x: 34, filter: "blur(8px)" }}
        animate={
          isInView
            ? { opacity: 1, x: 0, filter: "blur(0px)" }
            : { opacity: 0, x: 34, filter: "blur(8px)" }
        }
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease,
        }}
        aria-hidden="true"
      >
        <img src={whyChooseImage} alt="" />
      </motion.div>
    </section>
  );
}

export default WhyChooseUs;