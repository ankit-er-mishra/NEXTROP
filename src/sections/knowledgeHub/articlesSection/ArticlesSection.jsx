import "./ArticlesSection.css";
import { articles } from "../../../pages/KnowledgeHub/knowledgeData";
import KnowledgeAssetCard from "../knowledgeAssetCard/KnowledgeAssetCard";

function ArticlesSection() {
  return (
    <section className="knowledge-content-section articles-section">
      <div className="container">
        <div className="knowledge-subhead">
          <span>ARTICLES</span>
          <h2>Articles</h2>
          <p>
            Thought pieces, legal explainers, and advisory notes for leadership
            teams.
          </p>
        </div>

        <div className="knowledge-grid">
          {articles.map((item, index) => (
            <KnowledgeAssetCard item={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;