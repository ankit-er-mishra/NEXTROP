import "./FeaturedInsights.css";
import { motion } from "framer-motion";
import { articles, documents } from "../../../pages/KnowledgeHub/knowledgeData";
import KnowledgeAssetCard from "../knowledgeAssetCard/KnowledgeAssetCard";

function FeaturedInsights() {
  const ease = [0.22, 1, 0.36, 1];
  const featuredItems = [articles[0], documents[1]];

  return (
    <section className="knowledge-featured-section">
      <div className="container knowledge-featured-container">
        <motion.div
          className="knowledge-section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <span className="knowledge-section-label">INSIGHT LIBRARY</span>

            <h2>Curated Knowledge For Business Clarity</h2>

            <p>
              A structured repository for corporate law, insolvency, governance,
              compliance, taxation, fintech, and cross-border advisory topics.
            </p>
          </div>

          <div className="knowledge-count">
            <strong>{articles.length + documents.length}</strong>
            <span>Reserved Insight Spaces</span>
          </div>
        </motion.div>

        <div className="knowledge-subhead">
          <span>FEATURED</span>
          <h2>Featured Knowledge Assets</h2>
        </div>

        <div className="knowledge-featured-grid">
          {featuredItems.map((item, index) => (
            <KnowledgeAssetCard
              item={item}
              index={index}
              featured
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedInsights;