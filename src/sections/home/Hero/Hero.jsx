import "./Hero.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroCityVideo from "../../../assets/videos/hero-city.mp4";
import heroPoster from "../../../assets/images/hero-video-poster.jpg";
import heroCityWebm from "../../../assets/videos/hero-city.webm";

function Hero() {
  const ease = [0.22, 1, 0.36, 1];

  const [hideScrollCue, setHideScrollCue] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [reduceHeroMotion, setReduceHeroMotion] = useState(true);

useEffect(() => {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  const width = window.innerWidth;

  const isMobile = width <= 768;
  const isSmallLaptop = width <= 1024;

  const saveData = connection?.saveData === true;

  const slowNetwork =
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g";

  const lowMemory =
    typeof navigator.deviceMemory === "number"
      ? navigator.deviceMemory <= 4
      : false;

  const lowCpu =
    typeof navigator.hardwareConcurrency === "number"
      ? navigator.hardwareConcurrency <= 4
      : false;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const canPlayVideo =
    !isMobile &&
    !isSmallLaptop &&
    !saveData &&
    !slowNetwork &&
    !lowMemory &&
    !lowCpu &&
    !reducedMotion;

  const shouldReduceMotion =
    isMobile || saveData || slowNetwork || lowMemory || lowCpu || reducedMotion;

  setShouldPlayVideo(canPlayVideo);
  setReduceHeroMotion(shouldReduceMotion);
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
        staggerChildren: 0.012,
        delayChildren: 0.18,
      },
    },
  };

  const letterItem = {
    hidden: {
      opacity: 0,
      y: 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.38,
        ease,
      },
    },
  };

  const softFadeUp = {
    hidden: {
      opacity: 0,
      y: 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
        <img
          className={`hero-poster-image ${videoReady ? "poster-hidden" : ""}`}
          src={heroPoster}
          alt=""
          loading="eager"
          decoding="async"
        />

        {shouldPlayVideo && (
          <video
  autoPlay
  muted
  loop
  playsInline
  preload="none"
  onCanPlay={() => setVideoReady(true)}
  onLoadedData={() => setVideoReady(true)}
>
  <source src={heroCityWebm} type="video/webm" />
  <source src={heroCityVideo} type="video/mp4" />
</video>
        )}
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {reduceHeroMotion ? (
            <span className="hero-label">
              Institutional Governance & Compliance
            </span>
          ) : (
            <motion.span
              className="hero-label"
              variants={softFadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25, ease }}
            >
              Institutional Governance & Compliance
            </motion.span>
          )}

          {reduceHeroMotion ? (
            <h1 className="hero-title">
              <span className="hero-title-line">Strategic Legal &</span>
              <span className="hero-title-line">Compliance Solutions</span>
              <span className="hero-title-line">For Modern Businesses</span>
            </h1>
          ) : (
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
          )}

          {reduceHeroMotion ? (
            <p className="hero-description">
              Helping startups, investors, and enterprises navigate corporate
              governance, legal compliance, regulatory requirements, and business
              growth with confidence.
            </p>
          ) : (
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.62, ease }}
            >
              Helping startups, investors, and enterprises navigate corporate
              governance, legal compliance, regulatory requirements, and business
              growth with confidence.
            </motion.p>
          )}

          {reduceHeroMotion ? (
            <div className="hero-buttons">
              <a href="/contact" className="hero-primary-btn">
                Schedule Consultation
              </a>

              <a href="/services" className="hero-secondary-btn">
                <span>Explore Services</span>
                <span className="hero-btn-arrow">→</span>
              </a>
            </div>
          ) : (
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.78, ease }}
            >
              <a href="/contact" className="hero-primary-btn">
                Schedule Consultation
              </a>

              <a href="/services" className="hero-secondary-btn">
                <span>Explore Services</span>
                <span className="hero-btn-arrow">→</span>
              </a>
            </motion.div>
          )}

          {reduceHeroMotion ? (
            <div className="hero-capabilities">
              <span>Corporate Advisory</span>
              <span>Legal Compliance</span>
              <span>Strategic Growth</span>
            </div>
          ) : (
            <motion.div
              className="hero-capabilities"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.92,
                ease,
              }}
            >
              <span>Corporate Advisory</span>
              <span>Legal Compliance</span>
              <span>Strategic Growth</span>
            </motion.div>
          )}
        </div>
      </div>

      <div className="hero-bottom-fade"></div>

      {!reduceHeroMotion && (
        <motion.div
          className="hero-scroll-cue"
          initial={{ opacity: 0, y: 80 }}
          animate={
            hideScrollCue
              ? {
                  opacity: 0,
                  y: 120,
                  pointerEvents: "none",
                }
              : {
                  opacity: 1,
                  y: 0,
                  pointerEvents: "auto",
                }
          }
          transition={{
            duration: 0.42,
            delay: hideScrollCue ? 0 : 1.25,
            ease,
          }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </motion.div>
      )}
    </section>
  );
}

export default Hero;