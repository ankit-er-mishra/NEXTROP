import "./AboutHero.css";
import { motion } from "framer-motion";
import AnimatedLetters from "../../../../components/animations/AnimatedLetters";
import heroAboutBg from "../../../../assets/images/hero_about.png";

function AboutHero() {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="about-hero">
      <div className="about-hero-bg" aria-hidden="true">
        <img src={heroAboutBg} alt="" />
      </div>

      <div className="container about-hero-container">
        <motion.span
          className="about-hero-label"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          The NEXTROP Mandate
        </motion.span>

        <h1 className="about-hero-title">
          <AnimatedLetters text="Governance Is" delay={0.08} stagger={0.018} />
          <br />
          <span className="about-title-nowrap">
            <AnimatedLetters
              text="Not An Afterthought"
              delay={0.32}
              stagger={0.018}
            />
          </span>
        </h1>

        <motion.p
          className="about-hero-text"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.48, ease }}
        >
          NEXTROP helps modern businesses build the legal, compliance, and
          governance architecture required to make confident decisions, maintain
          defensible records, and grow with institutional discipline.
        </motion.p>

        <motion.a
  href="#institutional-vision"
  className="about-hero-link"
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55, delay: 0.68, ease }}
>
  <span>Explore Our Governance Philosophy</span>
  <span className="about-hero-link-arrow">→</span>
</motion.a>
      </div>


      <div className="about-hero-scroll" aria-hidden="true">
  <span>Scroll to explore</span>
  <div className="about-hero-scroll-line">
    <i></i>
  </div>
</div>

<div className="about-hero-bottom-fade" aria-hidden="true"></div>

      <div className="about-hero-bottom-fade" aria-hidden="true"></div>
    </section>
  );
}

export default AboutHero;