import "./TrustMetrics.css";
import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import trustImage from "../../../assets/images/trust_metrics.png";

function CountNumber({ start, end, suffix = "", delay = 0 }) {
  const count = useMotionValue(0);

  const smoothCount = useSpring(count, {
    stiffness: 36,
    damping: 18,
    mass: 1.1,
  });

  const rounded = useTransform(smoothCount, (latest) => {
    return `${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (!start) return;

    const controls = animate(count, end, {
      duration: 2.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [start, count, end, delay]);

  return <motion.span>{rounded}</motion.span>;
}

function AnimatedLetters({ text, start, delay = 0, className = "" }) {
  const letters = text.split("");

  return (
    <motion.span
      className={`trust-animated-letters ${className}`}
      initial="hidden"
      animate={start ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.018,
            delayChildren: delay,
          },
        },
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          className="trust-animated-letter"
          key={`${letter}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 18
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.48,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

function TrustIcon({ type }) {
  if (type === "confidentiality") {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M7 10V8a5 5 0 0 1 10 0v2" />
        <path d="M6 10h12v10H6V10z" />
        <path d="M12 14v3" />
      </svg>
    );
  }

  if (type === "governance") {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M12 3L5 6v6c0 4.6 2.8 7.4 7 9 4.2-1.6 7-4.4 7-9V6l-7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16v-5" />
      <path d="M12 16V8" />
      <path d="M16 16v-9" />
      <path d="M8 11l4-3 4-1" />
    </svg>
  );
}

function TrustMetrics() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -12% 0px",
  });

  const ease = [0.22, 1, 0.36, 1];

  const trustPoints = [
    {
      icon: "governance",
      title: "Governance-Focused Execution",
      text: "Built around board clarity, compliance discipline, and structured decision-making.",
    },
    {
      icon: "confidentiality",
      title: "Confidential Engagements",
      text: "Sensitive business matters handled with discretion, precision, and professional care.",
    },
    {
      icon: "advisory",
      title: "Strategic Advisory Support",
      text: "Practical guidance across compliance, transactions, structuring, and growth decisions.",
    },
  ];

  return (
    <section className="trust-metrics" ref={sectionRef}>
      <div className="trust-bg-polygons" aria-hidden="true">
        <span className="trust-poly trust-poly-one"></span>
        <span className="trust-poly trust-poly-two"></span>
        <span className="trust-poly trust-poly-three"></span>
      </div>

      <div className="container trust-story-container">
        <motion.div
          className="trust-image-wrap"
          initial={{ opacity: 0, x: -34 }}
          animate={
            isInView
              ? { opacity: 1, x: 0}
              : { opacity: 0, x: -34 }
          }
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease,
          }}
        >
          <div className="trust-image-main">
            <img src={trustImage} alt="NEXTROP advisory discussion" />
          </div>
        </motion.div>

        <motion.div
          className="trust-story-content"
          initial={{ opacity: 0, x: 34 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: 34 }
          }
          transition={{
            duration: 0.9,
            delay: 0.22,
            ease,
          }}
        >
          <h2>
            <AnimatedLetters
              text="Advisory built for"
              start={isInView}
              delay={0.15}
            />
            <br />
            <AnimatedLetters
              text="Modern Companies,"
              start={isInView}
              delay={0.42}
            />
            <br />
            <AnimatedLetters
              text="Founders & Investors"
              start={isInView}
              delay={0.68}
            />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
            }
            transition={{
              duration: 0.75,
              delay: 0.95,
              ease,
            }}
          >
            NEXTROP supports businesses through corporate governance, legal
            compliance, transaction advisory, and strategic business
            structuring. Our approach combines regulatory understanding with
            practical execution, helping clients move with clarity and
            confidence.
          </motion.p>

          <motion.div
            className="trust-experience-block"
            initial={{ opacity: 0, y: 22}}
            animate={
              isInView
                ? { opacity: 1, y: 0}
                : { opacity: 0, y: 22 }
            }
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease,
            }}
          >
            <div className="trust-experience-number">
              <span>
                <CountNumber
                  start={isInView}
                  end={15}
                  suffix="+"
                  delay={1.25}
                />
              </span>

              <small>Years of combined professional experience</small>
            </div>

            <div className="trust-experience-copy">
              <p>
                NEXTROP works with companies, startups, investors, and
                leadership teams across compliance, governance, transactions,
                and growth decisions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container trust-points-container">
        <div className="trust-points-lines">
          {trustPoints.map((item, index) => (
            <motion.div
              className="trust-line-item"
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{
                duration: 0.75,
                delay: 1.25 + index * 0.12,
                ease,
              }}
            >
              <div className="trust-line-icon">
                <TrustIcon type={item.icon} />
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustMetrics;