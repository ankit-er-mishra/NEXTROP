import "./PracticeAreas.css";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../../components/animations/AnimatedLetters";

function PracticeAreas() {
  const services = [
    {
      title: "M&A and Transactions Advisory",
      link: "/services/ma-transactions-advisory",
      description:
        "Strategic support for mergers, acquisitions, transaction structuring, deal documentation, and corporate restructuring.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <path d="M4 7h6l2 2h8v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
        </svg>
      ),
    },
    {
      title: "Company Law Advisory & Secretarial Services",
      link: "/services/company-law-secretarial-services",
      description:
        "Board processes, statutory filings, corporate approvals, governance documentation, and secretarial compliance support.",
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
      title: "Due Diligence",
      link: "/services/due-diligence",
      description:
        "Structured review of legal, compliance, corporate, and documentation risks before investments or strategic transactions.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M7 3h8l4 4v14H7V3z" />
          <path d="M15 3v5h4" />
          <path d="M10 13l2 2 4-4" />
          <path d="M10 18h6" />
        </svg>
      ),
    },
    {
      title: "India Entry Services",
      link: "/services/india-entry-services",
      description:
        "Support for foreign businesses entering India through compliant structures, registrations, documentation, and execution.",
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

  return (
    <section className="practice-areas">
      <div className="practice-bg-shapes" aria-hidden="true">
        <span className="practice-shape practice-shape-one"></span>
        <span className="practice-shape practice-shape-two"></span>
      </div>

      <div className="container">
        <div className="practice-top">
          <div>
            <span className="practice-label">Core Practice Areas</span>

            <h2>
              <AnimatedLetters text="Practice Areas Designed" stagger={0.018} />
              <br />
              <AnimatedLetters
                text="For Modern Businesses"
                delay={0.28}
                stagger={0.018}
              />
            </h2>
          </div>

          <p>
            A focused preview of NEXTROP’s key advisory capabilities across
            transactions, governance, due diligence, and India-entry support.
          </p>
        </div>

        <div className="practice-list">
          {services.map((service, index) => (
            <Link to={service.link} className="practice-item" key={index}>
              <div className="practice-icon">{service.icon}</div>

              <div className="practice-item-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className="practice-arrow">→</span>
            </Link>
          ))}
        </div>

        <div className="practice-bottom-cta">
          <p>
            Looking for another advisory area? Explore the complete NEXTROP
            service directory.
          </p>

          <Link to="/services" className="practice-view-all">
            View All Practice Areas
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;