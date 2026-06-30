import "./TrustArchitecture.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedLetters from "../../../../components/animations/AnimatedLetters";

function TrustArchitecture() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
    margin: "0px 0px -10% 0px",
  });

  const ease = [0.22, 1, 0.36, 1];

  const processItems = [
    {
      number: "01",
      title: "Audit & Discovery",
      description:
        "We begin by understanding your business structure, statutory position, documentation gaps, and regulatory exposure.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 5h16" />
          <path d="M4 12h10" />
          <path d="M4 19h7" />
          <circle cx="17" cy="16" r="3" />
          <path d="M19.2 18.2L21 20" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Strategic Mapping",
      description:
        "We convert legal, compliance, and governance requirements into a clear execution roadmap aligned with business priorities.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 18V6" />
          <path d="M4 18h16" />
          <path d="M7 15l3-4 3 2 4-6" />
          <path d="M17 7h3v3" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We support filings, documentation, board actions, compliance processes, and transaction work with disciplined execution.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M7 3h8l4 4v14H7V3z" />
          <path d="M15 3v5h4" />
          <path d="M10 12h6" />
          <path d="M10 16h5" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Continuous Governance",
      description:
        "We help businesses maintain compliance maturity through periodic review, advisory support, and structured records.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3L5 6v6c0 4.6 2.8 7.4 7 9 4.2-1.6 7-4.4 7-9V6l-7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="trust-architecture" ref={sectionRef}>
      <div className="trust-architecture-shapes" aria-hidden="true">
        <span className="trust-shape trust-shape-one"></span>
        <span className="trust-shape trust-shape-two"></span>
        <span className="trust-shape trust-shape-three"></span>
      </div>

      <div className="container trust-architecture-container">
        <div className="trust-architecture-header">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.72, ease }}
          >
            <span className="trust-architecture-label">
              ARCHITECTURE OF TRUST
            </span>

            <h2 className="trust-architecture-title">
              <AnimatedLetters
                text="A Structured Method"
                delay={0.08}
                stagger={0.018}
              />
              <br />
              <AnimatedLetters
                text="For Serious Advisory Work"
                delay={0.34}
                stagger={0.018}
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.72, delay: 0.18, ease }}
          >
            NEXTROP follows a disciplined advisory process designed to reduce
            uncertainty, improve documentation quality, and support confident
            corporate decisions.
          </motion.p>
        </div>

        <div className="trust-process-grid">
          {processItems.map((item, index) => (
            <motion.article
              className={`trust-process-card trust-process-card-${index + 1}`}
              key={item.title}
              initial={{
                opacity: 0,
                y: 36,
                scale: 0.97,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 36,
                      scale: 0.97,
                    }
              }
              transition={{
                duration: 0.78,
                delay: 0.2 + index * 0.12,
                ease,
              }}
            >
              <div className="trust-card-top">
                <div className="trust-card-icon">{item.icon}</div>
                <span>{item.number}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustArchitecture;