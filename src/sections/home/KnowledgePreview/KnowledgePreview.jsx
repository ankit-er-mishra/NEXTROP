import "./KnowledgePreview.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import AnimatedLetters from "../../../components/animations/AnimatedLetters";

function KnowledgePreview() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.24,
    margin: "0px 0px -10% 0px",
  });

  const ease = [0.22, 1, 0.36, 1];

  const articles = [
    {
      category: "Regulatory Update",
      title: "Key Compliance Considerations For Growing Companies",
      date: "May 2026",
    },
    {
      category: "Corporate Governance",
      title: "Why Strong Governance Matters For Modern Businesses",
      date: "April 2026",
    },
    {
      category: "Startup Advisory",
      title: "Legal Readiness Checklist For Early Stage Startups",
      date: "March 2026",
    },
  ];

  return (
    <section className="knowledge-preview" ref={sectionRef}>
      <div className="knowledge-bg-shapes" aria-hidden="true">
        <span className="knowledge-shape knowledge-shape-one"></span>
        <span className="knowledge-shape knowledge-shape-two"></span>
      </div>

      <div className="container">
        <div className="knowledge-header">
          <div className="knowledge-heading-block">
            <motion.span
              className="knowledge-label"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.65, ease }}
            >
              INSIGHTS & UPDATES
            </motion.span>

            <h2>
              <AnimatedLetters
                text="Knowledge Built For"
                delay={0.05}
                stagger={0.018}
              />
              <br />
              <AnimatedLetters
                text="Better Decisions"
                delay={0.3}
                stagger={0.018}
              />
            </h2>
          </div>

          <motion.div
            className="knowledge-header-right"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.75, delay: 0.45, ease }}
          >
            <p>
              Practical regulatory updates, governance perspectives, and
              advisory notes designed to help businesses move with clarity.
            </p>

            <div className="knowledge-cta-wrap">
              <Link to="/knowledge-hub" className="knowledge-view-all">
                View Knowledge Hub
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="knowledge-grid">
          {articles.map((article, index) => (
            <motion.article
              className="knowledge-item"
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24  }
              }
              transition={{
                duration: 0.72,
                delay: 0.22 + index * 0.13,
                ease,
              }}
            >
              <Link to="/knowledge-hub" className="knowledge-item-link">
                <div className="knowledge-meta">
                  <span>{article.category}</span>
                  <small>{article.date}</small>
                </div>

                <h3>{article.title}</h3>

                <div className="knowledge-read">
                  Read Insight
                  <span>→</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KnowledgePreview;