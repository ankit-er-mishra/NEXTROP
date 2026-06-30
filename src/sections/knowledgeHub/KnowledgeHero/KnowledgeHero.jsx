import "./KnowledgeHero.css";
import { motion } from "framer-motion";
import AnimatedLetters from "../../../components/animations/AnimatedLetters";
import heroAboutBg from "../../../assets/images/hero_about.png";

function KnowledgeHero() {
  const ease = [0.22, 1, 0.36, 1];

  const latestAssets = [
    {
      title: "Closure Of Companies & LLP",
      category: "Compliance",
      meta: "Corporate Compliance / Document",
    },
    {
      title: "Building Defensible Governance Records",
      category: "Governance",
      meta: "Governance / Article",
    },
    {
      title: "Startup Compliance Readiness",
      category: "Startups",
      meta: "Startups / Guide",
    },
  ];

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="knowledge-hero">
      <div className="knowledge-hero-bg" aria-hidden="true">
        <img src={heroAboutBg} alt="" />
      </div>

      <div className="knowledge-hero-shapes" aria-hidden="true">
        <span className="knowledge-shape knowledge-shape-one"></span>
        <span className="knowledge-shape knowledge-shape-two"></span>
        <span className="knowledge-shape knowledge-shape-three"></span>
        <span className="knowledge-shape knowledge-shape-four"></span>
        <span className="knowledge-shape knowledge-shape-five"></span>
        <span className="knowledge-shape knowledge-shape-six"></span>
      </div>

      <div className="container knowledge-hero-container">
        <div className="knowledge-hero-grid">
          <motion.div
            className="knowledge-hero-content"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            <motion.span
              className="knowledge-hero-label"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
            >
              KNOWLEDGE HUB
            </motion.span>

            <h1 className="knowledge-hero-title">
              <AnimatedLetters
                text="Institutional Insights"
                delay={0.08}
                stagger={0.018}
              />
              <br />
              <AnimatedLetters
                text="For Serious Decisions"
                delay={0.34}
                stagger={0.018}
              />
            </h1>

            <motion.p
              className="knowledge-hero-text"
              initial={{ opacity: 0, y: 18, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.55, ease }}
            >
              Explore NEXTROP’s articles, documents, guides, and regulatory
              notes designed to help founders, boards, investors, and leadership
              teams think clearly about governance, compliance, and
              transactions.
            </motion.p>

            <motion.div
              className="knowledge-hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.74, ease }}
            >
              <button
                type="button"
                className="knowledge-hero-primary-action"
                onClick={() => scrollToSection("knowledge-articles")}
              >
                Explore Articles
                <span>→</span>
              </button>

              <button
                type="button"
                className="knowledge-hero-secondary-action"
                onClick={() => scrollToSection("knowledge-documents")}
              >
                View Documents
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="knowledge-index-wrap"
            initial={{ opacity: 0, x: 36, scale: 0.985 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.28, ease }}
          >
            <div className="knowledge-index-halo" aria-hidden="true"></div>

            <div className="knowledge-index-panel">
              <div className="knowledge-index-top">
                <span>NEXTROP RESEARCH INDEX</span>
                <small>LIVE LIBRARY</small>
              </div>

              <div className="knowledge-featured-brief">
                <div className="knowledge-featured-brief-head">
                  <span>Featured Brief</span>
                  <small>Article</small>
                </div>

                <h2>IBC Article Series: Resolution Plans</h2>

                <p>
                  A structured introduction to resolution plans under the
                  Insolvency and Bankruptcy Code for leadership teams and
                  stakeholders.
                </p>

                <div className="knowledge-featured-meta">
                  <span>Insolvency</span>
                  <span>Research Note</span>
                </div>
              </div>

              <div className="knowledge-latest-block">
                <div className="knowledge-latest-head">
                  <span>Latest Assets</span>
                  <small>Curated Index</small>
                </div>

                <div className="knowledge-latest-list">
                  {latestAssets.map((asset) => (
                    <div className="knowledge-latest-row" key={asset.title}>
                      <span className="knowledge-latest-badge">
                        {asset.category}
                      </span>

                      <div>
                        <strong>{asset.title}</strong>
                        <span>{asset.meta}</span>
                      </div>

                      <i>→</i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="knowledge-hero-flow-line" aria-hidden="true"></div>
    </section>
  );
}

export default KnowledgeHero;