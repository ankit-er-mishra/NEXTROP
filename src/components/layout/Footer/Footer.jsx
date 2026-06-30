import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Practice Areas", href: "/services" },
    { label: "Knowledge Hub", href: "/knowledge-hub" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    {
      label: "M&A and Transactions Advisory",
      href: "/services/ma-transactions-advisory",
    },
    {
      label: "Company Law Advisory",
      href: "/services/company-law-secretarial-services",
    },
    { label: "Due Diligence", href: "/services/due-diligence" },
    { label: "India Entry Services", href: "/services/india-entry-services" },
    {
      label: "NBFC & Fintech Advisory",
      href: "/services/nbfc-fintech-advisory-services",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-bg-shapes" aria-hidden="true">
        <span className="footer-shape footer-shape-one"></span>
        <span className="footer-shape footer-shape-two"></span>
      </div>

      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="NEXTROP Home">
              <img src={logo} alt="NEXTROP" />
            </Link>

            <p>
              Professional corporate advisory, compliance, governance, and
              strategic transaction support for modern businesses.
            </p>
          </div>

          <div className="footer-nav">
            <div className="footer-column">
              <h4>Company</h4>

              <ul>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>

              <ul>
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-contact-strip">
          <a href="mailto:connect@nextrop.com" className="footer-contact-card">
            <span className="footer-contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4 6h16v12H4V6z" />
                <path d="M4 7l8 6 8-6" />
              </svg>
            </span>

            <span className="footer-contact-text">
              <small>Email</small>
              <strong>connect@nextrop.com</strong>
            </span>
          </a>

          <a
            href="tel:+918709815050"
            className="footer-contact-card footer-contact-center"
          >
            <span className="footer-contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M8 5l2.2 4.4-1.4 1.4c1.1 2.2 2.8 3.9 5 5l1.4-1.4L19.6 16 18 20c-7.5-.4-13.6-6.5-14-14l4-1z" />
              </svg>
            </span>

            <span className="footer-contact-text">
              <small>Call Us Now</small>
              <strong>+91 87098 15050</strong>
            </span>
          </a>

          <a
            href="https://www.google.com/maps?q=307%2C%20Surya%20Complex%2C%20Veer%20Savarkar%20Block%2C%20Shakarpur%2C%20Delhi%20110092"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-card footer-contact-right"
          >
            <span className="footer-contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.4" />
              </svg>
            </span>

            <span className="footer-contact-text">
              <small>Office Address</small>
              <strong>
                307, Surya Complex, Veer Savarkar Block, Shakarpur, Delhi
                110092
              </strong>
            </span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} NEXTROP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;