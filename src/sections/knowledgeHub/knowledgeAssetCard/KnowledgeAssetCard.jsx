import "./KnowledgeAssetCard.css";
import { motion } from "framer-motion";

function KnowledgeAssetCard({ item, index = 0, featured = false }) {
  const ease = [0.22, 1, 0.36, 1];

  const renderPreview = () => {
    if (item.thumbnail) {
      return (
        <div className="knowledge-thumb-preview">
          <img src={item.thumbnail} alt={item.title} />
        </div>
      );
    }

    return (
      <div className="knowledge-placeholder-preview">
        <div className="knowledge-placeholder-top">
          <span>{item.type}</span>
          <strong>NEXTROP</strong>
        </div>

        <div className="knowledge-placeholder-body">
          <small>{item.category}</small>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>

        <div className="knowledge-placeholder-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  };

  const renderAction = () => {
    if (item.file) {
      return (
        <a
          href={item.file}
          target="_blank"
          rel="noreferrer"
          className="knowledge-card-link"
        >
          Open Insight <span>→</span>
        </a>
      );
    }

    return (
      <button type="button" className="knowledge-card-link disabled">
        Coming Soon
      </button>
    );
  };

  if (featured) {
    return (
      <motion.article
        className="knowledge-featured-card"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.65,
          delay: index * 0.08,
          ease,
        }}
      >
        <div className="knowledge-featured-preview">{renderPreview()}</div>

        <div className="knowledge-featured-content">
          <span>{item.type}</span>
          <small>{item.category}</small>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {renderAction()}
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className="knowledge-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.62,
        delay: index * 0.06,
        ease,
      }}
    >
      <div className="knowledge-card-preview">{renderPreview()}</div>

      <div className="knowledge-card-content">
        <div className="knowledge-card-meta">
          <span>{item.type}</span>
          <small>{item.label}</small>
        </div>

        <small className="knowledge-card-category">{item.category}</small>

        <h3>{item.title}</h3>
        <p>{item.description}</p>

        {renderAction()}
      </div>
    </motion.article>
  );
}

export default KnowledgeAssetCard;