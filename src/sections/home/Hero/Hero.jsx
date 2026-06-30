import "./Hero.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroCityVideo from "../../../assets/videos/hero-city.mp4";
import heroPoster from "../../../assets/images/hero-video-poster.jpg";

function Hero() {
  const ease = [0.22, 1, 0.36, 1];

  const videoRef = useRef(null);
  const [hideScrollCue, setHideScrollCue] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.95;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHideScrollCue(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const titleLines = [
    "Strategic Legal &",
    "Compliance Solutions",
    "For Modern Businesses",
  ];

  const letterContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.014,
        delayChildren: 0.22,
      },
    },
  };

  const letterItem = {
    hidden: {
      opacity: 0,
      y: 22,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.48,
        ease,
      },
    },
  };

  const renderTitleLine = (line, lineIndex) => {
    const words = line.trim().split(/\s+/);

    return words.map((word, wordIndex) => (
      <span className="hero-word" key={`${lineIndex}-${word}-${wordIndex}`}>
        {word.split("").map((letter, letterIndex) => (
          <motion.span
            className="hero-letter"
            variants={letterItem}
            key={`${lineIndex}-${wordIndex}-${letterIndex}`}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    ));
  };

  return (
    <section className="hero">
      <div className="hero-bg-video" aria-hidden="true">
        <video
  ref={videoRef}
  src={heroCityVideo}
  poster={heroPoster}
  autoPlay
  muted
  loop
  playsInline
  preload="none"
/>
      </div>

      <div className="hero-local-polygons" aria-hidden="true">
        <span className="hero-local-poly hero-local-poly-one"></span>
        <span className="hero-local-poly hero-local-poly-two"></span>
        <span className="hero-local-poly hero-local-poly-three"></span>
        <span className="hero-local-poly hero-local-poly-four"></span>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.span
            className="hero-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease }}
          >
            Institutional Governance & Compliance
          </motion.span>

          <motion.h1
            className="hero-title"
            variants={letterContainer}
            initial="hidden"
            animate="visible"
          >
            {titleLines.map((line, lineIndex) => (
              <span className="hero-title-line" key={lineIndex}>
                {renderTitleLine(line, lineIndex)}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.72, ease }}
          >
            Helping startups, investors, and enterprises navigate corporate
            governance, legal compliance, regulatory requirements, and business
            growth with confidence.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.9, ease }}
          >
            <a href="/contact" className="hero-primary-btn">
              Schedule Consultation
            </a>

            <a href="/services" className="hero-secondary-btn">
              <span>Explore Services</span>
              <span className="hero-btn-arrow">→</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-capabilities"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 1.05,
              ease,
            }}
          >
            <span>Corporate Advisory</span>
            <span>Legal Compliance</span>
            <span>Strategic Growth</span>
          </motion.div>
        </div>
      </div>

      <div className="hero-bottom-fade"></div>

      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0, y: 140, filter: "blur(6px)" }}
        animate={
          hideScrollCue
            ? {
                opacity: 0,
                y: 200,
                filter: "blur(6px)",
                pointerEvents: "none",
              }
            : {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                pointerEvents: "auto",
              }
        }
        transition={{
          duration: 0.45,
          delay: hideScrollCue ? 0 : 1.45,
          ease,
        }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
}

export default Hero;