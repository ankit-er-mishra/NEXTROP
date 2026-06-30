import "./ContactProtocol.css";
import { motion } from "framer-motion";

function ContactProtocol() {
  const protocolItems = [
    {
      title: "Initial Review",
      text: "Your inquiry is reviewed for practice-area fit, urgency, and engagement context.",
    },
    {
      title: "Advisory Routing",
      text: "Relevant senior professionals are aligned based on the nature of the matter.",
    },
    {
      title: "Scope Confirmation",
      text: "Engagement scope, timelines, confidentiality expectations, and next steps are clarified.",
    },
  ];

  return (
    <section className="contact-protocol-section">
      <div className="container contact-protocol-container">
        <motion.div
          className="contact-protocol-shell"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-protocol-heading">
            <span>Engagement Protocol</span>
            <h2>A disciplined path from inquiry to advisory action.</h2>
          </div>

          <div className="contact-protocol-list">
            {protocolItems.map((item) => (
              <div className="contact-protocol-row" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactProtocol;