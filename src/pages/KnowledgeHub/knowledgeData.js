/*
  FUTURE CLIENT CONTENT FORMAT:

  1. Put thumbnails here:
     src/assets/knowledge/articles/article-one.png
     src/assets/knowledge/documents/document-one.png

  2. Put PDFs/files here:
     src/assets/knowledge/files/article-one.pdf

  3. Import them:
     import articleOneThumb from "../../assets/knowledge/articles/article-one.png";
     import articleOnePdf from "../../assets/knowledge/files/article-one.pdf";

  4. Then use:
     thumbnail: articleOneThumb,
     file: articleOnePdf,
*/

export const articles = [
  {
    id: "resolution-plan-introduction",
    title: "IBC Article Series: Resolution Plans — Introduction",
    category: "Insolvency",
    type: "Article",
    label: "Featured Article",
    description:
      "A structured introduction to resolution plans under the Insolvency and Bankruptcy Code, designed for leadership teams and stakeholders.",
    thumbnail: null,
    file: null,
  },
  {
    id: "resolution-plan-process",
    title: "Understanding The Resolution Plan Process",
    category: "Insolvency",
    type: "Article",
    label: "Article",
    description:
      "A practical overview of the legal framework, process discipline, and commercial considerations involved in resolution planning.",
    thumbnail: null,
    file: null,
  },
  {
    id: "governance-records",
    title: "Building Defensible Governance Records",
    category: "Governance",
    type: "Article",
    label: "Coming Soon",
    description:
      "A NEXTROP insight on board-ready documentation, decision records, statutory registers, and governance discipline.",
    thumbnail: null,
    file: null,
  },
  {
    id: "startup-compliance-readiness",
    title: "Startup Compliance Readiness For Founders",
    category: "Startups",
    type: "Article",
    label: "Coming Soon",
    description:
      "A practical article for founders preparing compliance, governance, and documentation systems before growth or investment.",
    thumbnail: null,
    file: null,
  },
];

export const documents = [
  {
    id: "companies-act-2013",
    title: "IBC & Companies Act 2013",
    category: "Corporate Law",
    type: "Document",
    label: "Reference Note",
    description:
      "A document-led overview of selected company law considerations relevant to restructuring and corporate decision-making.",
    thumbnail: null,
    file: null,
  },
  {
    id: "closure-companies-llp",
    title: "Closure Of Companies & LLP",
    category: "Corporate Compliance",
    type: "Document",
    label: "Document",
    description:
      "A concise reference for closure-related considerations for companies and LLPs, including procedural and compliance clarity.",
    thumbnail: null,
    file: null,
  },
  {
    id: "forex-law-advisory-note",
    title: "Foreign Exchange Compliance Note",
    category: "Cross-border",
    type: "Document",
    label: "Coming Soon",
    description:
      "A reference document for businesses managing foreign investment, cross-border transactions, and FEMA-linked compliance.",
    thumbnail: null,
    file: null,
  },
  {
    id: "nbfc-fintech-readiness",
    title: "NBFC & Fintech Regulatory Readiness",
    category: "Fintech",
    type: "Document",
    label: "Coming Soon",
    description:
      "A focused document on regulatory discipline, governance systems, and documentation readiness for NBFC and fintech businesses.",
    thumbnail: null,
    file: null,
  },
];