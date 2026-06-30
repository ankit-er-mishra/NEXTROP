import "./ContactForm.css";
import { useState } from "react";
import { motion } from "framer-motion";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  practiceArea: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const practiceAreas = [
    "M&A and Transactions Advisory",
    "Insolvency Resolution Services",
    "Company Law Advisory & Secretarial Services",
    "Valuation",
    "Due Diligence",
    "Securities Law Advisory",
    "Startup Advisory",
    "India Entry Services",
    "ESOP Management",
    "Forex Law Advisory",
    "Corporate Litigation & Representations",
    "NBFC & Fintech Advisory Services",
    "Tax Advisory Services",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.organisation.trim()) {
      newErrors.organisation = "Organisation is required.";
    }

    if (!formData.practiceArea.trim()) {
      newErrors.practiceArea = "Please select a practice area.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Engagement context is required.";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setErrors({});
    setFormData(initialFormState);
  };

  const fieldClass = (fieldName, extraClass = "") => {
    const hasError = errors[fieldName] ? "contact-field-error" : "";

    return `contact-field ${hasError} ${extraClass}`.trim();
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="contact-form-polygons" aria-hidden="true">
        <span className="contact-form-polygon contact-form-polygon-one"></span>
        <span className="contact-form-polygon contact-form-polygon-two"></span>
        <span className="contact-form-polygon contact-form-polygon-three"></span>
        <span className="contact-form-polygon contact-form-polygon-four"></span>
        <span className="contact-form-polygon contact-form-polygon-five"></span>
        <span className="contact-form-polygon contact-form-polygon-six"></span>
        <span className="contact-form-polygon contact-form-polygon-seven"></span>
      </div>

      <div className="container contact-form-container">
        <div className="contact-form-layout">
          <motion.div
            className="contact-form-copy"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Engagement Panel</span>

            <h2>Share the context. We will route the mandate carefully.</h2>

            <p>
              Use this secure intake-style form for confidential advisory
              discussions, preliminary consultations, transaction support,
              regulatory matters, or practice-area specific engagement requests.
            </p>

            <div className="contact-form-note">
              <div className="contact-form-note-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3.75 18.5 6.4v5.35c0 4.25-2.65 6.95-6.5 8.5-3.85-1.55-6.5-4.25-6.5-8.5V6.4L12 3.75Z" />
                  <path d="M9.65 12.05 11.25 13.65 14.55 10.35" />
                </svg>
              </div>

              <div>
                <strong>Confidential intake</strong>

                <small>
                  Please avoid sharing privileged documents until the engagement
                  scope is formally confirmed.
                </small>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="contact-form-grid">
              <div className={fieldClass("name")}>
                <label htmlFor="name">Full Name *</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />

                {errors.name && (
                  <small className="contact-error-text">{errors.name}</small>
                )}
              </div>

              <div className={fieldClass("email")}>
                <label htmlFor="email">Email Address *</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                />

                {errors.email && (
                  <small className="contact-error-text">{errors.email}</small>
                )}
              </div>

              <div className={fieldClass("phone")}>
                <label htmlFor="phone">Phone Number *</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                />

                {errors.phone && (
                  <small className="contact-error-text">{errors.phone}</small>
                )}
              </div>

              <div className={fieldClass("organisation")}>
                <label htmlFor="organisation">Organisation *</label>

                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Company / LLP / Fund / Individual"
                />

                {errors.organisation && (
                  <small className="contact-error-text">
                    {errors.organisation}
                  </small>
                )}
              </div>

              <div className={fieldClass("practiceArea", "contact-field-full")}>
                <label htmlFor="practiceArea">Practice Area *</label>

                <select
                  id="practiceArea"
                  name="practiceArea"
                  value={formData.practiceArea}
                  onChange={handleChange}
                >
                  <option value="">Select advisory area</option>

                  {practiceAreas.map((area) => (
                    <option value={area} key={area}>
                      {area}
                    </option>
                  ))}
                </select>

                {errors.practiceArea && (
                  <small className="contact-error-text">
                    {errors.practiceArea}
                  </small>
                )}
              </div>

              <div className={fieldClass("message", "contact-field-full")}>
                <label htmlFor="message">Engagement Context *</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe the matter, timeline, and expected advisory requirement."
                  rows="5"
                ></textarea>

                {errors.message && (
                  <small className="contact-error-text">{errors.message}</small>
                )}
              </div>
            </div>

            <div className="contact-form-footer">
              <button type="submit">
                Submit Inquiry
                <span>→</span>
              </button>

              {submitted && (
                <p className="contact-form-success">
                  Your inquiry has been recorded for review.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;