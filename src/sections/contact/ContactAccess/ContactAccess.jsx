import "./ContactAccess.css";
import { motion } from "framer-motion";

function ContactAccess() {
  const contactPillars = [
    {
      title: "Send a Message",
      data: "contact@nextrop.in",
      helper:
        "For briefs, documents, engagement requests, and formal correspondence.",
      href: "mailto:contact@nextrop.in",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.5 6.75h15v10.5h-15V6.75Z" />
          <path d="m5.25 7.5 6.75 5 6.75-5" />
        </svg>
      ),
    },
    {
      title: "Give Us a Call",
      data: "+91 00000 00000",
      helper: "For direct office coordination and consultation routing.",
      href: "tel:+910000000000",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.15 5.35 9.8 9.1l-1.55 1.55c.9 1.75 2.35 3.2 4.1 4.1l1.55-1.55 3.75 1.65-.55 3.25c-.15.85-.9 1.5-1.78 1.5C9.25 19.6 4.4 14.75 4.4 8.68c0-.88.65-1.63 1.5-1.78l2.25-.4Z" />
          <path d="M14.3 4.85c2.38.5 4.35 2.47 4.85 4.85" />
          <path d="M14.2 8.05c.86.28 1.47.89 1.75 1.75" />
        </svg>
      ),
    },
    {
      title: "Office Location",
      data: "NEXTROP Advisory Office",
      helper: "Add complete registered office address here.",
      href: null,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s7-6.2 7-11.35A7 7 0 0 0 5 9.65C5 14.8 12 21 12 21Z" />
          <path d="M12 12.35a2.55 2.55 0 1 0 0-5.1 2.55 2.55 0 0 0 0 5.1Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact-access" className="contact-access-section">
      <div className="contact-access-polygons" aria-hidden="true">
        <span className="contact-access-polygon contact-access-polygon-one"></span>
        <span className="contact-access-polygon contact-access-polygon-two"></span>
        <span className="contact-access-polygon contact-access-polygon-three"></span>
        <span className="contact-access-polygon contact-access-polygon-four"></span>
        <span className="contact-access-polygon contact-access-polygon-five"></span>
        <span className="contact-access-polygon contact-access-polygon-six"></span>
        <span className="contact-access-polygon contact-access-polygon-seven"></span>
        <span className="contact-access-polygon contact-access-polygon-eight"></span>
      </div>

      <div className="container contact-access-container">
        <motion.div
          className="contact-access-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* <span>Get In Touch</span> */}

          <h2>Direct channels for institutional access.</h2>

          <p>
            Reach NEXTROP through the appropriate channel for advisory
            conversations, office coordination, or formal correspondence.
          </p>
        </motion.div>

        <motion.div
          className="contact-pillar-grid"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{
            duration: 0.75,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {contactPillars.map((pillar) => {
            const content = (
              <>
                <div className="contact-pillar-icon">{pillar.icon}</div>

                <span className="contact-pillar-title">{pillar.title}</span>

                <strong className="contact-pillar-data">{pillar.data}</strong>

                <p>{pillar.helper}</p>
              </>
            );

            if (pillar.href) {
              return (
                <a
                  href={pillar.href}
                  className="contact-pillar"
                  key={pillar.title}
                >
                  {content}
                </a>
              );
            }

            return (
              <div className="contact-pillar" key={pillar.title}>
                {content}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactAccess;