import "./KnowledgeHub.css";

import Navbar from "../../components/layout/Navbar/Navbar";

import KnowledgeHero from "../../sections/knowledgeHub/KnowledgeHero/KnowledgeHero";
import FeaturedInsights from "../../sections/knowledgeHub/featuredInsights/FeaturedInsights";
import ArticlesSection from "../../sections/knowledgeHub/articlesSection/ArticlesSection";
import DocumentsSection from "../../sections/knowledgeHub/documentsSection/DocumentsSection";
import KnowledgeCTA from "../../sections/knowledgeHub/knowledgeCTA/KnowledgeCTA";

function KnowledgeHub() {
  return (
    <>
      <Navbar />

      <main className="knowledge-page">
        <KnowledgeHero />
        <FeaturedInsights />
        <ArticlesSection />
        <DocumentsSection />
        <KnowledgeCTA />
      </main>
    </>
  );
}

export default KnowledgeHub;