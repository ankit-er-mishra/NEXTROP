import "./PracticeAreasGrid.css";
import { useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../../components/animations/AnimatedLetters";
import heroAboutBg from "../../../assets/images/hero_about.png";

function PracticeAreasGrid() {
  const sectionRef = useRef(null);
  const [activeDomain, setActiveDomain] = useState("transactions");
  const [mobileSelectorOpen, setMobileSelectorOpen] = useState(false);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -10% 0px",
  });

  const ease = [0.22, 1, 0.36, 1];

  const domains = [
    {
      id: "transactions",
      title: "Transactions",
      index: "01",
      label: "Deal Architecture",
      summary:
        "Deal-side advisory for acquisitions, diligence, restructuring, valuation, and strategic transaction execution.",
      description:
        "NEXTROP supports leadership teams through transaction-sensitive decisions where structure, documentation, timing, and legal clarity directly affect business outcomes.",
      services: [
        {
          id: "ma-transactions-advisory",
          title: "M&A and Transactions Advisory",
          tag: "Transactions",
          link: "/services/ma-transactions-advisory",
          description:
            "Strategic support for mergers, acquisitions, transaction structuring, deal documentation, and corporate restructuring.",
        },
        {
          id: "due-diligence",
          title: "Due Diligence",
          tag: "Review",
          link: "/services/due-diligence",
          description:
            "Structured review of legal, compliance, corporate, and documentation risks before investments or strategic transactions.",
        },
        {
          id: "valuation",
          title: "Valuation",
          tag: "Valuation",
          link: "/services/valuation",
          description:
            "Valuation support for transactions, investments, restructuring, regulatory requirements, and strategic business decisions.",
        },
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <path d="M4 7h6l2 2h8v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
        </svg>
      ),
    },
    {
      id: "governance",
      title: "Governance",
      index: "02",
      label: "Board Discipline",
      summary:
        "Board-level discipline, company law advisory, secretarial compliance, and institutional record management.",
      description:
        "NEXTROP helps companies build stronger governance infrastructure through board processes, statutory records, approvals, registers, and decision documentation.",
      services: [
        {
          id: "company-law-secretarial-services",
          title: "Company Law Advisory & Secretarial Services",
          tag: "Governance",
          link: "/services/company-law-secretarial-services",
          description:
            "Board processes, statutory filings, corporate approvals, governance documentation, and secretarial compliance support.",
        },
        {
          id: "esop-management",
          title: "ESOP Management",
          tag: "People",
          link: "/services/esop-management",
          description:
            "ESOP structuring, documentation, governance approvals, compliance tracking, and stakeholder communication support.",
        },
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M7 3h10v18H7V3z" />
          <path d="M10 8h4" />
          <path d="M10 12h4" />
          <path d="M10 16h3" />
        </svg>
      ),
    },
    {
      id: "compliance",
      title: "Compliance",
      index: "03",
      label: "Regulatory Clarity",
      summary:
        "Regulatory clarity across securities, fintech, NBFC, tax, and statutory compliance frameworks.",
      description:
        "NEXTROP supports businesses in building compliance systems that are not reactive, but structured, documented, and aligned with regulatory expectations.",
      services: [
        {
          id: "securities-law-advisory",
          title: "Securities Law Advisory",
          tag: "Securities",
          link: "/services/securities-law-advisory",
          description:
            "Advisory support on securities regulations, market-related compliance, disclosures, and regulatory obligations.",
        },
        {
          id: "nbfc-fintech-advisory-services",
          title: "NBFC & Fintech Advisory Services",
          tag: "Fintech",
          link: "/services/nbfc-fintech-advisory-services",
          description:
            "Advisory for NBFCs and fintech businesses on regulatory structuring, compliance systems, and operational readiness.",
        },
        {
          id: "tax-advisory-services",
          title: "Tax Advisory Services",
          tag: "Tax",
          link: "/services/tax-advisory-services",
          description:
            "Business-aligned tax advisory coordination for compliance planning, transactions, structuring, and strategic decisions.",
        },
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3L5 6v6c0 4.6 2.8 7.4 7 9 4.2-1.6 7-4.4 7-9V6l-7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "advisory",
      title: "Advisory",
      index: "04",
      label: "Strategic Support",
      summary:
        "Strategic support for startups, insolvency matters, corporate representations, and growth-linked decisions.",
      description:
        "NEXTROP assists companies through growth, restructuring, dispute-sensitive, and decision-critical situations where expert advisory support is needed.",
      services: [
        {
          id: "startups",
          title: "Startups",
          tag: "Startup",
          link: "/services/startups",
          description:
            "Entity structuring, founder documentation, investment readiness, governance systems, and early-stage compliance support.",
        },
        {
          id: "insolvency-resolution-services",
          title: "Insolvency Resolution Services",
          tag: "Resolution",
          link: "/services/insolvency-resolution-services",
          description:
            "Advisory support for insolvency processes, resolution planning, restructuring options, and stakeholder coordination.",
        },
        {
          id: "corporate-litigation-representations",
          title: "Corporate Litigation & Representations",
          tag: "Representation",
          link: "/services/corporate-litigation-representations",
          description:
            "Support for corporate disputes, regulatory representations, notices, responses, and litigation-linked advisory work.",
        },
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3v18" />
          <path d="M5 10l7-7 7 7" />
          <path d="M7 21h10" />
        </svg>
      ),
    },
    {
      id: "cross-border",
      title: "Cross-border",
      index: "05",
      label: "Global Movement",
      summary:
        "India-entry, foreign exchange, and cross-border regulatory advisory for international business activity.",
      description:
        "NEXTROP supports international business activity through India-entry structuring, foreign exchange advisory, documentation, and regulatory coordination.",
      services: [
        {
          id: "india-entry-services",
          title: "India Entry Services",
          tag: "Expansion",
          link: "/services/india-entry-services",
          description:
            "Support for foreign businesses entering India through compliant structures, registrations, documentation, and execution.",
        },
        {
          id: "forex-law-advisory",
          title: "Forex Law Advisory",
          tag: "Forex",
          link: "/services/forex-law-advisory",
          description:
            "Guidance on foreign exchange regulations, cross-border transactions, reporting obligations, and compliance discipline.",
        },
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c3 3 3 15 0 18" />
          <path d="M12 3c-3 3-3 15 0 18" />
        </svg>
      ),
    },
  ];

  const selectedDomain = useMemo(() => {
    return domains.find((domain) => domain.id === activeDomain) || domains[0];
  }, [activeDomain]);

  const handleDomainClick = (domainId) => {
    setActiveDomain(domainId);
    setMobileSelectorOpen(false);
  };

  return (
    <section className="practice-grid-section" ref={sectionRef}>
      <div className="practice-grid-bg" aria-hidden="true">
        <img src={heroAboutBg} alt="" />
      </div>

      <div className="practice-grid-shapes" aria-hidden="true">
        <span className="practice-grid-shape practice-grid-shape-one"></span>
        <span className="practice-grid-shape practice-grid-shape-two"></span>
        <span className="practice-grid-shape practice-grid-shape-three"></span>
        <span className="practice-grid-shape practice-grid-shape-four"></span>
        <span className="practice-grid-shape practice-grid-shape-five"></span>
        <span className="practice-grid-shape practice-grid-shape-six"></span>
        <span className="practice-grid-shape practice-grid-shape-seven"></span>
        <span className="practice-grid-shape practice-grid-shape-eight"></span>
        <span className="practice-grid-shape practice-grid-shape-nine"></span>
      </div>

      <div className="container practice-grid-container">
        <div className="practice-grid-header">
          <div>
            <motion.span
              className="practice-grid-label"
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.6, ease }}
            >
              THE NEXTROP EXPERTISE MATRIX
            </motion.span>

            <h1 className="practice-grid-title">
              <AnimatedLetters
                text="Structured Advisory"
                delay={0.08}
                stagger={0.018}
              />
              <br />
              <AnimatedLetters
                text="For Complex Decisions"
                delay={0.34}
                stagger={0.018}
              />
            </h1>

            <motion.p
              className="practice-grid-intro"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
            >
              NEXTROP organizes its advisory capabilities into five institutional
              domains, helping leadership teams identify the right support
              without navigating a crowded service directory.
            </motion.p>
          </div>

          <motion.div
            className="practice-domain-badge"
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            Master Detail System
          </motion.div>
        </div>

        <motion.div
          className="practice-master-detail"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <aside className="practice-domain-sidebar">
            <div className="practice-sidebar-heading">
              <span>Core Domains</span>
              <p>Select a domain to view the related practice areas.</p>
            </div>

            <div className="practice-mobile-selector">
              <button
                type="button"
                className="practice-mobile-trigger"
                onClick={() => setMobileSelectorOpen((prev) => !prev)}
                aria-expanded={mobileSelectorOpen}
              >
                <span className="practice-mobile-trigger-copy">
                  <small>{selectedDomain.index} / Active Domain</small>
                  <strong>{selectedDomain.title}</strong>
                </span>

                <span
                  className={
                    mobileSelectorOpen
                      ? "practice-mobile-chevron open"
                      : "practice-mobile-chevron"
                  }
                >
                  ↓
                </span>
              </button>

              <AnimatePresence>
                {mobileSelectorOpen && (
                  <motion.div
                    className="practice-mobile-menu"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.28, ease }}
                  >
                    {domains.map((domain) => (
                      <button
                        type="button"
                        key={domain.id}
                        className={
                          activeDomain === domain.id
                            ? "practice-mobile-option active"
                            : "practice-mobile-option"
                        }
                        onClick={() => handleDomainClick(domain.id)}
                      >
                        <span>{domain.index}</span>

                        <span>
                          <strong>{domain.title}</strong>
                          <small>{domain.label}</small>
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="practice-domain-list">
              {domains.map((domain) => (
                <button
                  type="button"
                  key={domain.id}
                  className={
                    activeDomain === domain.id
                      ? "practice-domain-item active"
                      : "practice-domain-item"
                  }
                  onClick={() => handleDomainClick(domain.id)}
                >
                  <span className="practice-domain-index">{domain.index}</span>

                  <span className="practice-domain-copy">
                    <strong>{domain.title}</strong>
                    <small>{domain.label}</small>
                  </span>

                  <span className="practice-domain-arrow">→</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="practice-detail-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDomain.id}
                className="practice-detail-panel"
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.45, ease }}
              >
                <div className="practice-detail-top">
                  <div>
                    <span>{selectedDomain.label}</span>
                    <h2>{selectedDomain.title}</h2>
                  </div>

                  <div className="practice-detail-icon" aria-hidden="true">
                    {selectedDomain.icon}
                  </div>
                </div>

                <p className="practice-detail-description">
                  {selectedDomain.description}
                </p>

                <div className="practice-peek-box">
                  <span>Domain Scope</span>
                  <p>{selectedDomain.summary}</p>
                </div>

                <div className="practice-service-list">
                  {selectedDomain.services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.055,
                        ease,
                      }}
                    >
                      <Link to={service.link} className="practice-service-row">
                        <div className="practice-service-meta">
                          <small>{service.tag}</small>
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                        </div>

                        <span className="practice-service-action">
                          Open Brief <span>→</span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PracticeAreasGrid;