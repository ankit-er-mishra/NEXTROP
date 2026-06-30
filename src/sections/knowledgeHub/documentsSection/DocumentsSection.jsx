import "./DocumentsSection.css";
import { documents } from "../../../pages/KnowledgeHub/knowledgeData";
import KnowledgeAssetCard from "../knowledgeAssetCard/KnowledgeAssetCard";

function DocumentsSection() {
  return (
    <section className="knowledge-content-section documents-section">
      <div className="knowledge-library-shapes" aria-hidden="true">
        <span className="knowledge-library-shape knowledge-library-shape-one"></span>
        <span className="knowledge-library-shape knowledge-library-shape-two"></span>
        <span className="knowledge-library-shape knowledge-library-shape-three"></span>
      </div>

      <div className="container">
        <div className="knowledge-subhead">
          <span>DOCUMENTS</span>
          <h2>Documents</h2>
          <p>
            Reference documents, compliance notes, and client-facing advisory
            assets.
          </p>
        </div>

        <div className="knowledge-grid">
          {documents.map((item, index) => (
            <KnowledgeAssetCard item={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DocumentsSection;